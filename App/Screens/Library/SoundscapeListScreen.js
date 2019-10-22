import React, { Component } from 'react';
import {  FlatList, View } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { ListViewEmpty } from '../../Components/ListViews/ListViewEmpty';
import { StorageConfig } from '../../Config/Storage';
import { SoundscapeListViewItem } from '../../Components/ListViews/SoundscapeListViewItem';
import { SoundscapeListViewHeader } from '../../Components/ListViews/SoundscapeListViewHeader';
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

// const sdb = new SoundDB({autoconnect: true});
const sdb = SQLite.openDatabase(ConfigName, ConfigVersion, ConfigDescription, null);

/// -----------------------------------------------------------------
/// SOUNDSCAPE DATABASE LIBRARY
/// ============================
/// -----------------------------------------------------------------
class SoundscapeListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: true,
      intialized: false,
      items: [],
      selected: { id: '0' },
    };

    this.config = {
      appPath: StorageConfig.APP_PATH,
      pendingFiles: StorageConfig.STORAGE_PENDING_SOUNDFILES,
      uploadedFiles: StorageConfig.STORAGE_UPLOADED_SOUNDFILES,
      soundPath: StorageConfig.STORAGE_SOUNDFILE_PATH,
    };

     this._isMounted = false;
    // this.submitLocalDb = this.submitLocalDb.bind(this);
    this.updateItems = this.updateItems.bind(this);
    this.update = this.update.bind(this);
    // this.getFileList = this.getFileList.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    console.log('[SoundscapeListScreen] mounted');
    console.log(sdb);
    sdb.transaction(tx => {
      tx.executeSql(createQuery);
    });
    console.log('[SoundscapeListScreen] update;');
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

    const selectAllQuery = 'SELECT * FROM Soundscapes ORDER BY id DESC LIMIT 50;';

    console.log('[SoundscapeListScreen] update;');
    sdb.transaction(tx => {
      tx.executeSql(
        selectAllQuery,
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
    let _items = items.map(function(item, num) {
      return {
        id: item.id.toString(),
        description: item.description,
        pid: item.pid,
        latLong: item.location,
        filename: item.filename,
        tags: Array.from(
          new Set( [item.geo, item.anthro, item.bio, item.emotion].join(',').split(',')))
          .filter((tag)=>{return (tag && tag !== 'none')}).join(',')
        ,
        datetime: item.datetime,
      };
    });
    console.log(_items);
    this.setState({
      items: _items,
      refreshing: false
    });
  }

  /// =====================================================
  /// select all
  /// =====================================================
  getSoundscapes = () => {
    console.log('[SoundscapeListScreen] getSoundscapes');
    const selectAllQuery = 'SELECT * FROM Soundscapes ORDER BY id DESC LIMIT 50;';

    let connection = sdb.connection;
    var _result = null;

    var all_result = connection.db.transaction(
      (tx) => {
        tx.executeSql(
          selectAllQuery,
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

  onSelect = (selected) => {
    console.log('id', selected.id);
    this.setSelected({
      id: selected.id,
      fileUri: selected.fileUri
    });

    this.props.navigation.navigate({
      routeName:'SoundscapePlayer',
      params: { selected: this.state.selected }
    })
  };


  render() {
    return (
      <View style={_styles.listview_screen_container}>
        <FlatList
          data={this.state.items}
          refrshing={this.state.refreshing}
          initialNumToRender={6}
          extraData={this.state.selected}
          ListEmptyComponent={ListViewEmpty}
          ListHeaderComponent={() => (
            <SoundscapeListViewHeader
              onActionButton={()=>{
                this.props.navigation.navigate({ routeName:'Soundfiles' })
              }}
            />
          )}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index, separators }) => (
            <SoundscapeListViewItem
              id={item.id}
              pid={item.pid}
              description={item.description}
              latLong={item.location}
              filename={item.filename}
              tags={item.tags}
              datetime={item.datetime}
              selected={!!this.state.id}
              onSelect={this.onSelect}
            />
          )}
        />
      </View>
    );
  }
}

export { SoundscapeListScreen };