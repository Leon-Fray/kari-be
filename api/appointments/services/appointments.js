'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

/**
 * Appointments service
 * Refactored from rentals service
 */

module.exports = {
  async find(params) {
    return strapi.query('appointments').find(params);
  },
  async findOne(params) {
    return strapi.query('appointments').findOne(params);
  },
  async create(data) {
    return strapi.query('appointments').create(data);
  },
  async update(params, data) {
    return strapi.query('appointments').update(params, data);
  },
  async delete(params) {
    return strapi.query('appointments').delete(params);
  },
};
