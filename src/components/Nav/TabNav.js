import React from 'react';
import Paper from "@bit/mui-org.material-ui.paper";
import Tabs from "@bit/mui-org.material-ui.tabs";
import Tab from "@bit/mui-org.material-ui.tab";

class DisabledTabs extends React.Component {
  state = {
    value: 2
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return <Paper square>
        <Tabs value={this.state.value} indicatorColor="primary" textColor="primary" onChange={this.handleChange}>
          <Tab label="Active" />
          <Tab label="Disabled" disabled />
          <Tab label="Active" />
        </Tabs>
      </Paper>;
  }
}

export default DisabledTabs;
