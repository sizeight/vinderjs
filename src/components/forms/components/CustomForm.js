import React from 'react';
import PropTypes from 'prop-types';

import { Formik } from 'formik';

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
        required: PropTypes.bool,
        width: PropTypes.number,
      }),
    ),
  ).isRequired,
  initialValues: PropTypes.object.isRequired,
  validationSchema: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  children: PropTypes.node,
};

/*
 * Custom Formik wrapper.
 */
const CustomForm = (props) => {
  const { definition, initialValues, validationSchema, onSubmit, onCancel, children } = props;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
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
        <FormButtons onCancel={onCancel} />

        {children}
      </React.Fragment>
    </Formik>
  );
};

CustomForm.propTypes = propTypes;

export default CustomForm;
