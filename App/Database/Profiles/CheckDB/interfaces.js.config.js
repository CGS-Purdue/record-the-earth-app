

  const __EMPTY__ = Object.create(null);
  let _config = this.props.config;
  let _db_name = _config.name;
  let _db_size = _config.size;
  let _db_ver = _config.version;
  let _db_desc = _config.description;
  let _db_schema = this.props.schema;
  let connectionConfig = Object.assign(__EMPTY__, this.props.defaults.connection, options.connection);
