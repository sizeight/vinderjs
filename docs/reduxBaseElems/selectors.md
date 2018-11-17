# selectors

Reusable selectors for an array of objects.

- Important to use memoized createSelector for setting up selectors that perform calculations.

## Usage example

```javascript
import { createSelector } from 'reselect';

import { reduxBaseElem } from '@vinder/vinderjs';

const {
  getStateElems, getUpdateElemId, getFetchingComplete, getElems, getElemToUpdate, getFilterValue,
  getFilteredElems,
} = reduxBaseElem.selectors;


const nameSpace = 'websites';

const getStateWebsites = state => getStateElems(nameSpace, state);
const getUpdateWebsiteId = state => getUpdateElemId(nameSpace, state);
export const getWebsiteFilterValue = state => getFilterValue(nameSpace, state);

export const getFetchingWebsitesComplete = createSelector(
  [getStateWebsites],
  (stateWebsites) => {
    return getFetchingComplete(stateWebsites);
  },
);

export const getWebsites = createSelector(
  [getStateWebsites, getWebsiteFilterValue],
  (stateWebsites, websiteFilterValue) => {
    if (websiteFilterValue !== '') {
      return getFilteredElems(stateWebsites);
    }
    return getElems(stateWebsites);
  },
);

export const getWebsiteToUpdate = createSelector(
  [getUpdateWebsiteId, getWebsites],
  (updateWebsiteId, websites) => {
    return getElemToUpdate(updateWebsiteId, websites);
  },
);
```
