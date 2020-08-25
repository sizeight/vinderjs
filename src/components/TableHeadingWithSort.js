import React from 'react';
import PropTypes from 'prop-types';

import AppIconFontAwesome from './AppIconFontAwesome';

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

const TableHeadingWithSort = (props) => {
  const {
    heading, columnKey, sortKey, sortDirection, onSetSortKey,
  } = props;

  const onClick = () => {
    if (columnKey !== null && onSetSortKey !== null) {
      onSetSortKey(columnKey);
    }
  };

  return (
    <button
      className="bs4 btn shadow-none text-nowrap p-0"
      href="#"
      type="button"
      onClick={onClick}
    >
      <strong className="bs4 mr-2">
        {heading}
      </strong>
      <span
        className="bs4 flex-grow-1"
        style={{ color: columnKey !== sortKey ? '#e8e7e6' : null }}
      >
        {columnKey !== sortKey && (
          <AppIconFontAwesome icon={['fas', 'sort']} />
        )}

        {columnKey === sortKey && sortDirection === 'asc' && (
          <AppIconFontAwesome icon={['fas', 'sort-up']} />
        )}

        {columnKey === sortKey && sortDirection === 'desc' && (
          <AppIconFontAwesome icon={['fas', 'sort-down']} />
        )}
      </span>
    </button>
  );
};

TableHeadingWithSort.propTypes = propTypes;
TableHeadingWithSort.defaultProps = defaultProps;

export default TableHeadingWithSort;
