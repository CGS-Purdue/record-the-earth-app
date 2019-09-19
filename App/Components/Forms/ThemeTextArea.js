import React, { Component } from 'react';
import { TextInput, View} from 'react-native';
import { Theme } from '../../Theme';

const _styles = Theme.Styles;
const _colors = Theme.Colors;

const formDefaultProps = {
  placeholderTextColor: _colors.GRA_600,
};

const TextAreaStyle = Object.assign(
  {
    borderBottomLeftRadius: 1 ,
    borderBottomRightRadius: 1 ,
    borderTopLeftRadius: 1 ,
    borderTopRightRadius: 1 ,
    width: '100%',
    margin: 1,
  },
  _styles.br.br_w1,
  _styles.form_input_multiline_text_3
);


class ThemeTextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  componentDidUpdate() {
    console.log('props:', this.props);
    console.log('props:', this.state);
  }

  render() {
    const { text } = this.state;
    return (
      <View style={_styles.form_textarea_input_container_3}>
        <TextInput
          style={TextAreaStyle}
          value={this.state.text}
          onChangeText={(text) => this.setState({ text })}
          multiline={true}
          numberOfLines={3}
          maxLength={256}
          {...this.props}
        />
      </View>
    );
  }
}

export { ThemeTextArea };
