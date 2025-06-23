'use strict';

module.exports = {
  async find(params) {
    return strapi.query('messages').find(params);
  },

  async findOne(params) {
    return strapi.query('messages').findOne(params);
  },

  async create(data) {
    return strapi.query('messages').create(data);
  },

  async update(params, data) {
    return strapi.query('messages').update(params, data);
  },

  async delete(params) {
    return strapi.query('messages').delete(params);
  },
};
