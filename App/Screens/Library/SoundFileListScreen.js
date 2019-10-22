import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import * as FileSystem from 'expo-file-system';
// import { SoundscapeListViewHeader } from '../../Components/ListViews/SoundscapeListViewHeader';
// import Constants from 'expo-constants';
// import { HeadingText } from '../../Components/Text/HeadingText';
// import { MOCK_SOUND_FILES } from '../../Config/MockSoundFiles';
// import { SoundDB } from '../../Components/Database/SoundDB';
import { StorageConfig } from '../../Config/Storage';
import { ListViewEmpty } from '../../Components/ListViews/ListViewEmpty';
import { SoundFileListViewItem } from '../../Components/ListViews/SoundFileListViewItem';
import { MinimalPlayer } from '../../Components/AudioPlayer/MinimalPlayer';
import { SoundFileListViewHeader } from '../../Components/ListViews/SoundFileListViewHeader';
import { Theme } from '../../Theme';

const _styles = Theme.Styles;
// const _assets = Theme.Assets;
// const _colors = Theme.Colors;
// const _vars = Theme.Variables;


class SoundFileListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: true,
      intialized: false,
      selected: { id: false },
      files: [],
    };

    this.config = {
      appPath: StorageConfig.APP_PATH,
      pendingFiles: StorageConfig.STORAGE_PENDING_SOUNDFILES,
      uploadedFiles: StorageConfig.STORAGE_UPLOADED_SOUNDFILES,
      soundPath: StorageConfig.STORAGE_SOUNDFILE_PATH,
    };
    this.listCache = [];
    this.updateFiles = this.updateFiles.bind(this);
    this.getFileList = this.getFileList.bind(this);
    this._isMounted = false;
  }l

  componentDidMount() {
    this._isMounted = true;
    if (this.listCache.length > 0) {
      console.log('listCache', this.listCache);
    }
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


  async getFileList() {
    let storagePath = this.config.uploadedFiles;
    this.filePromise = await FileSystem.readDirectoryAsync(storagePath);

    Promise.resolve(this.filePromise).then((result) => {
      if (!result) {
        console.log('no files');
      } else {
        console.log('files', result);
        this.updateFiles(result);
      }
    });
  }

  updateFiles(items) {
    this.setRefreshingState(true);
    var baseDir = this.config.uploadedFiles;
    let _files = items.map(function(item, num) {
      let name = item.split('/').slice(-1).join('');

      return {
        id: name.replace('.m4a', ''),
        fileUri: [baseDir, item].join('/'),
        name: name,
        index: num,
      }
    });

    this.listCache = _files;

    if (this._isMounted) {
      this.setState({ files: _files});
    }

    this.setRefreshingState(false);
  }


  setSelected(newSelected) {
    this.lastSelected = this.state.selected;
    this.nextSelected = newSelected.id;
    if (this._isMounted && newSelected.id !== this.state.selected) {
      this.setState({
        selected: newSelected.id,
        fileUri: newSelected.fileUri
      });
    }
  }

  onSelect = (selected) => {
    this.setSelected({
      id: selected.id,
      fileUri: selected.fileUri
    });
  };

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
            <SoundFileListViewHeader
              onActionButton={()=>{
                this.props.navigation.navigate({ routeName:'Soundscapes' })
              }}/>
          )}
          keyExtractor={(item) => item.id}
          renderItem={
            ({ item, index, selected, seperators }) => (
            <SoundFileListViewItem
              id={item.id}
              selected={(item.id === this.state.selected)}
              name={item.name}
              fileUri={item.fileUri}
              onSelect={this.onSelect}/>
          )}/>

      <MinimalPlayer
        fileUri={this.state.fileUri}
        playState={this.state.playState}/>
      </View>
    );
  }
}

export { SoundFileListScreen };
