import React from 'react';
import { checkAppDirectoriesStatus }  from '../Utilities/Filesystem';
import { checkDB }  from '../Database/CheckDB';

console.log('checkDB', checkDB);

const SystemCheck = checkDB({autoconnect: true})
console.log('SystemCheck', SystemCheck);

function initalAppSetup() {
  checkAppDirectoriesStatus();
  // SystemCheck.initDbHealthCheck();
}

export { initalAppSetup }
