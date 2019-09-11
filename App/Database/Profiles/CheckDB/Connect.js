
class ConnectionQueryInterface  extends Component {
  constructor(props) {
    super(props);
    this.name = 'DbQueryConnectionINterface';
    this.DisplayName = 'DBQueryConnectionINterface';

    let _dbError = configHandle(DbError, Options);
    let _dbSuccess = configHandle(DbResut, Options);

    this.dbSuccess = this.onConnect,
    this.dbError = this.onSuccess,
    this.onError = this.onError,
    this.txResult = this.onTxResult,
    this.txError = this.txError,

    this.state = {
      hasError: false,
      hasResult: false,
      isError: false,
      hasNewResult: false,
      resultCache : [],
      lastError: null,
    }

  }
