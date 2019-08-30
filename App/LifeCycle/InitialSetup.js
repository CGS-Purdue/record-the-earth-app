import React from 'react';
import { checkAppDirectoriesStatus }  from '../Utilities/Filesystem';
import { checkDb }  from '../Utilities/Database';

function initalAppSetup() {
   checkAppDirectoriesStatus();
   checkDb();
}

export { initalAppSetup }
