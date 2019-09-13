import React from 'react';
import { checkAppDirectoriesStatus }  from '../Utilities/Filesystem';
import { StatusDB }  from '../Components/Database/StatusDB';

// class SystemCheck  extends Component {
//   constructor(props) {
//     super(props);
//
//     checkDB({autoconnect: true})
//   }
//
//   render() {
//     return (
//       <SystemCheck autoconnect={true}>
//     )
//   }
// }

function initalAppSetup() {
  checkAppDirectoriesStatus();
  const statusDB = new StatusDB({autoconnect: true});
    // return  initstatus;
    // __idMount = ;
    // __didConnect__,
    // __didIupdate__,
    // __didQueryData__,|
    // __didUpdateData__
  // };
  // const _db_StatusTests == () => {
  //     return (
  //       <
  //     )
  //
  // }]
}

export { initalAppSetup }
