import React from 'react'
import { View, ScrollView, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

const colors = {
  transparent: 'rgba(0,0,0,0)',
  background: '#3e243f',
  silver: '#F7F7F7',
  frost: '#D8D8D8',
  windowTint: 'rgba(0, 0, 0, 0.4)',
  panther: '#161616',
  charcoal: '#595959',
  snow: 'white',
  ember: 'rgba(164, 0, 48, 0.5)',
  fire: '#ff3832',
  eggplant: '#251a34',
  border: '#483F53',
  text: '#E0D7E5'
};
let Colors = colors;

const FontType = {
  base: 'opensans-regular',
  bold: 'spacemono',
  emphasis: 'opensans-light'
};
// leave off @2x/@3x
const Images = {

};

const FontSize = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5
};

const fontStyle = {
  h1: {
    fontFamily: FontType.base,
    fontSize: FontSize.h1
  },
  h2: {
    fontWeight: 'bold',
    fontSize: FontSize.h2
  },
  h3: {
    fontFamily: FontType.emphasis,
    fontSize: FontSize.h3
  },
  h4: {
    fontFamily: FontType.base,
    fontSize: FontSize.h4
  },
  h5: {
    fontFamily: FontType.base,
    fontSize: FontSize.h5
  },
  h6: {
    fontFamily: FontType.emphasis,
    fontSize: FontSize.h6
  },
  normal: {
    fontFamily: FontType.base,
    fontSize: FontSize.regular
  },
  description: {
    fontFamily: FontType.base,
    fontSize: FontSize.medium
  }
};

const Fonts = {
  type: FontType,
  size: FontSize,
  style: fontStyle
};

const { width, height } = Dimensions.get('window');

// Used via Metrics.baseMargin
const metrics = {
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  icons: {
    large: 45,
    xl: 50
  },
  images: {
    logo: 200
  }
};

let Metrics = metrics;

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: colors.transparent
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    container: {
      flex: 1,
      paddingTop: metrics.baseMargin,
      backgroundColor: colors.transparent
    },
    scrollContent: {
      paddingBottom: 18
    },
    section: {
      margin: metrics.section,
      padding: metrics.baseMargin
    },
    sectionText: {
      ...Fonts.normal,
      paddingVertical: metrics.doubleBaseMargin,
      color: colors.snow,
      marginVertical: metrics.smallMargin,
      textAlign: 'center'
    },
    subtitle: {
      color: colors.snow,
      padding: metrics.smallMargin,
      marginBottom: metrics.smallMargin,
      marginHorizontal: metrics.smallMargin
    },
    titleText: {
      ...Fonts.style.h2,
      fontSize: 14,
      color: colors.text
    }
  },
  darkLabelContainer: {
    padding: metrics.smallMargin,
    paddingBottom: metrics.doubleBaseMargin,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    marginBottom: metrics.baseMargin
  },
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: colors.snow
  },
  groupContainer: {
    margin: metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
};

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  sectionText: {
    ...Fonts.base,
    color: Colors.text,
    fontSize: 12,
    lineHeight: Metrics.doubleBaseMargin + 5
  },
  mainContainer: {
    paddingHorizontal: Metrics.doubleBaseMargin
  },
  description: {
    marginVertical: Metrics.doubleSection
  },
  sectionHeader: {
    ...Fonts.style.h5,
    color: Colors.fire
  },
  sectionHeaderContainer: {
    borderWidth: 1,
    borderColor: Colors.border,
    padding: Metrics.baseMargin,
    marginVertical: 20
  }
})


class FaqScreen extends React.Component {
  render () {
    return (
      <View style={[styles.container, styles.mainContainer]}>
        <Image source={require('./Dev/BG.png')} style={styles.backgroundImage} resizeMode='stretch' />
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 5,
          zIndex: 10
        }}>
          <Image source={require('./Dev/back-button.png')} />
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
          <View style={styles.scrollContent}>
            <View style={{alignItems: 'center', paddingTop: 60}}>
              <Image source={require('./Dev/faq-icon.png')} style={styles.logo} />
              <Text style={styles.titleText}>FAQ</Text>
            </View>
            <View style={styles.description}>
              <Text style={styles.sectionText}>
                Have questions? We direct you to answers.  This is a small taste of where to get more information depending on what it is that you want to know.
              </Text>
            </View>
            <View style={styles.sectionHeaderContainer}>
              <Text style={styles.sectionHeader}>What are these screens?</Text>
              <Text style={styles.sectionText}>We like to use these screens when we develop apps. They are optional and out of the way to help you along your app creation process.  Each screen has an explanation of what it provides.  More info can be found on our website http://infinite.red/ignite</Text>
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
              <Text style={styles.sectionText}>{"We love you, too.  Don't forget to tweet us 😘\n@infinite_red OR @ir_ignite"}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export { FaqScreen }
