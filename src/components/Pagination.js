import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  pagination: PropTypes.shape({
    count: PropTypes.number,
    page_size: PropTypes.number,
    page: PropTypes.number,
    next: PropTypes.number,
    previous: PropTypes.number,
  }).isRequired,
  onPaginate: PropTypes.func.isRequired,
};

const Pagination = (props) => {
  const { pagination, onPaginate } = props;
  const { previous, page, next } = pagination;

  return (
    <nav style={{ marginBottom: '-50px' }}>
      <ul className="pagination justify-content-end">
        {previous &&
          <li className="page-item">
            <a
              className="page-link"
              role="button"
              tabIndex={-1}
              onClick={() => onPaginate(previous)}
            >
              Previous
            </a>
          </li>}

        {previous &&
          <li className="page-item">
            <a
              className="page-link"
              role="button"
              tabIndex={-1}
              onClick={() => onPaginate(previous)}
            >
              {previous}
            </a>
          </li>}

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

        {next &&
          <li className="page-item">
            <a
              className="page-link"
              role="button"
              tabIndex={-1}
              onClick={() => onPaginate(next)}
            >
              Next
            </a>
          </li>}
      </ul>
    </nav>
  );
};

Pagination.propTypes = propTypes;

export default Pagination;
