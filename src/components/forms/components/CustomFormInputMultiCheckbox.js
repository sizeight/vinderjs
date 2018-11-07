import React from 'react';
import PropTypes from 'prop-types';

import { CustomInput } from 'reactstrap';


const propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    label: PropTypes.string,
  })),

  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

const defaultProps = {
  required: false,
};

/*
 * My custom multiple checkbox component.
 */
class CustomFormInputMultiCheckbox extends React.Component {
  handleChange = (e) => {
    const { name, value, options, onChange } = this.props;
    const target = e.target;
    const checked = target.checked;
    const optionName = target.name;
    const optionsIndex = Number.parseInt(optionName.split(':')[1], 10);
    const optionValue = options[optionsIndex].value;

    let newValue = [];
    if (checked) {
      newValue = [
        ...value,
        optionValue,
      ];
    } else {
      const idx = value.findIndex(v => v === optionValue);
      newValue = [
        ...value.slice(0, idx),
        ...value.slice(idx + 1),
      ];
    }
    onChange(name, newValue);
  }

  handleBlur = () => {
    const { name, onBlur } = this.props;
    onBlur(name, true);
  }

  render() {
    const { options, name, required, value } = this.props;

    return (
      <div>
        {options.map((option, i) =>
          <CustomInput
            type="checkbox"
            name={`${name}:${i}`} // e.g. tags:2
            id={`id-${name}-${i}`} // e.g. id-tags-2

            required={required}
            checked={value.findIndex(val => val === option.value) > -1}
            onChange={this.handleChange}
            onBlur={this.handleBlur}

            label={option.label}
            inline
            key={option.value}
          />)}
      </div>
    );
  }
}

CustomFormInputMultiCheckbox.propTypes = propTypes;
CustomFormInputMultiCheckbox.defaultProps = defaultProps;

export default CustomFormInputMultiCheckbox;
