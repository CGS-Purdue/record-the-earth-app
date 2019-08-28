import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class PaperTabs extends React.Component {
  state = {
    value: 2
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <Paper square>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="Active" />
          <Tab label="Disabled" disabled />
          <Tab label="Active" />
        </Tabs>
      </Paper>
    );
  }
}

export default { PaperTabs };
