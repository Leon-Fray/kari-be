module.exports = {
  attributes: {
    Content: {
      type: 'string',
      required: true,
    },
    Sender: {
      model: 'plugins::users-permissions.user',
      required: true,
    },
    Receiver: {
      model: 'plugins::users-permissions.user',
      required: true,
    },
    ReadStatus : {
        type: 'boolean',
        defaultsTo: false,
    },
    SentAt: {
        type: 'datetime',
        defaultsTo: () => new Date(),
    }
  },
};