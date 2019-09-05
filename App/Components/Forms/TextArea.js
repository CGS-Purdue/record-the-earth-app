import React, { Component } from 'react';
import { TextInput} from 'react-native';

export default class StyledTextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Placeholder',
      myName: 'empty',
      name: 'none',
      error: false,
    };
  }
      // multiline={false}
      // maxLength={252}
      // inputAccessoryViewID="sounscape_description_input"
      // autoFocus={true}
      // clearTextOnFocus={true}
      // defaultValue=""
      // placeholder="Enter a description for your soundscape"
      // placeholderTextColor={ThemeColors.GRA_300}
      // label="Label"
      // errorMessage={this.state.error}

  render() {
    const { text } = this.state;
    return (
      <TextInput
        multiline = {true}
        numberOfLines = {4}
        onChangeText={(text) => this.setState({text})}
        value={text}
        {...this.props}
        />
    );
  }
}

export { StyledTextArea }
