
const checkDB = (options) => {
  this.props = {
    ref: checkdbRef,
    config: {
      database: CHECKDB_CONFIG.NAME,
      name: CHECKDB_CONFIG.NAME,
      version: CHECKDB_CONFIG.VERSION,
      size: null,
    },
    defaults: {
      connection: {
        autoconnect: true,
      },
    },
    state: {
      isConnected : false,
      isError : false,
    },
    connection: null,
    messages: {},
    schema: {
      id: {
        type: 'integer',
        info: 'primarykey',
      },
      datetime: {
        type: 'date',
        info: 'check datetime',
      },
    }
  }
