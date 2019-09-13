
class SoundDB {
constructor() {
// this.size = _db_size;
this.config = _config;
this.db = SQLite.openDatabase(_db_name, _db_ver, _db_desc, _db_size);
this.onConnect = this.onConnect.bind(this);
this.onUpgradeVersion = this.onUpgradeVersion.bind(this);
this.setConfig = this.setConfig.bind(this);
this._transact = this._transact.bind(this);
}

this.props = {
ref: dbRef,
config: {
name: DB_CONFIG.DATABASE_NAME,
table: DB_CONFIG.DATABASE_TABLE,
version: DB_CONFIG.DATABASE_VERSION,
tablename: 'Soundscapes',
size: null,
name: DB_CONFIG.DATABASE_NAME,
version: DB_CONFIG.DATABASE_TABLE,
description: DB_CONFIG.DATABASE_VERSION,
size: null,
},

let _config = this.props.config;
let _db_name = _config.name;
let _db_size = _config.size;
let _db_ver = _config.version;
let _db_desc = _config.description;
