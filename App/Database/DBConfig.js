import { DB_CONFIG } from '../Config/Db';

// The version, description and size arguments are ignored,
// but are accepted by the function for compatibility with the WebSQL specification
// 'Record The Earth in-app database',

function getDbConfig () {
  return {
     name: DB_CONFIG.DATABASE_NAME,
     version: DB_CONFIG.DATABASE_TABLE,
     description: DB_CONFIG.DATABASE_VERSION,
     size: null,
  };
}

export { getDbConfig }
