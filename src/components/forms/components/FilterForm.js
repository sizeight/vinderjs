import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'reactstrap';


const propTypes = {
  value: PropTypes.string.isRequired,
  placeHolderText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  placeHolderText: 'Filter...',
};

class FilterForm extends React.Component {
  handleChange = (event) => {
    const { onChange } = this.props;
    onChange(event.target.value);
  }

  handleClear = () => {
    const { onChange } = this.props;
    onChange('');
  }

  render() {
    const { value, placeHolderText } = this.props;

    return (
      <form
        className="form-inline flex-row-reverse"
        onSubmit={e => e.preventDefault()}
      >
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control form-control-sm"
            value={value}
            placeholder={placeHolderText}
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <Button
              outline={value === ''}
              color={value === '' ? 'secondary' : 'primary'}
              disabled={value === ''}
              size="sm"
              onClick={this.handleClear}
            >
              &#215;
            </Button>
          </div>
        </div>
      </form>
    );
  }
}

FilterForm.propTypes = propTypes;
FilterForm.defaultProps = defaultProps;

export default FilterForm;
