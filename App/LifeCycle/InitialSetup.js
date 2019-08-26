import React from 'react';
import { checkAppDirectoriesStatus }  from '../Utilities/Filesystem';
import { connectDb, getDbConfig, checkDb }  from '../Utilities/Database';

function initalAppSetup() {
   checkAppDirectoriesStatus();
   checkDb();
}

export { initalAppSetup }
