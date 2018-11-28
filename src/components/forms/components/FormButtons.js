import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'reactstrap';

import { connect, getIn } from 'formik';

const propTypes = {
  onCancel: PropTypes.func,
};

const defaultProps = {};


const FormButtons = (props) => {
  const {
    onCancel,
  } = props;

  /*
   * Hook into Formik's context so we do not have to explicitly pass in these props. Now my
   * component works in the same way as Formik's own <Field /> shortcut component.
   */
  const onSubmit = getIn(props.formik.handleSubmit); // eslint-disable-line react/prop-types
  const isSubmitting = getIn(props.formik.isSubmitting); // eslint-disable-line react/prop-types

  return (
    <div className="text-right mb-2">
      {onCancel &&
        <Button
          className="mr-2"
          color="secondary"
          size="sm"
          onClick={onCancel}
          disabled={isSubmitting}
        >
          Cancel
        </Button>}
      <Button
        color="primary"
        size="sm"
        onClick={onSubmit}
        disabled={isSubmitting}
      >
        Save
      </Button>
    </div>
  );
};

FormButtons.propTypes = propTypes;
FormButtons.defaultProps = defaultProps;

export default connect(FormButtons);
