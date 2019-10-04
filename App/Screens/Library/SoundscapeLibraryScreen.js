import React, { Component } from 'react';
import { SafeAreaView, TouchableOpacity, FlatList, View, Text, StyleSheet } from 'react-native';
// import { Section, CenterView, PadView, RootView } from '../../Components/Views';
import { SoundscapeListViewHeader } from '../../Components/ListViews/SoundscapeListViewHeader';
import { ListViewEmpty } from '../../Components/ListViews/ListViewEmpty';
import { SoundscapeListViewItem } from '../../Components/ListViews/SoundscapeListViewItem';

import { StorageConfig } from '../../Config/Storage';
import * as FileSystem from 'expo-file-system';

import { Theme } from '../../Theme';

const _assets = Theme.Assets;
const _styles = Theme.Styles;
const _colors = Theme.Colors;
const _vars = Theme.Variables;


class SoundscapeLibraryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: true,
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
    this.updateFiles = this.updateFiles.bind(this);
    this.getFileList = this.getFileList.bind(this);
  }

  setRefreshingState(isRefreshing){
    this.setState({refreshing: isRefreshing});
  }

  getNavigationParams() {
    return this.props.navigation.state.params || {};
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
    this.setState({ files: _files, refreshing: false });
  }

  async getFileList(location) {
    let storagePath = this.config.uploadedFiles;
    this.filePromise = await FileSystem.readDirectoryAsync(storagePath);
    Promise.resolve(this.filePromise).then((result) => {
      if (!result) {
        console.log('no files');
      } else {
        this.setState({refreshing: true})
        this.updateFiles(result);
      }
    });
  }

  componentDidMount() {

    console.log(
        '\n[SoundscapeListViewItem] style debug\n--\n',
        '#Listview\n',
        '\n.item\n', _styles.listview_item,
        '\n.item_surface\n', _styles.listview_item_surface,
        '\n.item_text\n', _styles.listview_item_text,
        '\n.item_text_box\n', _styles.listview_item_text_box,
        '\n.item_touchable\n', _styles.listview_item_touchable,
        '\n.sounditem_playbtn_box\n', _styles.listview_sounditem_playbtn_box,
        '\n.sounditem_playbtn_icon\n', _styles.listview_sounditem_playbtn_icon,
      );

    if (!this.state.intialized) {
      this.getFileList();
      console.log('getting files');
    }
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
  };


  render() {
    return (
      <View style={_styles.listview_screen_container}>
        <FlatList
          data={this.state.files}
          refrshing={this.state.refreshing}
          initialNumToRender={6}
          extraData={this.state.selected}
          ListEmptyComponent={ListViewEmpty}
          ListHeaderComponent={SoundscapeListViewHeader}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index, separators }) => (
            <SoundscapeListViewItem
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

export { SoundscapeLibraryScreen };

// renderItem={({ item }) => (
//   <FileItem
//     id={item.id}
//     selected={!!this.state.id}
//     name={item.name}
//     data={item.data}
//     onSelect={this.onSelect}
//     />
// )}
