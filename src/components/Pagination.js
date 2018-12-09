import React from 'react';
import PropTypes from 'prop-types';

import AppIconFontAwesome from './AppIconFontAwesome';

const propTypes = {
  pagination: PropTypes.shape({
    count: PropTypes.number,
    page_size: PropTypes.number,
    page: PropTypes.number,
    next: PropTypes.number,
    previous: PropTypes.number,
  }).isRequired,
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  onPaginate: PropTypes.func.isRequired,
};

const defaultProps = {
  alignment: 'left',
};

const Pagination = (props) => {
  const { pagination, alignment, onPaginate } = props;
  const {
    count, previous, page, next,
  } = pagination;

  const totalPages = Math.ceil(count / pagination.page_size);

  const alignmentClass = {
    left: null,
    center: ' justify-content-center',
    right: ' justify-content-end',
  };

  return (
    <nav>
      <ul className={`pagination${alignmentClass[alignment]}`}>
        {previous && (
          <li className="page-item">
            <button
              className="page-link"
              type="button"
              onClick={() => onPaginate(previous)}
            >
              <AppIconFontAwesome
                icon={['fal', 'angle-double-left']}
                fixedWidth
              />
            </button>
          </li>)}

        <li className="page-item active">
          <button
            className="page-link"
            type="button"
          >
            {`Page ${page} of ${totalPages}`}
          </button>
        </li>

        {next && (
          <li className="page-item">
            <button
              className="page-link"
              type="button"
              onClick={() => onPaginate(next)}
            >
              <AppIconFontAwesome
                icon={['fal', 'angle-double-right']}
                fixedWidth
              />
            </button>
          </li>)}
      </ul>
    </nav>
  );
};

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;
