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
};
