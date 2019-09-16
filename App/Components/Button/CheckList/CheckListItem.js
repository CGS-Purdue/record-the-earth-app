import PropTypes from 'prop-types';
import React from 'react';

export default function CheckListItem({ item: { id, title, state }, onSelectedItem }) {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'ITEM_UNSELECTED'}
          disabled={false}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onSelectedItem(id)} />
      </label>
      <div className="title">
        <input type="text"
            value={title}
            readOnly={true}
            placeholder="Input title"
            style={{ 'textOverflow': 'ellipsis' }} />
      </div>
    </div>
  );
}

CheckListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onSelectedItem: PropTypes.func,
};
