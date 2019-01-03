import React from 'react';
import PropTypes from 'prop-types';

import AppIconFontAwesome from '../../AppIconFontAwesome';


const propTypes = {
  heading: PropTypes.string.isRequired,

  // Only required to enable column sorting
  columnKey: PropTypes.string,
  sortKey: PropTypes.string,
  sortDirection: PropTypes.oneOf(['asc', 'desc', null]),
  onSetSortKey: PropTypes.func,
};

const defaultProps = {
  columnKey: null,
  sortKey: null,
  sortDirection: null,
  onSetSortKey: null,
};

class TableHeadingWithSort extends React.Component {
  onClick = () => {
    const { columnKey, onSetSortKey } = this.props;

    if (columnKey !== null && onSetSortKey !== null) {
      onSetSortKey(columnKey);
    }
  }

  render() {
    const {
      heading, columnKey, sortKey, sortDirection,
    } = this.props;

    return (
      <th
        style={{ cursor: 'pointer' }}
        role="button"
        tabIndex={-1}
        onClick={this.onClick}
      >
        <div className="d-flex align-items-end">
          <div className="mr-2">
            {heading}
          </div>

          <div
            className="flex-grow-1"
            style={{ color: columnKey !== sortKey ? '#e8e7e6' : null }}
          >
            {columnKey !== sortKey && (
              <AppIconFontAwesome
                icon="sort"
              />
            )}

            {columnKey === sortKey && sortDirection === 'asc' && (
              <AppIconFontAwesome
                icon="sort-up"
              />
            )}

            {columnKey === sortKey && sortDirection === 'desc' && (
              <AppIconFontAwesome
                icon="sort-down"
              />
            )}
          </div>
        </div>
      </th>
    );
  }
}

TableHeadingWithSort.propTypes = propTypes;
TableHeadingWithSort.defaultProps = defaultProps;

export default TableHeadingWithSort;
