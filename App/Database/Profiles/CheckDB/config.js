

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

  const __EMPTY__ = Object.create(null);
  let _config = this.props.config;
  let _db_name = _config.name;
  let _db_size = _config.size;
  let _db_ver = _config.version;
  let _db_desc = _config.description;
  let _db_schema = this.props.schema;
  let connectionConfig = Object.assign(__EMPTY__, this.props.defaults.connection, options.connection);
