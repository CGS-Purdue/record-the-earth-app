import React from 'react';
import PropTypes from 'prop-types';


const button_style = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
};

const Button = ( props ) => {
  if (props.style) {
    Object.assign(button_style, props.style);
  }

  return (
    <button
        onClick={props.onClick}
        style={button_style}>{props.children}
    </button>
  );
};

Button.displayName = 'Button';
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  onClick: () => { console.log('clicked')},
};
export default Button;
