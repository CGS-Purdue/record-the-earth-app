import React, { Component } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import * as FileSystem from 'expo-file-system';
import Constants from 'expo-constants';


// const APP_TEMP = FileSystem.cacheDirectory;
// const DATA_DIR = 'data';
// const DB_DIR = 'SQLite';
// const prefix = 'file://';
// const file_name = file_uri.split('/').slice(-1);
// const new_uri = [storage_path,file_name].join('/');


function FileItem({ id, name, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
      ]}
    >
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  );
}


class FileListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intialized: false,
      files: new Map(),
      selected: { id: 0},
    }

    let APP_PATH = FileSystem.documentDirectory;
    let SOUND_DIR = 'media';
    let SOUND_PATH = [APP_PATH, SOUND_DIR].join('');

    this.config = {
      appPath: APP_PATH,
      soundDir: SOUND_DIR,
      soundPath: SOUND_PATH,
    }

    this.updateFiles = this.updateFiles.bind(this);
    this.getFileList = this.getFileList.bind(this);
  }


  updateFiles(items){
    let location = this.config.soundPath;
    let _files = items.map(function(item, num){
    let name = item.split('/').slice(-1).join('');
    let obj = Object.create(null);
      obj.id = name.replace('.m4a', '');
      obj.name = name;
      obj.location = location;

      return {
        id: name.replace('.m4a', ''),
        name: name,
        test: num,
        data: obj,
      };
    });
    console.log('updateFiles', _files);
    this.setState({files: _files});
  }

  async getFileList (location) {
    let storagePath = this.config.soundPath;
    this.filePromise = await FileSystem.readDirectoryAsync(storagePath);
    Promise.resolve(this.filePromise).then(
      (result) => {
        if (!result){ console.log('no files');}
        else {
          console.log('resolve', result);
          this.updateFiles(result);
       }
    })
  }


  componentWillMount() {
    if (!this.state.intialized) {
      this.setState({ intialized: true });
      this.getFileList();
      console.log('getting files early');
    }
  }

  componentDidMount() {
    if (!this.state.intialized) {
      this.getFileList();
      console.log('getting files');
    }
  }

  setSelected(newSelected) {
    this.setState({
      selected: newSelected
    })
  }

  onSelect = (id) => {
    console.log('id', id);
    //   const newSelected = new Map(selected);
    //   newSelected.set(id, !selected.get(id));
    //   this.setSelected(newSelected);
    // }
    // [selected],
  }

  render() {
    console.log();
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={this.state.files}
            extraData={this.state.selected}
            keyExtractor={(item)=>item.id}
            renderItem={({item}) => (
              <FileItem
                id={item.id}
                selected={!!this.state.id}
                name={item.name}
                data={item.data}
                onSelect={this.onSelect}
              />
            )}
          />
        </SafeAreaView>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export { FileListScreen };