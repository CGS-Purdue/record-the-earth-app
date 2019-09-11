this.schema = {
  id: {
    type: 'integer',
    info: 'primary_key',
  },
  key: {
    type: 'string',
    info: 'meta-property-key-name',
  },
  value: {
    type: 'string',
    info: 'meta-property-key-value',
  },
  lastUpdated: {
    type: 'date',
    info: 'date entry was updated',
  },
};
