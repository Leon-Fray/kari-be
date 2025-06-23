'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

/**
 * Practitioners service
 * Refactored from vehicles service
 */

module.exports = {
  async find(params) {
    return strapi.query('practitioners').find(params);
  },
  async findOne(params) {
    return strapi.query('practitioners').findOne(params);
  },
  async create(data) {
    return strapi.query('practitioners').create(data);
  },
  async update(params, data) {
    return strapi.query('practitioners').update(params, data);
  },
  async delete(params) {
    return strapi.query('practitioners').delete(params);
  },
  async findFiltered(filters) {
    const { location, date, time, ...rest } = filters;
    let query = {};
    // Special handling for location
    if (location) {
      query.$or = [
        { city: { $containsi: location } },
        { state: { $containsi: location } },
        { zip_code: { $containsi: location } },
        { clinic_address: { $containsi: location } }
      ];
    }
    // Dynamically handle all other fields
    for (const [key, value] of Object.entries(rest)) {
      if (value === undefined || value === null || value === "") continue;
      if (key === "consultationType") {
        query.consultation_types = { $contains: value };
      } else if (key.endsWith("_contains")) {
        // e.g. name_contains=John
        const field = key.replace("_contains", "");
        query[field] = { $containsi: value };
      } else if (key.endsWith("_gte")) {
        const field = key.replace("_gte", "");
        query[field] = { ...(query[field] || {}), $gte: Number(value) };
      } else if (key.endsWith("_lte")) {
        const field = key.replace("_lte", "");
        query[field] = { ...(query[field] || {}), $lte: Number(value) };
      } else {
        query[key] = value;
      }
    }
    if (date && time) {
      const initialPractitioners = await strapi.query('practitioners').find(query);
      let availablePractitioners = [];
      for (const practitioner of initialPractitioners) {
        const existingAppointments = await strapi.query('appointments').find({
          practitioner: practitioner.id,
          appointment_date: date,
          start_time_lte: time,
          end_time_gt: time,
          status_ne: 'cancelled'
        });
        if (existingAppointments.length === 0) {
          availablePractitioners.push(practitioner);
        }
      }
      return availablePractitioners;
    } else {
      return await strapi.query('practitioners').find(query);
    }
  },
};
