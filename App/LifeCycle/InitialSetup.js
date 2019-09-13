import React from 'React';
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
  console.log('StatusDB', StatusDB);

  checkAppDirectoriesStatus();

  const initstatus = new StatusDB({
    autoconnect: true
  });


  console.log('\n\n INIT STATUS\n\n', initstatus);
  // initstatus.connect();

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
