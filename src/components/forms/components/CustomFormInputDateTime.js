import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


/*
 * Wrap the <DatePicker> to fix styles
 * 1. Input containers should have width 100%
 * 2. Times padding is wrong somehow??
 */
const DatePickerWrapper = styled.div`
  .react-datepicker-wrapper,
  .react-datepicker__input-container {
    width: 100%;
  }
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {
    padding-left: 0;
    padding-right: 0;
  }
`;


const propTypes = {
  type: PropTypes.oneOf(['datetime', 'date']).isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

const defaultProps = {
  required: false,
};

/*
 * Render a datetime or a date only input field the react-datepicker.
 */
class CustomFormInputDateTime extends React.Component {
  /*
   * If a valid Date object is available, set the state to the string representation, otherwise
   * set to null.
   */
  handleChange = (date) => {
    const { name, onChange } = this.props;

    let newValue = null;
    if (date instanceof Date) {
      newValue = date.toISOString();
    }
    onChange(name, newValue);
  }

  handleRawChange = (e) => {
    const { name, onChange } = this.props;

    const newValue = e.target.value;
    onChange(name, newValue);
  }

  handleBlur = (e) => {
    const { name, onChange, onBlur } = this.props;

    let date;
    try {
      date = new Date(e.target.value);
      // console.log('date: ', date);
      // console.log('instaceof: ', date instanceof Date);
      // console.log('isNaN', !Number.isNaN(date));
      // console.log('isNaN(date.getTime())', Number.isNaN(date.getTime()));
      // console.log('isNaN(date.valueOf())', Number.isNaN(date.valueOf()));
      // console.log('object', Object.prototype.toString.call(date) === '[object Date]');
      let newValue = null;
      if (Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date.valueOf())) {
        // Valid date
        newValue = date.toISOString();
      }
      onChange(name, newValue);
    } catch (errors) {
      // Do nothing
    }

    onBlur(name, true);
  }

  render() {
    const { type, name, required, value } = this.props;

    // datetime field needs extra props to display time picker
    const showTime = type === 'datetime' ?
      {
        showTimeSelect: true,
        timeFormat: 'HH:mm',
        timeIntervals: 15,
        timeCaption: 'time',
        dateFormat: 'dd MMMM yyyy HH:mm',
      } : {
        dateFormat: 'dd MMMM yyyy',
      };

    return (
      <DatePickerWrapper>
        <DatePicker
          className="form-control-sm form-control" // Bootstrap 4

          type={type}
          name={name}
          id={`id-${name}`}
          required={required}

          selected={value ? new Date(value) : null}
          onChange={this.handleChange}
          onChangeRaw={this.handleRawChange}
          onBlur={this.handleBlur}

          autoComplete="off"
          todayButton="Today"
          isClearable
          clearButtonTitle="Clear"
          shouldCloseOnSelect
          {...showTime}
        />
      </DatePickerWrapper>
    );
  }
}

CustomFormInputDateTime.propTypes = propTypes;
CustomFormInputDateTime.defaultProps = defaultProps;

export default CustomFormInputDateTime;
