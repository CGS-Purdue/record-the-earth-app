import React from 'react';
import { View, ScrollView, Text, Image,  StyleSheet, TouchableOpacity } from 'react-native';
import { Anchor } from '../../Components/Library/Anchor';
import { Theme } from '../../Theme';

const _assets = Theme.Assets;
const _styles = Theme.Styles;
const _colors = Theme.Colors;
const _vars = Theme.Variables;
const styles = _styles.AboutStyles;


class TermsScreen extends React.Component {
  render () {
    return (
      <View style={[styles.container, styles.mainContainer]}>
        <Image source={require('./Dev/BG.png')} style={styles.backgroundImage} resizeMode="stretch" />
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backButton}>
          <Image source={require('./Dev/back-button.png')} />
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
          <View style={styles.scrollContent}>
            <View style={{alignItems: 'center',  paddingTop: 60}}>
              <Image source={require('./Dev/faq-icon.png')} style={_styles.logo_main} />
              <Text style={styles.titleText}>{'Terms'}</Text>
            </View>
            <View style={styles.description}>
              <Text style={styles.sectionHeader}>{'Citizen Science Research Participation Consent'}</Text>
              <Text style={styles.sectionText}>{'Record the Earth is an application for global ecological data collection. You are collecting information about the health and wellbeing of the planet through sound and helping researchers understand human\'s connection to soundscapes.'}</Text>
            </View>
            <View style={styles.sectionHeaderContainer}>
              <Text style={styles.sectionHeader}>{'Data Collection'}</Text>
              <Text style={styles.sectionText}>{'Your mission is to go out and record the sounds around the earth, describe and tag them.'}</Text>
            </View>
            <View style={styles.sectionHeaderContainer}>
              <Text style={styles.sectionHeader}>{'Data Analysis'}</Text>
              <Text style={styles.sectionText}>{'sign up online to rate, share, and explore the data being collected from around the world and save your favorites sounds to your profile'}</Text>
            </View>
          </View>
          <View style={styles.sectionHeaderContainer}>
            <Anchor href={'https://recordtheearth.org'}>{'Sign up at https://recordtheearth.org'}</Anchor>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export { TermsScreen };
