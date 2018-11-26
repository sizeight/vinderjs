# actions

Reusable Redux actions for an array of objects.

## Usage example
Hook up your actions to the reusable reduxBaseElem actions.

```javascript
// src/state/pages/actions.js

import { reduxBaseElem } from '@vinder/vinderjs';

const {
  fetchElems, setUpdateId, createUpdateElem, deleteElem, setFilterValue, setSortKey,
} = reduxBaseElem.actions;


const nameSpace = 'pages'; // IMPORTANT: The state key

// FETCHING
/*
 * /pages/                        => Fetch all pages
 * /pages/?parent=<pk>            => Fetch pages with parent page
 * /pages/<id>/                   => Fetch page with specified id
 */
export const fetchPages = (parentId) => {
  const queryParams = `?parent=${parentId}`;
  return fetchElems(nameSpace, queryParams);
};


// CREATE / UPDATE / DELETE
export const setPageUpdateId = (id) => {
  return setUpdateId(nameSpace, id);
};

export const createUpdatePage = (data, id) => {
  return createUpdateElem(nameSpace, data, id);
};

export const deletePage = (id) => {
  return deleteElem(nameSpace, id);
};

// FILTERING
export const setPageFilterValue = (value) => {
  return setFilterValue(nameSpace, value);
};

// SORTING
export const setPageSortKey = (sortKey) => {
  return setSortKey(nameSpace, sortKey);
};

// CUSTOM ACTIONS
// Add any custom actions here...

```
