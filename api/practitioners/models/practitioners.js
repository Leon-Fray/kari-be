'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true,
    },
    specialty: {
      type: 'string',
      required: true,
    },
    license_number: {
      type: 'string',
      required: true,
      unique: true,
    },
    certifications: {
      type: 'json',
      required: false,
    },
    description: {
      type: 'text',
      required: false,
    },
    clinic_location: {
      type: 'json',
      required: false,
    },
    contact_info: {
      type: 'json',
      required: false,
    },
    availability: {
      type: 'json',
      required: false,
    },
    average_rating: {
      type: 'decimal',
      required: false,
    },
    reviews: {
      collection: 'reviews',
      via: 'practitioner',
    },
    user: {
      model: 'plugins::users-permissions.user',
      required: true,
    },
    consultation_types: {
      type: 'json',
      required: true,
      default: ["virtual"],
    },
  },
};
