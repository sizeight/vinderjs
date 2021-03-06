import React from 'react';
import PropTypes from 'prop-types';

import AppIconFontAwesome from './AppIconFontAwesome';

const propTypes = {
  pagination: PropTypes.shape({
    pageCount: PropTypes.number,
    pageNumber: PropTypes.number,
    next: PropTypes.string,
    previous: PropTypes.string,
  }).isRequired,
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onPaginate: PropTypes.func.isRequired,
};

const defaultProps = {
  alignment: 'left',
  size: 'md',
};

const Pagination = (props) => {
  const {
    pagination, alignment, size, onPaginate,
  } = props;
  const {
    previous, next, pageCount, pageNumber,
  } = pagination;

  const alignmentClass = {
    left: null,
    center: 'justify-content-center',
    right: 'justify-content-end',
  };

  const sizeClass = {
    sm: 'pagination-sm',
    md: null,
    lg: 'pagination-lg',
  };

  return (
    <nav>
      <ul className={`pagination ${alignmentClass[alignment]} ${sizeClass[size]} mb-0`}>
        {previous && (
          <li className="page-item">
            <button
              className="page-link"
              type="button"
              onClick={() => onPaginate('previous')}
            >
              <AppIconFontAwesome
                icon={['fal', 'angle-double-left']}
                fixedWidth
              />
            </button>
          </li>
        )}

        <li className="page-item active">
          <button
            className="page-link"
            type="button"
          >
            {`Page ${pageNumber + 1} of ${pageCount || 1}`}
          </button>
        </li>

        {next && (
          <li className="page-item">
            <button
              className="page-link"
              type="button"
              onClick={() => onPaginate('next')}
            >
              <AppIconFontAwesome
                icon={['fal', 'angle-double-right']}
                fixedWidth
              />
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;
