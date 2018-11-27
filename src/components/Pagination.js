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

const Pagination = (props) => {
  const { pagination, alignment, onPaginate } = props;
  const { count, previous, page, next } = pagination;

  const totalPages = Math.ceil(count / pagination.page_size);

  const alignmentClass = {
    left: null,
    center: ' justify-content-center',
    right: ' justify-content-end',
  };

  return (
    <nav>
      <ul className={`pagination${alignmentClass[alignment]}`}>
        {previous &&
          <li className="page-item">
            <a
              className="page-link"
              role="button"
              tabIndex={-1}
              onClick={() => onPaginate(previous)}
            >
              <AppIconFontAwesome
                icon={['fal', 'angle-double-left']}
                fixedWidth
              />
            </a>
          </li>}

        {/*
        previous &&
          <li className="page-item">
            <a
              className="page-link"
              role="button"
              tabIndex={-1}
              onClick={() => onPaginate(previous)}
            >
              {previous}
            </a>
          </li>
        */}

        <li className="page-item active">
          <a
            className="page-link"
            role="button"
            tabIndex={-1}
          >
            Page {page} of {totalPages}
          </a>
        </li>

        {/*
        <li className="page-item active">
          <a
            className="page-link"
            role="button"
            tabIndex={-1}
          >
            {page} <span className="sr-only">(current)</span>
          </a>
        </li>

        {next &&
          <li className="page-item">
            <a
              className="page-link"
              role="button"
              tabIndex={-1}
              onClick={() => onPaginate(next)}
            >
              {next}
            </a>
          </li>}
        */}

        {next &&
          <li className="page-item">
            <a
              className="page-link"
              role="button"
              tabIndex={-1}
              onClick={() => onPaginate(next)}
            >
              <AppIconFontAwesome
                icon={['fal', 'angle-double-right']}
                fixedWidth
              />
            </a>
          </li>}
      </ul>
    </nav>
  );
};

Pagination.propTypes = propTypes;

export default Pagination;
