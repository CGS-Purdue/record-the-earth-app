import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
// import { CenterView, RootView } from '../../Components/Views';
import { Theme } from '../../Theme';

const _styles = Theme.Styles;

export default class MultilineTextInput extends React.Component {
  render() {
    return (
      <View style={_styles.form_multiline_container}>
        <TextInput
          style={_styles.form_multiline_text}
          onChangeText={this.props.onChangeText}
          value={this.props.value}
          multiline={true}
          numberOfLines={3}
          maxLength={256}
        />
      </View>
    );
  }
}

export { MultilineTextInput };
