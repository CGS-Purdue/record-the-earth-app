import React from 'react';
import { View, ScrollView, Text, Image,  StyleSheet, TouchableOpacity } from 'react-native';

import { Theme } from '../../Theme';

const _assets = Theme.Assets;
const _styles = Theme.Styles;
// const _colors = Theme.Colors;
// const _vars = Theme.Variables;

const styles = _styles.AboutStyles;


class FaqScreen extends React.Component {
  render () {
    return (
      <View style={[styles.container, styles.mainContainer]}>
            <Image source={_assets.img_bg_solid_dark} style={styles.backgroundImage} resizeMode='stretch' />
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backButton}>
          <Image source={require('./Dev/back-button.png')} />
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
          <View style={styles.scrollContent}>
            <View style={{alignItems: 'center',  paddingTop: 60}}>
              <Image source={require('./Dev/faq-icon.png')} style={styles.logo} />
              <Text style={styles.titleText}>FAQ</Text>
            </View>
            <View style={styles.description}>
              <Text style={styles.sectionText}>
                Have questions? We direct you to answers.  This is a small taste of where to get more information depending on what it is that you want to know.
              </Text>
            </View>
            <View style={styles.sectionHeaderContainer}>
              <Text style={styles.sectionHeader}>{'What are these screens?'}</Text>
              <Text style={styles.sectionText}>{'We like to use these screens when we develop apps. They are optional and out of the way to help you along your app creation process.  Each screen has an explanation of what it provides.  More info can be found on our website http://infinite.red/ignite'}</Text>
            </View>
            <View style={styles.sectionHeaderContainer}>
              <Text style={styles.sectionHeader}>Got Docs?</Text>
              <Text style={styles.sectionText}>The GitHub page has a docs folder that can help you from beginner to expert!  We'll be working to release some instructional video docs as well.</Text>
            </View>
            <View style={styles.sectionHeaderContainer}>
              <Text style={styles.sectionHeader}>I don't see the answer to my question in docs</Text>
              <Text style={styles.sectionText}>Besides our docs, we have a friendly community Slack.  Get an invite from http://community.infinite.red and you'll find a community of people in the #ignite channel ready to help!</Text>
            </View>
            <View style={styles.sectionHeaderContainer}>
              <Text style={styles.sectionHeader}>What can I customize?</Text>
              <Text style={styles.sectionText}>Everything!  We're open source with MIT license.  We also make it easy to change whatever you like.  Check on our guides for making your very own plugins and boilerplates with Ignite.</Text>
            </View>
            <View style={styles.sectionHeaderContainer}>
              <Text style={styles.sectionHeader}>I love you</Text>
              <Text style={styles.sectionText}>{"We love you, too.  Don't forget to tweet us \n@infinite_red OR @ir_ignite"}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export { FaqScreen };
