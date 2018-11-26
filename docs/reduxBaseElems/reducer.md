# reducer

Reusable Redux reducer for an array of objects.

## Usage example

Specify filterOnFields in initial state, the reducer will then create a `filterString` field for each elem by concatenating the lowercase string of each field specified.

e.g. Let's say an element has fields `title: 'Alpha` and `subTitle: Beta` then a new field will be created `filterString: 'alpha beta'` to be used for filtering.

The example also inicates how to add aditional custom actions.

```javascript
// src/state/pages/reducer.js

import { reduxBaseElem } from '@vinder/vinderjs';

const { initialState, elems } = reduxBaseElem.reducer;


const nameSpace = 'pages'; // IMPORTANT: The state key

// Example of including more state
const initialWebsitesState = Object.assign({}, initialState, {
  filterOnFields: ['title', 'subtitle'], // Fields to filter on
  extra1: 'extra state 1',
  extra1: 'extra state 2',
});

const websites = (state = initialWebsitesState, action) => {
  switch (action.type) {
    case 'website/CUSTOM_ACTION':
      // Example of a custom action
      return state;
    default:
      return elems(nameSpace, state, action);
  }
};

export default websites;

```
