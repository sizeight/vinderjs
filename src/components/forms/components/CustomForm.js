import React from 'react';
import PropTypes from 'prop-types';

import { Formik } from 'formik';
import * as Yup from 'yup';

import FormInputField from './FormInputField';
import FormButtons from './FormButtons';

import '../base.css';


const propTypes = {
  definition: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        initialValue: PropTypes.any.isRequired,
        hideLabel: PropTypes.bool,
        placeholder: PropTypes.string,
        validation: PropTypes.shape({
          required: PropTypes.bool,
          min: PropTypes.number,
          max: PropTypes.number,
          email: PropTypes.bool,
        }),
        width: PropTypes.number,
      }),
    ),
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  submitButtonText: PropTypes.string,
  buttonPosition: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  onCancel: undefined,
  submitButtonText: undefined,
  buttonPosition: undefined,
  children: null,
};

/*
 * Custom Formik wrapper.
 */
const CustomForm = (props) => {
  const {
    definition, onSubmit, onCancel, submitButtonText, buttonPosition, children,
  } = props;


  /*
   * Initial values
   */
  const flatDefinition = definition.flat();
  const initialValues = {};
  flatDefinition.forEach((obj) => {
    initialValues[obj.name] = obj.initialValue;
  });


  /*
   * Validation
   */
  const validationSchemaShape = {};
  flatDefinition.forEach((obj) => {
    if (obj.validation) {
      if (obj.type === 'multi-checkbox') {
        // Validate array
        let schema = Yup.array();
        if (obj.validation.required) {
          schema = schema.concat(Yup.array().required('Select at least 1.'));
        }
        if (obj.validation.min) {
          schema = schema.concat(Yup.array()
            .min(obj.validation.min, `Select at least ${obj.validation.min}.`));
        }
        validationSchemaShape[obj.name] = schema;
      } else if (obj.validation.integer) {
        // Validate number
        let schema = Yup.number();
        if (obj.validation.required) {
          schema = schema.concat(Yup.number().required('Required'));
        }
        if (obj.validation.min) {
          schema = schema.concat(Yup.number()
            .min(obj.validation.min, `Should be greater than or equal to ${obj.validation.min}.`));
        }
        if (obj.validation.max) {
          schema = schema.concat(Yup.number()
            .max(obj.validation.max, `Should be less than or equal to ${obj.validation.max}.`));
        }
        validationSchemaShape[obj.name] = schema;
      } else {
        // Validate string
        let schema = Yup.string();
        if (obj.validation.required) {
          schema = schema.concat(Yup.string().required('Required'));
        }
        if (obj.validation.min) {
          schema = schema.concat(Yup.string()
            .min(obj.validation.min, `Should be at least ${obj.validation.min} characters.`));
        }
        if (obj.validation.max) {
          schema = schema.concat(Yup.string()
            .max(obj.validation.max, `Should be no longer than ${obj.validation.max} characters.`));
        }
        if (obj.validation.uppercase) {
          schema = schema.concat(Yup.string().strict().uppercase('Should be UPPERCASE.'));
        }
        if (obj.validation.lowercase) {
          schema = schema.concat(Yup.string().strict().lowercase('Should be lowercase.'));
        }
        if (obj.validation.email) {
          schema = schema.concat(Yup.string()
            .email('Not a valid email address.'));
        }
        if (obj.validation.phone) {
          schema = schema.concat(Yup.string()
            .matches(/^[+]?[0-9 ]{7,20}$/, 'Not a valid phone number.'));
        }
        validationSchemaShape[obj.name] = schema;
      }
    }
  });
  const validationSchema = Yup.object().shape(validationSchemaShape);


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}

      validateOnBlur={false}
      validateOnChange={false}
    >
      <React.Fragment>
        {definition.map((formRow, i) => (
          <div
            className="form-row"
            key={i} /* eslint-disable-line react/no-array-index-key */
          >
            {formRow.map(field => (
              <FormInputField
                {...field}
                key={field.name}
              />))}
          </div>))}
        <FormButtons
          submitButtonText={submitButtonText}
          buttonPosition={buttonPosition}
          onCancel={onCancel}
        />

        {children}
      </React.Fragment>
    </Formik>
  );
};

CustomForm.propTypes = propTypes;
CustomForm.defaultProps = defaultProps;

export default CustomForm;
