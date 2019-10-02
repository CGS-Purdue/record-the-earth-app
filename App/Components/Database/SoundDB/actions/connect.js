import { dbConfig } from '../Props/config';

const __config__ = dbConfig;

function soundscapeDbConnect() {
  constructor(props) {
    super(props);
    this.state = {
      isConnected : false,
    };
    let _name =     if (!this.props.name) {  __config__.name }
    let _version =  if (!this.props.version) {  __config__.version }
    let _descrip =  if (!this.props.description) {  __config__.description }
    let _size =     if (!this.props.size) { __config__.size }
  }

  componentDidMount() {
    if (this.props.autoconnect){
      this.setConnection();
    }
  }

  setConnection = (config) => {
    if (this.autoconnect) {
      const _connection = new Connection({
        name: _name
        version : _version
        description: _descrip
        size : _size
        onConnect :
      })

    this.connection = _connection;
    this.connection.connect();
    }
  }
}


export { SoundDBActions }
