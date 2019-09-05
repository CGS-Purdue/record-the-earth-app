import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CheckListItem from './CheckListItem';
import { selectItem } from '../../Lib/redux';

export function SurveyCheckList({ loading, items, onSelectedItem }) {
  const events = {
    onSelectedItem,
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );


  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  const itemsInOrder = [
    ...items.filter(t => t.state === 'ITEM_SELECTED'),
    ...items.filter(t => t.state !== 'ITEM_SELECTED'),
  ];

  if (items.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no items</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }



  return (
    <div className="list-items" style={listStyle} >
      {itemsInOrder.map(item => <CheckListItem key={item.id} item={item} {...events} />)}
    </div>
  );
}

SurveyCheckList.propTypes = {
  loading: PropTypes.bool,
  items: PropTypes.arrayOf(CheckListItem.propTypes.item).isRequired,
  onSelectedItem: PropTypes.func.isRequired,
};

SurveyCheckList.defaultProps = {
  loading: false,
};


const listStyle={
  backgroundColor: 'red'
}

export default connect(
  ({ items }) => ({
    items: items.filter(t => t.state === 'SURVEY_ITEM' || t.state === 'ITEM_SELECTED'),
  }),
  dispatch => ({
    onSelectedItem: id => dispatch(selectItem(id)),
  })
)(SurveyCheckList);
