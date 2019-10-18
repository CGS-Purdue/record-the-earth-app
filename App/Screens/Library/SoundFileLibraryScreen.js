import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { FileListViewSoundItem, FileListViewItem } from '../../Components/ListViews/FileListViewItem';
import { ListViewEmpty } from '../../Components/ListViews/ListViewEmpty';
import { SoundscapeListViewHeader } from '../../Components/ListViews/SoundscapeListViewHeader';
import * as FileSystem from 'expo-file-system';
// import Constants from 'expo-constants';
// import { HeadingText } from '../../Components/Text/HeadingText';
import { StorageConfig } from '../../Config/Storage';
// import { MOCK_SOUND_FILES } from '../../Config/MockSoundFiles';
import { FileListViewHeader } from '../../Components/ListViews/FileListViewHeader';
// import { SoundDB } from '../../Components/Database/SoundDB';
import { Theme } from '../../Theme';

const _assets = Theme.Assets;
const _styles = Theme.Styles;
const _colors = Theme.Colors;
const _vars = Theme.Variables;


class SoundFileLibraryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: true,
      intialized: false,
      files: [],
      selected: { id: 0 },
    };

    this.config = {
      appPath: StorageConfig.APP_PATH,
      pendingFiles: StorageConfig.STORAGE_PENDING_SOUNDFILES,
      uploadedFiles: StorageConfig.STORAGE_UPLOADED_SOUNDFILES,
      soundPath: StorageConfig.STORAGE_SOUNDFILE_PATH,
    };

    this.updateFiles = this.updateFiles.bind(this);
    this.getFileList = this.getFileList.bind(this);
    this._isMounted = false;
  }l

  componentDidMount() {
    this._isMounted = true;
    this.getFileList();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  setRefreshingState(isRefreshing){
    if (this._isMounted) {
      this.setState({refreshing: isRefreshing});
    }
  }

  getNavigationParams() {
    return this.props.navigation.state.params || {};
  }

  updateFiles(items) {
    this.setRefreshingState(true);

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

    this.listCache = _files;

    if (this._isMounted) {
      this.setState({ files: _files});
    }
    this.setRefreshingState(false);
  }

  async getFileList(location) {
    let storagePath = this.config.uploadedFiles;
    this.filePromise = await FileSystem.readDirectoryAsync(storagePath);
    Promise.resolve(this.filePromise).then((result) => {
      if (!result) {
        console.log('no files');
      } else {
        this.updateFiles(result);
      }
    });
  }

  setSelected(newSelected) {
    this.lastSelected = this.state.selected;
    this.nextSelected = newSelected;
    if (this._isMounted) {
      this.setState({
        selected: newSelected,SoundscapeListViewHeader
      })
    }
  }


  render() {
    return (
      <View style={_styles.listview_screen_container}>
        <FlatList
          data={this.state.files}
          refrshing={this.state.refreshing}
          initialNumToRender={8}
          extraData={this.state.selected}
          ListEmptyComponent={ListViewEmpty}
          ListHeaderComponent={() => (
            <FileListViewHeader
              onActionButton={()=>{
                this.props.navigation.navigate({ routeName:'SoundscapeLibrary' })
              }}
            />
          )}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index, seperators }) => (
            <FileListViewSoundItem
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

export { SoundFileLibraryScreen };
