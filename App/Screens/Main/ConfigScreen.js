import Constants from 'expo-constants';
import { SQLite } from 'expo-sqlite';
import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { SoundDB } from '../../Components/Database/SoundDB';
import { Theme } from '../../Theme';
import { Log } from '../../Utilities/Log';

const _styles = Theme.Styles;
const _assets = Theme.Assets;

export default class ConfigScreen extends React.Component {
  constructor(props) {
    super(props);
    // this.dbConnection = new SoundDB({autoconnect: true});
    // this.getSoundscapesList();
    // this.state = [soundscapes, setSoundscapes] = useState([]);
    // this.dataSource = new SoundDB({autoconnect: true});
    this.state = {
      soundscapes: null,
    };

    this.dbConnection = new SoundDB({ autoconnect: true });
  }

  getSoundscapesList() {
    this.updateSoundscapes();
  }

  updateSoundscapes() {
    // let _soundData = this.soundData
    this.dataSource.transaction((tx) => {
      tx.executeSql('select * from Soundscapes;', [], (_, { rows }) =>
        this.setState({
          soundscapes: rows._array,
        })
      );
    });
    console.log(this.state);
  }

  onComponentDidMount() {
    this.dataSource = this.dbConnection.getConnection();
    console.log('connectionStatus', this.dataSource.connectionStatus);
    console.log(this.state);
    // this.updateSoundscapes();
  }
  onComponentDidUpate() {
    // console.log(this.dataSource);
    // this.updateSoundscapes()
    // console.log('connectionStatus', this.dataSource.connectionStatus);
    console.log(this.state);
  }

  render() {
    return (
      <ScrollView style={ConfigScreenStyles.container}>
        <ConfigView />
      </ScrollView>
    );
  }
}

class ConfigView extends React.Component {
  render() {
    const { manifest = {} } = Constants;
    const sections = [
      { data: [{ value: manifest.sdkVersion }], title: 'sdkVersion' },
      { data: [{ value: manifest.privacy }], title: 'privacy' },
      { data: [{ value: manifest.version }], title: 'version' },
      { data: [{ value: manifest.orientation }], title: 'orientation' },
      {
        data: [{ value: manifest.primaryColor, type: 'color' }],
        title: 'primaryColor',
      },
      {
        data: [{ value: manifest.splash && manifest.splash.image }],
        title: 'splash.image',
      },
      {
        data: [
          {
            value: manifest.splash && manifest.splash.backgroundColor,
            type: 'color',
          },
        ],
        title: 'splash.backgroundColor',
      },
      {
        title: 'splash.resizeMode',
        data: [{ value: manifest.splash && manifest.splash.resizeMode }],
      },
      {
        title: 'ios.supportsTablet',
        data: [
          {
            value:
              manifest.ios && manifest.ios.supportsTablet ? 'true' : 'false',
          },
        ],
      },
    ];

    return (
      <SectionList
        style={ConfigScreenStyles.container}
        renderItem={this._renderItem}
        renderSectionHeader={this._renderSectionHeader}
        stickySectionHeadersEnabled={true}
        keyExtractor={(item, index) => index}
        ListHeaderComponent={ListHeader}
        sections={sections}
      />
    );
  }

  _renderSectionHeader = ({ section }) => {
    return <SectionHeader title={section.title} />;
  };

  _renderItem = ({ item }) => {
    if (item.type === 'color') {
      return (
        <SectionContent>
          {item.value && <Color value={item.value} />}
        </SectionContent>
      );
    } else {
      return (
        <SectionContent>
          <Text style={ConfigScreenStyles.sectionContentText}>
            {item.value}
          </Text>
        </SectionContent>
      );
    }
  };
}

const ListHeader = () => {
  const { manifest } = Constants;

  return (
    <View style={ConfigScreenStyles.titleContainer}>
      <View style={ConfigScreenStyles.titleIconContainer}>
        <AppIconPreview iconUrl={manifest.iconUrl} />
      </View>

      <View style={ConfigScreenStyles.titleTextContainer}>
        <Text style={ConfigScreenStyles.nameText} numberOfLines={1}>
          {manifest.name}
        </Text>

        <Text style={ConfigScreenStyles.slugText} numberOfLines={1}>
          {manifest.slug}
        </Text>

        <Text style={ConfigScreenStyles.descriptionText}>
          {manifest.description}
        </Text>
      </View>
    </View>
  );
};

const SectionHeader = ({ title }) => {
  return (
    <View style={ConfigScreenStyles.sectionHeaderContainer}>
      <Text style={ConfigScreenStyles.sectionHeaderText}>{title}</Text>
    </View>
  );
};

const SectionContent = (props) => {
  return (
    <View style={ConfigScreenStyles.sectionContentContainer}>
      {props.children}
    </View>
  );
};

const AppIconPreview = ({ iconUrl }) => {
  if (!iconUrl) {
    iconUrl =
      'https://s3.amazonaws.com/exp-brand-assets/ExponentEmptyManifest_192.png';
  }

  return (
    <Image
      source={{ uri: iconUrl }}
      style={{ width: 64, height: 64 }}
      resizeMode="cover"
    />
  );
};

const Color = ({ value }) => {
  if (!value) {
    return <View />;
  } else {
    return (
      <View style={ConfigScreenStyles.colorContainer}>
        <View
          style={[ConfigScreenStyles.colorPreview, { backgroundColor: value }]}
        />
        <View style={ConfigScreenStyles.colorTextContainer}>
          <Text style={ConfigScreenStyles.sectionContentText}>{value}</Text>
        </View>
      </View>
    );
  }
};

const ConfigScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
  },
  titleIconContainer: {
    marginRight: 15,
    paddingTop: 2,
  },
  sectionHeaderContainer: {
    backgroundColor: '#fbfbfb',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ededed',
  },
  sectionHeaderText: {
    fontSize: 14,
  },
  sectionContentContainer: {
    paddingTop: 8,
    paddingBottom: 12,
    paddingHorizontal: 15,
  },
  sectionContentText: {
    color: '#808080',
    fontSize: 14,
  },
  nameText: {
    fontWeight: '600',
    fontSize: 18,
  },
  slugText: {
    color: '#a39f9f',
    fontSize: 14,
    backgroundColor: 'transparent',
  },
  descriptionText: {
    fontSize: 14,
    marginTop: 6,
    color: '#4d4d4d',
  },
  colorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorPreview: {
    width: 17,
    height: 17,
    borderRadius: 2,
    marginRight: 6,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
  },
  colorTextContainer: {
    flex: 1,
  },
});

export { ConfigScreen };
