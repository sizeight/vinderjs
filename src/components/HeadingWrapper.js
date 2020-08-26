import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
};


const HeadingWrapper = (props) => {
  const { children } = props;
  return (
    <div className="bs4 d-flex align-items-center border-bottom py-2 my-2">
      {children}
    </div>
  );
};

HeadingWrapper.propTypes = propTypes;

export default HeadingWrapper;
