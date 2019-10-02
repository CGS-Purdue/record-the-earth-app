import React, { Component } from 'react';
import { SafeAreaView, TouchableOpacity, FlatList, View, Text, StyleSheet } from 'react-native';
import { Section, ImgBgFill, CenterView, PadView, RootView } from '../../Components/Views';
import { HeadingText } from '../../Components/Text/HeadingText';
import { FlatListHeader } from '../../Components/ListViews/FlatListHeader';
import { StorageConfig } from '../../Config/StorageConfig';
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
    <View
      style={{
        flex: 1,
        width: '100%',
        backgroundColor: '#444444',
        display: 'flex',
      }}
    >
      <TouchableOpacity
        onPress={() => onSelect(id)}
        style={[
          styles.item,
          {
            backgroundColor: selected
              ? 'rgba(255,255,255,.5)'
              : 'rgba(255,255,255,.4)',
          },
        ]}
      >
        <View style={styles.surface}>
          <Text style={styles.item}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}


class FileListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intialized: false,
      files: new Map(),
      selected: { id: 0 },
    };

    this.config = {
      appPath: StorageConfig.APP_PATH,
      pendingFiles: StorageConfig.STORAGE_PENDING_SOUNDFILES,
      uploadedFiles: StorageConfig.STORAGE_UPLOADED_SOUNDFILES,
      soundPath: StorageConfig.STORAGE_SOUNDFILE_PATH,
    };
    console.log(this.config);
    this.updateFiles = this.updateFiles.bind(this);
    this.getFileList = this.getFileList.bind(this);
  }

  updateFiles(items) {
    let location = this.config.soundPath;
    let _files = items.map(function(item, num) {
      let name = item
        .split('/')
        .slice(-1)
        .join('');
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

    console.log('updateFiles');
    if (!_files){
      this.setState({ files: MOCK_SOUND_FILES });
    } else {
      this.setState({ files: _files });
    }
  }

  async getFileList(location) {
    console.log(this.config);
    let storagePath = this.config.soundPath;
    this.filePromise = await FileSystem.readDirectoryAsync(storagePath);
    Promise.resolve(this.filePromise).then((result) => {
      if (!result) {
        console.log('no files');
      } else {
        console.log('resolve', result);
        this.updateFiles(result);
      }
    });
  }

  componentWillMount() {
    console.log('getting files early');
  }

  componentDidMount() {
    console.log('[FileListScreen] did mount', this.state);
    this.getFileList();
  }

  setSelected(newSelected) {
    this.setState({
      selected: newSelected,
    });
  }

  onSelect = (id) => {
    console.log('id', id);
    //   const newSelected = new Map(selected);
    //   newSelected.set(id, !selected.get(id));
    //   this.setSelected(newSelected);
    // } depend on anything outside of the data prop, stick it here and treat it immutably.
    // Type	Required
    // any	No
    // [selected],
    // initialNumToRender={6}
  };

  render() {
    console.log();
    return (
      <View
        style={{
          backgroundColor: '#303030',
          flex: 1,
          width: '100%',
          height: '100%',
          display: 'flex',
          paddingTop: 20,
          paddingHorizontal: 10,
          justifyContent: 'center',
        }}
      >
        <FlatList
          data={this.state.files}
          extraData={this.state.selected}
          ListHeaderComponent={FlatListHeader}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <FileItem
              id={item.id}
              selected={!!this.state.id}
              name={item.name}
              data={item.data}
              onSelect={this.onSelect}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titlebox: {
    flex: 1,
    width: '100%',
    backgroundColor: '#222',
    paddingVertical: 6,
    display: 'flex',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: '#bbb',
  },
  surface: {
    flex: 1,
    padding: 8,
    height: 80,
    // width: ',
    marginVertical: 5,
    backgroundColor: 'rgba(255,255,255,.7)',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  container: {
    flex: 1,
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#666666',
  },
  item: {
    backgroundColor: 'rgba(255,255,255,.1)',
    padding: 0,
    marginVertical: 4,
    marginHorizontal: 5,
  },
  item: {
    fontSize: 16,
  },
});

export { FileListScreen };



// ListHeaderComponent={() => {
//   return (
//     <View style={styles.titlebox}>
//       <Text style={styles.title}>{'File List'}</Text>
//     </View>
//   );
// }}
