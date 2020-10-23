import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.string.isRequired,
  placeHolderText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  onReset: PropTypes.func,
};

const defaultProps = {
  placeHolderText: 'Filter…',
  onSubmit: undefined,
  onReset: undefined,
};

const FilterForm = (props) => {
  const {
    value, placeHolderText, onChange, onSubmit, onReset,
  } = props;

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit !== undefined) {
      onSubmit();
    }
  };

  const handleReset = () => {
    onChange('');
    if (onReset !== undefined) {
      onReset();
    }
  };

  return (
    <form
      className="form-inline flex-row-reverse"
      onSubmit={handleSubmit}
    >
      <div className="input-group">
        <input
          type="text"
          className="form-control form-control-sm shadow-none"
          value={value}
          placeholder={placeHolderText}
          onChange={handleChange}
        />
        <div className="input-group-append">
          <button
            type="button"
            className={`btn ${value === '' ? 'btn-outline-secondary' : 'btn-primary'} btn-sm shadow-none`}
            disabled={value === ''}
            onClick={handleReset}
          >
            &#215;
          </button>
        </div>
      </div>
    </form>
  );
};

FilterForm.propTypes = propTypes;
FilterForm.defaultProps = defaultProps;

export default FilterForm;
