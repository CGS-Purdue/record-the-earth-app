
dbSuccess(data, options){
  console.log('query transaction completed onSuccessfully');
  console.log('data', data);
  this.setState({data: result.rows._array});
}}


txSuccess(tx, result, options){
   // { insertId, rowsAffected, rows: { length, item(), _array, }, }
  console.log('resultset', result);
  console.log('tx resultset', result);
  this.setState({data: result.rows._array});
    this.setState({data: result.rows._array});
}

dbError(tx, error){
  console.log(tx, error);
    this.setState({data: result.rows._array});
}

// insertId,
// rowsAffected,
// rows: {
// length,
// item(),
// _array,
txResult = (tx, data, opotions) => {

  if (data) {
    if (data.insertId){
      //data.insertId
       console.log(data.insertId + 'iwas inserted'
       data.insertId,
       data.rowsAffected,
       data.rows,
       data.length,
       data.item,
       data._array,
     );
    }
  }
  
  this.setState({data: result.rows._array});
  this.setState({data: result.rows._array});
    console.log('resultset', result);
    console.log('tx resultset', result);
  this.setState({data: result.rows._array});
  if (this.props.callbak) {

  }

  if (this.props.callback){
    return callback()
  }
}
