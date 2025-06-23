'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async create(ctx) {
    const entity = await strapi.services.messages.create(ctx.request.body);
    return sanitizeEntity(entity, { model: strapi.models.messages });
  },

  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.messages.search(ctx.query);
    } else {
      entities = await strapi.services.messages.find(ctx.query);
    }
    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.messages }));
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.services.messages.findOne({ id });
    return sanitizeEntity(entity, { model: strapi.models.messages });
  },

  async update(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.services.messages.update({ id }, ctx.request.body);
    return sanitizeEntity(entity, { model: strapi.models.messages });
  },

  async delete(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.services.messages.delete({ id });
    return sanitizeEntity(entity, { model: strapi.models.messages });
  },
};