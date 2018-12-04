# forms

Reusable forms with initial values and validation.

## Form definition

A form is created by setting up a form definition object. The form defeinition specifies the form fields, layout, validations and initial values. A form definition can be defined server side with JSON and then changed to an object client side and given to the form. See example below for a form definition.

Supported form fields:
```
[
  'text', 'textarea', 'checkbox', 'email', 'datetime', 'date', 'file-image',
  'select', 'radio', // select only one from multiple options
  'multi-checkbox', // Select 0 or more from multiple options
 ]
```
## Example
An example showing showing how to create/update a page.

```es6
import React from 'react';
import PropTypes from 'prop-types';

import { forms } from '@vinder/vinderjs';

const { CustomForm } = forms;


const propTypes = {
  page: PropTypes.object.isRequired, // The element being UPDATED, empty if CREATE
  onSubmit: PropTypes.func.isRequired, // The function to fire when submitting form
};

class PostForm extends React.Component {
  handleSubmit = (values, actions) => {
    const { page, onCreateUpdatePage, toggleForm } = this.props;    
    onCreateUpdatePage(values, page.id)
      .then((result) => {
        if (result === 'Success') {
          actions.setSubmitting(false);
        } else {
          actions.setSubmitting(false);
          actions.setErrors(result);
          actions.setStatus({ msg: 'Please correct all fields before resubmitting.' });
        }
      });
  }

  render() {
    const { page } = this.props;

    /*
     * Definition to set up the form fields, layout, validation and initial values.
     */
    const pageFormDefinition = [
      [
        {
          type: 'text', // Field type
          name: 'title', // If mapped from server side model, spec this as exactly the field name received from server.
          label: 'Title', // Field label
          initialValue: page.title || '', // Programatically set initial value
          width: 8, // Optional Bootstrap width (1-12), default is 12
          validation: { // Yup validations
            required: true,
            max: 50,
          },
        },
      ],
      [
        {
          type: 'text',
          name: 'slug',
          label: 'Permalink',
          initialValue: page.slug || '',
          helpText: 'Caution, changing the permalink will break links to this page from other websites.',
          width: 8,
          validation: {
            required: true,
            min: 5,
            max: 50,
            lowercase: true,
          },
        },
      ],
      [
        {
          type: 'text',
          name: 'metadescription',
          label: 'Meta description tag',
          initialValue: page.metadescription || '',
          helpText: 'IMPORTANT for SEO. In 160 characters or less, describe what this page is about.',
          validation: {
            required: true,
            max: 160,
          },
        },
      ],
    ];

    return (
      <div>
        <CustomForm
          definition={pageFormDefinition}
          onSubmit={this.handleSubmit}
          onCancel={() => console.log('Cancel')} // Optional, if absent cancel button is not rendered
          submitButtonText="Save" // Override default submit button text, default is "Submit"
        />
      </div>
    );
  }
}

PageForm.propTypes = propTypes;

export default PageForm;
```
