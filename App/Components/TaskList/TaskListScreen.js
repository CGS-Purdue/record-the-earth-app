import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TaskList from '../Task/TaskList';

export function TaskListScreen({ error }) {
  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <TaskList />
    </div>
  );
}

TaskListScreen.propTypes = {
  error: PropTypes.string,
};

TaskListScreen.defaultProps = {
  error: null,
};

export default connect(({ error }) => ({ error }))(TaskListScreen);
