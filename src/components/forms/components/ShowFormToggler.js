import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
  ]).isRequired,
};

/*
 * Using render props technique to isolatee the toggle modal state and functionality for reuse.
 * https://tylermcginnis.com/react-render-props/
 */
class ShowFormToggler extends React.Component {
  state = {
    showForm: false,
  }

  toggleForm = () => {
    const { showForm } = this.state;
    this.setState({ showForm: !showForm });
  }

  render() {
    const { children } = this.props;
    const { showForm } = this.state;

    return (
      <div>
        {children(showForm, this.toggleForm)}
      </div>
    );
  }
}

ShowFormToggler.propTypes = propTypes;

export default ShowFormToggler;
