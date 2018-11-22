# selectors

Reusable selectors for an array of objects.

- Important to use memoized createSelector for setting up selectors that perform calculations.

## Usage example

```javascript
// src/state/pages/selectors.js

import { createSelector } from 'reselect';

import { reduxBaseElem } from '@vinder/vinderjs';

const {
  getStateElems, getFetchingComplete, getElems, getElemToUpdate, getFilterValue,
} = reduxBaseElem.selectors;


const nameSpace = 'pages'; // IMPORTANT: The state key

const getStatePages = state => getStateElems(nameSpace, state); // Pass this state into the selector functions below
export const getPageFilterValue = state => getFilterValue(nameSpace, state);

export const getFetchingPagesComplete = createSelector(
  [getStatePages],
  (statePages) => {
    return getFetchingComplete(statePages);
  },
);

export const getPages = createSelector(
  [getStatePages],
  (statePages) => {
    return getElems(statePages);
  },
);

export const getPageToUpdate = createSelector(
  [getStatePages],
  (statePages) => {
    return getElemToUpdate(statePages);
  },
);

// CUSTOM SELECTORS
// Add any custom selectors here...

```

## Reference

### getStateElems(nameSpace, state)
#### Arguments
  * nameSpace: The name of the state object
  * state: The Redux state
#### Returns
Object: Returns an object with the state object.

### getUpdateElemId(nameSpace, state)
#### Arguments
  * nameSpace: The name of the state object
  * state: The Redux state
#### Returns
Number: Returns the id of element being updated.

### getFilterValue(nameSpace, state)
#### Arguments
  * nameSpace: The name of the state object
  * state: The Redux state
#### Returns
String: Return the string to filter elements by, e.g. 'blue' or 'dogs' or 'laptos'
  
### getSortKey(nameSpace, state)
#### Arguments
  * nameSpace: The name of the state object
  * state: The Redux state
#### Returns
String: Return the key to sort by, e.g. 'title'
  
### getSortDirection(nameSpace, state
#### Arguments
  * nameSpace: The name of the state object
  * state: The Redux state
#### Returns
String: Returns `null`, `asc`, od `desc`
