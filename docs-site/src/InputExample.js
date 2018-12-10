import React from 'react';
import PropTypes from 'prop-types';

// import { forms } from '../../src/components/forms';
// import { forms } from '../../lib/vinderjs.min';
// import { CustomForm } from '@vinder/vinderjs';
import { CustomForm } from '../../lib/react-vorms.min';

/// const { CustomForm } = forms;


const propTypes = {
  heading: PropTypes.string.isRequired,
  definition: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  children: PropTypes.node,
};


class InputExample extends React.Component {
  state = {
    data: {},
  }

  handleSubmit = (values, actions) => {
    this.setState({ data: values });
    actions.setSubmitting(false);
  }

  render() {
    const { heading, definition, children } = this.props;
    const { data } = this.state;

    return (
      <React.Fragment>
        <div className="row mt-3">
          <div className="col-12">
            <h2>{heading}</h2>
            {children}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-6">
            <pre>
              <code className="javascript">
                {`
  const definiton = ${JSON.stringify(definition, null, 2)};

  // ...

  <CustomForm
    definition={definition}
    onSubmit={this.handleSubmit}
    onCancel={this.handleBlur} // Optional, include to show Cancel button
    submitButtonText="Save" // Optional
    buttonPosition="right" // Optional
  />
  `}
              </code>
            </pre>
          </div>
          <div className="col-6">
            <div style={{ border: '1px solid #eee', padding: '10px' }}>
              <CustomForm
                definition={definition}
                onSubmit={this.handleSubmit}
              />
            </div>


            <pre>
              <code className="json">
                {JSON.stringify(data, null, 2)}
              </code>
            </pre>
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

InputExample.propTypes = propTypes;

export default InputExample;
