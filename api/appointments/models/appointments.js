'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  attributes: {
    patient: {
      model: 'plugins::users-permissions.user',
      required: true,
    },
    practitioner: {
      model: 'practitioners',
      required: true,
    },
    appointment_date: {
      type: 'date',
      required: true,
    },
    start_time: {
      type: 'time',
      required: true,
    },
    end_time: {
      type: 'time',
      required: true,
    },
    consultation_type: {
      type: 'enumeration',
      enum: ['virtual', 'in-person'],
      required: true,
    },
    status: {
      type: 'enumeration',
      enum: ['scheduled', 'completed', 'cancelled'],
      required: true,
      default: 'scheduled',
    },
    payment_status: {
      type: 'enumeration',
      enum: ['pending', 'paid', 'failed'],
      required: true,
      default: 'pending',
    },
    notes: {
      type: 'text',
      required: false,
    },
  },
};
