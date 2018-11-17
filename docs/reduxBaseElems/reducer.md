# reducer

A reusable redux reducer for an array of objects.

## Usage example

```
import { reduxBaseElem } from '@vinder/vinderjs';

const { initialState, elems } = reduxBaseElem.reducer;


const nameSpace = 'websites';

// Example of including more state
const initialWebsitesState = Object.assign({}, initialState, {
  filterOnFields: ['title', 'subtitle'], // Reducer will create filterString for each elem by concatenating the lowercase string of each field specified here
  extra: 'extra state',
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
