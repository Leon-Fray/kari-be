'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  attributes: {
    appointment: {
      model: 'appointments',
      required: true,
    },
    amount: {
      type: 'decimal',
      required: true,
    },
    currency: {
      type: 'string',
      required: true,
    },
    transaction_status: {
      type: 'enumeration',
      enum: ['pending', 'completed', 'failed'],
      required: true,
      default: 'pending',
    },
    transaction_id: {
      type: 'string',
      required: false,
    },
    payment_method: {
      type: 'string',
      required: false,
    },
    paid_at: {
      type: 'datetime',
      required: false,
    },
  },
};
