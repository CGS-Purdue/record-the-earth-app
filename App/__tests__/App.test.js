import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

// // Track the number of stateful container instances. Warn if >0 and not using the
// // detached prop to explicitly acknowledge the behavior. We should deprecated implicit
// // stateful navigation containers in a future release and require a provider style pattern
// // instead in order to eliminate confusion entirely.
let _statefulContainerCount = 0;
function _TESTING_ONLY_reset_container_count() {
  _statefulContainerCount = 0;
}
const resetInternalState = () => {
    _TESTING_ONLY_reset_container_count();
};

jest.mock('expo', () => ({
  AppLoading: 'AppLoading',
}));

jest.mock('../Navigation/AppNavigator', () => 'AppNavigator');

describe('App', () => {
  jest.useFakeTimers();

  beforeEach(() => {
    resetInternalState();
  });

  it('renders the loading screen', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the root without loading screen', () => {
    const tree = renderer.create(<App skipLoadingScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
