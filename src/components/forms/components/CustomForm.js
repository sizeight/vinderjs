import React from 'react';
import PropTypes from 'prop-types';

import { Formik } from 'formik';


const propTypes = {
  initialValues: PropTypes.object.isRequired,
  validationSchema: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

/*
 * Custom Formik wrapper.
 */
const CustomForm = (props) => {
  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={props.validationSchema}
      onSubmit={props.onSubmit}

      validateOnBlur={false}
      validateOnChange={false}
    >
      {props.children}
    </Formik>
  );
};

CustomForm.propTypes = propTypes;

export default CustomForm;
