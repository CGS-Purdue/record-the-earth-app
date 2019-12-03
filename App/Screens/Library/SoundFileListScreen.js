import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { _dev } from '../../Utilities/Log';
import { StorageConfig } from '../../Config/Storage';
import { ListViewEmpty } from '../../Components/ListViews/ListViewEmpty';
import { SoundFileListViewItem } from '../../Components/ListViews/SoundFileListViewItem';
import { MinimalPlayer } from '../../Components/AudioPlayer/MinimalPlayer';
import { SoundFileListViewHeader } from '../../Components/ListViews/SoundFileListViewHeader';
// import { SoundscapeListViewHeader } from '../../Components/ListViews/SoundscapeListViewHeader';
// import Constants from 'expo-constants';
// import { HeadingText } from '../../Components/Text/HeadingText';
// import { MOCK_SOUND_FILES } from '../../Config/MockSoundFiles';
// import { SoundDB } from '../../Components/Database/SoundDB';
import { Theme } from '../../Theme';

const LOG_CTX = 'SoundFileLIstView';
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
      selected: {
        id: false,
        fileName: false
      },
      files: [],
    };

    this.config = {
      appPath: StorageConfig.APP_PATH,
      pendingFiles: StorageConfig.STORAGE_PENDING_SOUNDFILES,
      uploadedFiles: StorageConfig.STORAGE_UPLOADED_SOUNDFILES,
      soundPath: StorageConfig.STORAGE_SOUNDFILE_PATH,
    };
    this.fileSrcpath = this.config.pendingFiles;
    this.listCache = [];
    this.updateFiles = this.updateFiles.bind(this);
    this.getFileList = this.getFileList.bind(this);
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    if (this.listCache.length > 0) {
      _dev(LOG_CTX, 'listCache', this.listCache);
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
    let uploadedFiles = this.config.uploadedFiles;
    // let pendingFiles = this.config.pendingFiles;
    let soundPath = this.config.soundPath;
    // console.log('uploadedFiles path', uploadedFiles);
    // console.log('strage path', soundPath);
    let filelist = await FileSystem.readDirectoryAsync(uploadedFiles);
    Promise.resolve(filelist).then((result) => {
      if (!result) {
        _dev(LOG_CTX, 'no files');
      } else {
        _dev(LOG_CTX, 'files', result);
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
      this.setState({files: _files});
    }
    this.setRefreshingState(false);
  }


  setSelected(newSelected) {
    this.lastSelected = this.state.selected;
    this.nextSelected = newSelected.id;
    if (this._isMounted && newSelected.id !== this.state.selected) {
      console.log('item setSelected');
      this.setState({
        selected: newSelected.id,
        fileUri: newSelected.fileUri
      });
    }
  }


  onSelect = (_selected) => {
    this.setSelected({
      id: _selected.id,
      fileUri: _selected.fileUri
    });
    // this.props.navigation.navigate({
    //   routeName:'SoundscapePlayer',
    //   params: { selected: _selected }
    // })
  };


  render() {
    return (
      <View style={_styles.listview_screen_container}>
        <MinimalPlayer
          fileUri={this.state.fileUri}
          playState={this.state.playState}/>
        <FlatList
          data={this.state.files}
          refrshing={this.state.refreshing}
          initialNumToRender={8}
          extraData={this.state.selected}
          ListEmptyComponent={ListViewEmpty}
          ListHeaderComponent={()=>(
            <SoundFileListViewHeader
              onActionButton={()=>{
                this.props.navigation.navigate({ routeName:'Soundscapes' })
              }}
            />
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
        </View>

    );
  }
}

export { SoundFileListScreen };
