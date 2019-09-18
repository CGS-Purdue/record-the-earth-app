import React, { Component, forwardRef } from 'react';

function logProps(Wrapped) {
  class LogProps extends Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }
    render() {
      return <Wrapped {...this.props} />;
    }
  }
}

function logLayout(Wrapped) {
  class LogLayout extends Component {
    onLayout(prevProps) {
      console.log('Component Layout');
      console.log(this.props);
    }
    render() {
      return <Wrapped {...this.props} />;
    }
  }
}

function logStyle(Wrapped) {
  class LogStyle extends Component {
    componentDidMount(prevProps) {
      console.log('Component Styles');
      console.log(this.props.style);
    }
    render() {
      return <Wrapped {...this.props} />;
    }
  }
}

function _forward(Wrapped) {
  class WrappedComponent extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      const { forwardedRef, ...rest } = this.props;
      return <Wrapped ref={forwardedRef} {...rest} />;
    }
  }
  function passForward(props, ref) {
    return <WrappedComponent forwardedRef={ref} {...props} />;
  }

  const name = Wrapped.displayName || Wrapped.name;
  passForward.displayName = `WrappedComponent(${name})`;

  return forwardRef(passForward);
}

export { _forward, logProps, logLayout, logStyle };
