'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

/**
 * Practitioners controller
 * Refactored from vehicles controller
 */

module.exports = {
  async create(ctx) {
    // Create a new practitioner
    return strapi.services.practitioners.create(ctx.request.body);
  },

  async find(ctx) {
    const filters = ctx.query;
    // Implement search/filter logic for practitioners
    return strapi.services.practitioners.find(filters);
  },

  async findOne(ctx) {
    // Find a single practitioner by ID
    const { id } = ctx.params;
    return strapi.services.practitioners.findOne({ id });
  },

  async update(ctx) {
    // Update practitioner details
    const { id } = ctx.params;
    return strapi.services.practitioners.update({ id }, ctx.request.body);
  },

  async delete(ctx) {
    // Delete a practitioner
    const { id } = ctx.params;
    return strapi.services.practitioners.delete({ id });
  },
};
