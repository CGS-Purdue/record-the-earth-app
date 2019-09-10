import React, { Component, forwardRef, createRef } from 'react';
import { TextInput, View} from 'react-native';
import { Theme } from '../../Theme';



const _styles = Theme.Styles;
const _colors = Theme.Colors;

const formDefaultProps = {
  placeholderTextColor: _colors.GRA_600,
}

const TextInputStyle = Object.assign(
  {
    borderBottomLeftRadius: 1 ,
    borderBottomRightRadius: 1 ,
    borderTopLeftRadius: 1 ,
    borderTopRightRadius: 1 ,
  },
  _styles.br.br_w1,
  _styles.form_input_multiline_text_3
);


const ForwardedTextInput = forwardRef((props, ref) => (
  <TextInput ref={ref} {...props} />
));



class StyledTextInput extends Component {
  constructor(props) {
    super(props);
    this.forwardedRef = createRef();
  }
  render() {
    const { style, ...rest } = this.props;

    return(
      <TextInput
        ref={this.forwardedRef}
        style={TextInputStyle}
        {...rest}
      />
    );
  }
}

export { StyledTextInput }
