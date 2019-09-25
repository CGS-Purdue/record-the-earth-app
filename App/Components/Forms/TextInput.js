import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { CenterView, RootView } from '../../Components/Views';
import { Theme } from '../../Theme';

const _styles = Theme.Styles;


const TextAreaStyle = Object.assign({
    borderBottomLeftRadius: 1 ,
    borderBottomRightRadius: 1 ,
    borderTopLeftRadius: 1 ,
    borderTopRightRadius: 1 ,
  },
  _styles.stretch,
  _styles.br.br_w1,
  _styles.form_input_multiline_text_3,
  _styles.m.mb20,
);


export default class ThemeTextInput extends React.Component {
  state = {
    text: '',
  };

  render(){
    return (
    <View style={_styles.form_textarea_input_container_3}>
      <TextInput
        style={TextAreaStyle}
        onChangeText={text => this.setState({ text })}
        value={this.state.text}
        multiline={true}
        numberOfLines={3}
        maxLength={256}
      />
     </View>
    );
  }
}


export { ThemeTextInput };
