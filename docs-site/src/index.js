import React from 'react';
// import PropTypes from 'prop-types';
import { render } from 'react-dom';

import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/monokai-sublime.css';

import InputExample from './InputExample';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);


class Demo extends React.Component {
  componentDidMount() {
    hljs.initHighlightingOnLoad();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row flex-xl-nowrap">
          <div className="col-12 col-md-3 col-xl-2">

            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">Getting Started</a>
              </li>
            </ul>

            <p>Inputs</p>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">Text</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">TextArea</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Email</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Checkbox</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Date</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">DateTime</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">RichTextArea</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Select</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Radio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Multi Checkbox</a>
              </li>
            </ul>

          </div>

          <main className="col-12 col-md-9 col-xl-10">
            <div className="row mb-5 mt-5">
              <div className="col">
                <h1>
                  <div style={{ display: 'inline-block', border: '3px solid #212529', padding: '0px 10px 6px' }}>react-<em>vorms</em></div>
                </h1>
                <p>
                  Batteries included, minimal setup reusable forms for React & Bootstrap combo apps.
                </p>

                <h2>Installation</h2>
                <pre>
                  <code className="javascript">$ yarn add react-vorms bootstrap</code>
                </pre>

                <h2>Usage</h2>

                <h2>Features</h2>
                <ul>
                  <li>Easily setup a form in JSON
                    <ul>
                      <li>Input types</li>
                      <li>Layout</li>
                      <li>Validation</li>
                      <li>Initial values</li>
                    </ul>
                  </li>
                  <li>Slick advanced components
                    <ul>
                      <li>Date/time picker</li>
                      <li>Rich Text editor with HTML preview</li>
                      <li>File uploads</li>
                      <li>Multiple checkbox</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <InputExample
              heading="Text Input"
              definition={[
                [
                  {
                    type: 'text',
                    name: 'species',
                    label: 'Species',
                    initialValue: 'Oertendahlii',
                    helpText: 'The species of plant you found.',
                    validation: {
                      required: true,
                    },
                  },
                ],
              ]}
            >
              <p>Text input field</p>
            </InputExample>


            <InputExample
              heading="TextArea Input"
              definition={[
                [
                  {
                    type: 'textarea',
                    name: 'description',
                    label: 'Description',
                    initialValue: '',
                    placeholder: 'Describe the species characteristics...',
                    validation: {
                      required: false,
                      min: 10,
                      max: 250,
                    },
                  },
                ],
              ]}
            >
              <p>Text input field</p>
            </InputExample>


            <InputExample
              heading="Email Input"
              definition={[
                [
                  {
                    type: 'email',
                    name: 'email',
                    label: 'Your email address',
                    initialValue: '',
                    validation: {
                      required: true,
                      email: true,
                    },
                  },
                ],
              ]}
            >
              <p>Email control</p>
            </InputExample>

            <InputExample
              heading="Checkbox Input"
              definition={[
                [
                  {
                    type: 'checkbox',
                    name: 'endangered',
                    label: 'Endangered',
                    helpText: 'Is the species endangered?',
                    initialValue: true,
                    validation: {
                      required: true,
                    },
                  },
                ],
              ]}
            >
              <p>Checkbox input field</p>
            </InputExample>

            <InputExample
              heading="Date Input"
              definition={[
                [
                  {
                    type: 'date',
                    name: 'identification_date',
                    label: 'First identified',
                    helpText: 'The date on which species was first found.',
                    initialValue: '',
                    validation: {
                      required: true,
                    },
                  },
                ],
              ]}
            >
              <p>
                Date input field using <a href="https://reactdatepicker.com/">react-datepicker</a>
              </p>
            </InputExample>


            <InputExample
              heading="DateTime Input"
              definition={[
                [
                  {
                    type: 'datetime',
                    name: 'identification_date_and_time',
                    label: 'First identified',
                    helpText: 'The date and time on which species was first found.',
                    initialValue: '',
                    validation: {
                      required: true,
                    },
                  },
                ],
              ]}
            >
              <p>
                Date input field using <a href="https://reactdatepicker.com/">react-datepicker</a>
              </p>
            </InputExample>


            <InputExample
              heading="RichTextArea Input"
              definition={[
                [
                  {
                    type: 'textarea-wysiwyg',
                    name: 'endangered',
                    label: 'Endangered',
                    helpText: 'Is the species endangered?',
                    initialValue: '<p>Hello world.</p>',
                    validation: {
                      required: true,
                    },
                  },
                ],
              ]}
            >
              <p>
                A rich text input field with HTML preview/edit, undo/redo.
                Uses <a href="https://draftjs.org/">Draft.js</a>
              </p>
            </InputExample>


            <InputExample
              heading="Select Input"
              definition={[
                [
                  {
                    type: 'select',
                    name: 'species',
                    label: 'Species',
                    helpText: 'Which species did you find?',
                    initialValue: 'ernstii',
                    validation: {
                      required: true,
                    },
                    options: [
                      {
                        value: 'ambiguus',
                        label: 'Plectranthus ambiguus',
                      },
                      {
                        value: 'ernstii',
                        label: 'Plectranthus ernstii',
                      },
                      {
                        value: 'oertendahlii',
                        label: 'Plectranthus oertendahlii',
                      },
                    ],
                  },
                ],
              ]}
            >
              <p>Select input field.</p>
            </InputExample>


            <InputExample
              heading="Radio Input"
              definition={[
                [
                  {
                    type: 'radio',
                    name: 'species',
                    label: 'Species',
                    helpText: 'Which species did you find?',
                    initialValue: 'ernstii',
                    validation: {
                      required: true,
                    },
                    options: [
                      {
                        value: 'ambiguus',
                        label: 'Plectranthus ambiguus',
                      },
                      {
                        value: 'ernstii',
                        label: 'Plectranthus ernstii',
                      },
                      {
                        value: 'oertendahlii',
                        label: 'Plectranthus oertendahlii',
                      },
                    ],
                  },
                ],
              ]}
            />


            <InputExample
              heading="Multi Checkbox Input"
              definition={[
                [
                  {
                    type: 'multi-checkbox',
                    name: 'species',
                    label: 'Species',
                    helpText: 'Which species did you find?',
                    initialValue: ['ernstii', 'oertendahlii'],
                    validation: {
                      required: true,
                      min: 1,
                    },
                    options: [
                      {
                        value: 'ambiguus',
                        label: 'Plectranthus ambiguus',
                      },
                      {
                        value: 'ernstii',
                        label: 'Plectranthus ernstii',
                      },
                      {
                        value: 'oertendahlii',
                        label: 'Plectranthus oertendahlii',
                      },
                    ],
                  },
                ],
              ]}
            >
              <p>Select more than one option checkbox field.</p>
            </InputExample>
          </main>
        </div>
      </div>
    );
  }
}

// Demo.propTypes = propTypes;


render(
  <Demo />,
  document.getElementById('app'),
);
