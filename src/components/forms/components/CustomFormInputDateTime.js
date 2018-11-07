import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import moment from 'moment';
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
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

const defaultProps = {
  required: false,
};

class CustomFormInputDateTime extends React.Component {
  /*
   * If a valid moment object is available, set the state to the string representation, otherwise
   * set to null.
   */
  handleChange = (date) => {
    const { name, onChange } = this.props;

    let newValue = null;
    if (moment.isMoment(date)) {
      newValue = date.format();
    }
    onChange(name, newValue);
  }

  handleRawChange = (e) => {
    const { name, onChange } = this.props;

    const newValue = e.target.value;
    onChange(name, newValue);
  }

  handleBlur = () => {
    const { name, onBlur } = this.props;
    onBlur(name, true);
  }

  render() {
    const { name, required, value } = this.props;

    return (
      <DatePickerWrapper>
        <DatePicker
          type="datetime"
          name={name}
          id={`id-${name}`}
          required={required}

          selected={value ? moment(value) : null}
          onChange={this.handleChange}
          onChangeRaw={this.handleRawChange}

          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="LLL"
          timeCaption="time"
          isClearable
          clearButtonTitle="Clear"
          shouldCloseOnSelect

          className="form-control-sm form-control"
          autocomplete="off"
          todayButton="Today"
        />
      </DatePickerWrapper>
    );
  }
}

CustomFormInputDateTime.propTypes = propTypes;
CustomFormInputDateTime.defaultProps = defaultProps;

export default CustomFormInputDateTime;
