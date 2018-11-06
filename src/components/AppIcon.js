import React from 'react';
import PropTypes from 'prop-types';

import AppIconFontAwesome from 'dataApp/src/reusable/components/AppIconFontAwesome';


const propTypes = {
  iconType: PropTypes.oneOf([
    'no-access',
    'selection', 'selectionPrivate', 'selectionShared',
    'user', 'warning',
  ]),
  includeMarginLeft: PropTypes.bool,
  includeMarginRight: PropTypes.bool,
};

const defaultProps = {
  includeMarginLeft: false,
  includeMarginRight: false,
};

/*
 * Render icons that are constantly reused in the app. By passing throught this component,
 * it is easy to change the icon throughout the app in one centralised place.
 */
const AppIcon = (props) => {
  const { iconType } = props;

  let fontAwesomeWeight;
  let fontAwesomeClassName;
  switch (iconType) {
    case 'no-access':
      fontAwesomeWeight = 'far';
      fontAwesomeClassName = 'ban';
      break;
    case 'selection':
      fontAwesomeWeight = 'far';
      fontAwesomeClassName = 'box';
      break;
    case 'selectionPrivate':
      fontAwesomeWeight = 'fas';
      fontAwesomeClassName = 'lock';
      break;
    case 'selectionShared':
      fontAwesomeWeight = 'fas';
      fontAwesomeClassName = 'lock-open';
      break;
    case 'user':
      fontAwesomeWeight = 'fas';
      fontAwesomeClassName = 'user-circle';
      break;
    case 'warning':
      fontAwesomeWeight = 'far';
      fontAwesomeClassName = 'exclamation-triangle';
      break;
    default:
      break;
  }


  return (
    <AppIconFontAwesome
      icon={[fontAwesomeWeight, fontAwesomeClassName]}
      fixedWidth
      includeMarginLeft={props.includeMarginLeft}
      includeMarginRight={props.includeMarginRight}
    />
  );
};

AppIcon.propTypes = propTypes;
AppIcon.defaultProps = defaultProps;

export default AppIcon;
