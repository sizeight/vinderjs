import React from 'react';
import PropTypes from 'prop-types';

import { FormGroup, Label, Input, CustomInput, FormText } from 'reactstrap';

import { connect, getIn } from 'formik';

import CustomFormInputDateTime from './CustomFormInputDateTime';
import CustomFormInputMultiCheckbox from './CustomFormInputMultiCheckbox';


const propTypes = {
  type: PropTypes.oneOf([
    'text', 'textarea', 'select', 'checkbox', 'file-image', 'datetime', 'date', 'multi-checkbox',
  ]).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired, // If no label given, we leave out label
  hideLabel: PropTypes.bool,
  placeholder: PropTypes.string, // If no placeholder given, we leave out placeholder
  required: PropTypes.bool,
  helpText: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({ // Optional, only for select, multi-checkbox
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    label: PropTypes.string,
  })),
};

const defaultProps = {
  required: false,
  hideLabel: false,
};

const FormInputField = (props) => {
  const {
    type, name, label, hideLabel, placeholder, required, helpText, options,
  } = props;

  /*
   * Hook into Formik's context so we do not have to explicitly pass in these props. Now my
   * component works in the same way as Formik's own <Field /> shortcut component.
   */
  const value = getIn(props.formik.values, props.name);
  const touched = getIn(props.formik.touched, props.name);
  const error = getIn(props.formik.errors, props.name);
  const onChange = getIn(props.formik.handleChange);
  const onBlur = getIn(props.formik.handleBlur);
  const setFieldValue = getIn(props.formik.setFieldValue);
  const setFieldTouched = getIn(props.formik.setFieldTouched);

  // Has this field been touched and does it have an error?
  const hasError = error && touched;

  return (
    <FormGroup key={name}>
      {type !== 'checkbox' &&
        <Label
          className={hideLabel === true ? 'sr-only' : ''}
          for={`id-${name}`}
        >
          {label} {required && '*'}
        </Label>}


      {type === 'text' &&
        <Input
          type="text"
          name={name}
          id={`id-${name}`}

          bsSize="sm"

          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          invalid={hasError}
        />}

      {type === 'textarea' &&
        <Input
          type="textarea"
          name={name}
          id={`id-${name}`}

          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          invalid={hasError}
        />}

      {type === 'select' &&
        <Input
          type="select"
          name={name}
          id={`id-${name}`}

          bsSize="sm"

          required={required}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          invalid={hasError}
        >
          {options.map(option =>
            <option
              value={option.value}
              key={option.value}
            >
              {option.label}
            </option>)}
        </Input>}

      {type === 'checkbox' &&
        <CustomInput
          type="checkbox"
          name={name}
          id={`id-${name}`}

          label={label}

          required={required}
          checked={value}
          onChange={onChange}
          onBlur={onBlur}
          invalid={hasError}
        />}

      {type === 'file-image' &&
        <CustomInput
          type="file"
          name={name}
          id={`id-${name}`}
          bsSize="sm"

          label={value}
        />}

      {(type === 'datetime' || type === 'date') &&
        <CustomFormInputDateTime
          {...props}
          value={value}
          onChange={setFieldValue}
          onBlur={setFieldTouched}
        />}

      {type === 'multi-checkbox' &&
        <CustomFormInputMultiCheckbox
          {...props}
          value={value}
          onChange={setFieldValue}
          onBlur={setFieldTouched}
        />}


      {hasError &&
        <div className="text-danger">
          <small>{error}</small>
        </div>}

      {/*
      hasError &&
        <FormFeedback>{errors[name]}</FormFeedback>
      */}


      {helpText &&
        <FormText color="muted">
          {helpText}
        </FormText>}
    </FormGroup>
  );
};

FormInputField.propTypes = propTypes;
FormInputField.defaultProps = defaultProps;

export default connect(FormInputField);
