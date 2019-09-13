import React, { Component, createRef } from 'React';
import { SQLite } from 'expo-sqlite';
import { CHECKDB_CONFIG } from '../../Config/Db';
import { Connection } from '../Connection';

const checkdbRef = createRef();
const __EMPTY__ = Object.create(null);
let _config = this.props.config;
let _db_name = _config.name;
let _db_size = _config.size;
let _db_ver = _config.version;
let _db_desc = _config.description;
let _db_schema = this.props.schema;
let connectionConfig = Object.assign(__EMPTY__, this.props.defaults.connection, options.connection);

  class CheckDB {

    super(props);
      this.name = 'SystemCheck';
      this.connect = this.connect.bind(this)
      this.connection = connection;
      this.connection = connectionConfig.autoconnect ? SQLite.openDatabase(_db_name, _db_ver, _db_desc, _db_size) : __EMPTY__;
      this.config = _config;
      this._schema =  _db_schema;
      this.onUpgradeVersion = this.onUpgradeVersion.bind(this);
      this.setConfig = this.setConfig.bind(this);
      this.all = this.all.bind(this);
      thizs.initDbHealthCheck = this.initDbHealthCheck.bind(this);
      this.create = this.create.bind(this)
      this.insert = this.insert.bind(this)
      this.select = this.select.bind(this)

      this.state = {

        isConnected : false,
      };
    }
{

  create
  insert
  select
  all
  onUpgradeVersion
  initDbHealthCheck

    setConfig(options) {
      let empty = Object.create(null);
      let initalConfig = this.props.config;
      let _config = Object.assign(empty, initalConfig, options);
      this.props.config = _config;
// PUBLIC METHODS
    }
C()     {  this.ConnectionInterface(statements.create, null, false); }
C()     {  let timestamp = new Date(); this.ConnectionInterface(statements.insert, [timestamp], false) }
C(limit) { this.ConnectionInterface(statements.select, limit, false) }
C()       { this.ConnectionInterface(statements.all, null, false) }
C(      newVersion, curVersion) {   console.log(this.messages.upgradeVersion, curVersion, newVersion); }
C() {   this.create(); this.insert(); this.select([1]); }
  }


  const __EMPTY__ = Object.create(null);
  let _config = this.props.config;
  let _db_name = _config.name;
  let _db_size = _config.size;
  let _db_ver = _config.version;
  let _db_desc = _config.description;
  let _db_schema = this.props.schema;
  let connectionConfig = Object.assign(__EMPTY__, this.props.defaults.connection, options.connection);

data: NULL,
options: {},

  return new CheckDB
}

export { checkDB }
