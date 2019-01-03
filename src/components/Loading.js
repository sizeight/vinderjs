import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faSpinnerThird as fasSpinnerThird } from '@fortawesome/pro-solid-svg-icons/faSpinnerThird';

library.add(fasSpinnerThird);


const propTypes = {
  animate: PropTypes.bool,
  size: PropTypes.oneOf(['1x', '2x', '3x']),
};

const defaultProps = {
  animate: false,
  size: '1x',
};

const Loading = (props) => {
  const { animate, size } = props;

  return (
    <span className="loading" style={{ padding: '10px 6px' }}>
      {animate
        ? (
          <FontAwesomeIcon
            icon={['fas', 'spinner-third']}
            size={size}
            pulse
          />
        ) : (
          <em>Loading&hellip;</em>
        )}
    </span>
  );
};

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;

export default Loading;
