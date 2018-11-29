import React from 'react';
import PropTypes from 'prop-types';

import { Formik } from 'formik';
import * as Yup from 'yup';

import FormInputField from './FormInputField';
import FormButtons from './FormButtons';


const propTypes = {
  definition: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
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
  initialValues: PropTypes.object.isRequired,
  validationSchema: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  submitButtonText: PropTypes.string,
  buttonPosition: PropTypes.string,
  children: PropTypes.node,
};

/*
 * Custom Formik wrapper.
 */
const CustomForm = (props) => {
  const {
    definition, initialValues, /* validationSchema, */ onSubmit, onCancel, submitButtonText,
    buttonPosition, children,
  } = props;


  /*
   * Initial values
   * If not all initial valeus are provided set them up here to blank strings
   */
  const flatDefinition = definition.flat();
  flatDefinition.forEach((obj) => {
    if (!initialValues[obj.name]) {
      initialValues[obj.name] = '';
    }
  });


  /*
   * Validation
   */
  const validationSchemaShape = {};
  flatDefinition.forEach((obj) => {
    if (obj.validation) {
      let schema = Yup.string();
      if (obj.validation.required) {
        schema = schema.concat(Yup.string().required('Required'));
      }
      if (obj.validation.min) {
        schema = schema.concat(Yup.string().min(obj.validation.min, `Should be at least ${obj.validation.min} characters.`));
      }
      if (obj.validation.max) {
        schema = schema.concat(Yup.string().max(obj.validation.max, `Should be no longer than ${obj.validation.max} characters.`));
      }
      if (obj.validation.email) {
        schema = schema.concat(Yup.string().email('Not a valid email address.'));
      }
      validationSchemaShape[obj.name] = schema;
    }
  });
  const validationSchemaNew = Yup.object().shape(validationSchemaShape);


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaNew}
      onSubmit={onSubmit}

      validateOnBlur={false}
      validateOnChange={false}
    >
      <React.Fragment>
        {definition.map((formRow, i) =>
          <div
            className="form-row"
            key={i}
          >
            {formRow.map(field =>
              <FormInputField
                {...field}
                key={field.name}
              />)}
          </div>)}
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

export default CustomForm;
