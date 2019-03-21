import { dom } from '@fortawesome/fontawesome-svg-core';


/*
 * https://github.com/FortAwesome/Font-Awesome/blob/master/UPGRADING.md
 * Kicks off the process of finding <i> tags and replacing with <svg>
 *
 * Call this function to render icons in HTML.
 */
function domWatch() { /* eslint-disable-line import/prefer-default-export */
  dom.watch();
}

export default domWatch;
