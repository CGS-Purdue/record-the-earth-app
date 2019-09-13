
const StatusSchema = {
  schema: {
    id: {
      type: 'integer',
      info: 'primarykey',
    },
    datetime: {
      type: 'date',
      info: 'check datetime',
    },
    response: {
      type: 'boolean',
      info: 'server responded',
    },
  }
};

export { StatusSchema }
