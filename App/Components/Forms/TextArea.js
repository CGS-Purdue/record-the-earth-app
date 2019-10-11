import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import { Theme } from '../../Theme';

const _styles = Theme.Styles;
const _colors = Theme.Colors;
const TextInputStyle = Object.assign({
  borderBottomLeftRadius: 1,
  borderBottomRightRadius: 1,
  borderBottomWidth: 1,
  borderLeftWidth: 1,
  borderRightWidth: 1,
  borderTopLeftRadius: 1,
  borderTopRightRadius: 1,
  borderTopWidth: 1,
});

class StyledTextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Placeholder',
      name: 'none',
      error: false,
    };

    this.getText = this.getText.bind(this);
  }

  _handleTextChange = (inputValue) => {
    this.setState({ inputValue });
  };

  getText() {
    return this.state.text;
  }

  render() {
    const { text } = this.state;
    return (
      <View style={_styles.form_text_input_container}>
        <TextInput
          value={this.state.inputValue}
          multiline={true}
          numberOfLines={3}
          onChangeText={(text) => this.setState({ text })}
          // onChangeText={this._handleTextChange}
          // style={TextInputStyle}
        />
      </View>
    );
  }
}

export { StyledTextArea };
