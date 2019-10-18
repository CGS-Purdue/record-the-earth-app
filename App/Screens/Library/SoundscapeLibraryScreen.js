import React, { Component } from 'react';
import {  FlatList, View } from 'react-native';
import { SoundscapeListViewHeader } from '../../Components/ListViews/SoundscapeListViewHeader';
import { ListViewEmpty } from '../../Components/ListViews/ListViewEmpty';
import { SoundscapeListViewItem } from '../../Components/ListViews/SoundscapeListViewItem';
// import { SoundDB } from '../../Components/Database/SoundDB';
import { StorageConfig } from '../../Config/Storage';
import * as FileSystem from 'expo-file-system';
import { Theme } from '../../Theme';

import * as SQLite from 'expo-sqlite';

// const _assets = Theme.Assets;
const _styles = Theme.Styles;
// const _colors = Theme.Colors;
// const _vars = Theme.Variables;

const ConfigName = 'Soundscapes';
const ConfigDescription = 'Soundscape database';
const ConfigVersion = '1.0.0';
const createQuery = `CREATE TABLE
IF NOT EXISTS Soundscapes (
  id integer primary key autoincrement,
  datetime text not null,
  filepath text not null,
  filename text not null,
  description text not null,
  duration text not null,
  location not null,
  emotion text not null,
  biophony text not null,
  geophony text not null,
  anthrophony text not null,
  cultural text not null,
  pid text,
  isUploaded text not null);`;

const selectAllQuery = 'SELECT * FROM Soundscapes ORDER BY id DESC LIMIT 50;';

// const sdb = new SoundDB({autoconnect: true});
const sdb = SQLite.openDatabase(ConfigName, ConfigVersion, ConfigDescription, null);

/// -----------------------------------------------------------------
/// SOUNDSCAPE DATABASE LIBRARY
/// ============================
/// -----------------------------------------------------------------
class SoundscapeLibraryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: true,
      intialized: false,
      items: [],
      selected: { id: 0 },
    };

    this.config = {
      appPath: StorageConfig.APP_PATH,
      pendingFiles: StorageConfig.STORAGE_PENDING_SOUNDFILES,
      uploadedFiles: StorageConfig.STORAGE_UPLOADED_SOUNDFILES,
      soundPath: StorageConfig.STORAGE_SOUNDFILE_PATH,
    };

    // this.submitLocalDb = this.submitLocalDb.bind(this);
    this.updateItems = this.updateItems.bind(this);
    this.update = this.update.bind(this);
    // this.getFileList = this.getFileList.bind(this);
  }

  componentDidMount() {
    console.log('[SoundscapeLibraryScreen] mounted');
    console.log(sdb);
    sdb.transaction(tx => {
      tx.executeSql(createQuery);
    });
    console.log('[SoundscapeLibraryScreen] update;');
    this.update();
    //   sdb.connection.transaction(
    //     (tx)=>{tx.executeSql('SELECT * FROM Soundscapes;', null,
    //       (tx1, result) => {
    //         if (result.rows.length > 0) {console.log('Record Exists', result.rows)}
    //       }, txSuccess,
    //     )}, dbError, dbSuccess,
    //   );
    // };
  }

  update() {
    console.log('[SoundscapeLibraryScreen] update;');
    sdb.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM Soundscapes',
        null,
        (_, { rows: { _array } }) => this.updateItems(_array)
      );
    });
  }

  setRefreshingState(isRefreshing){
    this.setState({refreshing: isRefreshing});
  }

  getNavigationParams() {
    return this.props.navigation.state.params || {};
  }

  updateItems(items) {
    console.log('update items', items);
    // let location = this.config.soundPath;
    // let _files = items.map(function(item, num) {
    //   let name = item.split('/').slice(-1).join('');
    //   let obj = Object.create(null);
    //   obj.id = name.replace('.m4a', '');
    //   obj.name = name;
    //   obj.location = location;
    //
    //   return {
    //     id: name.replace('.m4a', ''),
    //     name: name,
    //     test: num,
    //     data: obj,
    //   };
    // });
    this.setState({
      files: items,
      refreshing: false
    });
  }

  /// =====================================================
  /// select all
  /// =====================================================
  getSoundscapes = () => {
    console.log('[SoundscapeLibraryScreen] getSoundscapes');
    let connection = sdb.connection;
    var _result = null;
     var all_result = connection.db.transaction(
      (tx) => {
        tx.executeSql(
          'SELECT * FROM Soundscapes;',
          null,
          (tx, result) => {
            console.log('tx result', result);
            _result = result;
            if (result.rows .length > 0) {
              this.queryStoreData.results.push(result.rows);
              console.log(this.queryStoreData.results);
            }
            return result.rows;
          },
          (tx, error) => { console.log('tx error', error) }
        )
      },
      (err) => { console.log('query error', err) },
      () => { console.log('query successful')},
    );

    console.log('_result', _result);
    console.log('all_result', all_result);

  }

  async getFileList(location) {
    let storagePath = this.config.uploadedFiles;
    this.filePromise = await FileSystem.readDirectoryAsync(storagePath);
    Promise.resolve(this.filePromise).then(
      (result) => {
      if (!result) {
        console.log('no files');
      } else {
        this.setState({refreshing: true})
        this.updateFiles(result);
      }
    });
  };


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
          ListHeaderComponent={() => (
            <SoundscapeListViewHeader
              onActionButton={()=>{
                this.props.navigation.navigate({ routeName:'SoundFileLibrary' })
              }}
            />
          )}
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
