import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { RootView, CenterView, PadView } from '../../Views';
import { ThemeColors, Styles, DebugStyles } from '../../Theme';

var debugOutline = DebugStyles.outlineAll;
var debugOutline2 = DebugStyles.outlineAll;
var debugOutline3 = DebugStyles.outlineAll;

class SurveyScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Placeholder',
      myName: 'empty',
      name: 'none',
      error: false
    };
  }

  render() {
  return (
      <RootView>

        <PadView padding={[1]}>

         <CenterView style={debugOutline2}>
          <View style={{ flex: 1 }}>

            <TextInput
              multiline={false}
              maxLength={252}
              inputAccessoryViewID="sounscape_description_input"
              autoFocus={true}
              clearTextOnFocus={true}
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
              defaultValue=""
              placeholder="Enter a description for your soundscape"
              placeholderTextColor={ThemeColors.GRA_300}
              label="Label"
              errorMessage={this.state.error}
              containerStyle={Styles.form_text_input_container}
              inputContainerStyle={[Styles.form_text_input, debugOutline3]}
            />
            <Button
              title="next"
              style={Styles.button_default}
              color={ThemeColors.PRIMARY}
              accessibilityLabel="Go to next"
              onPress={handle_submit_description}
            />
          </View>

        </CenterView>
        </PadView>
    </RootView>
    );
  }
}

SurveyScreen.navigationOptions = {
  title: 'SurveyHome'
};

export { SurveyScreen };
