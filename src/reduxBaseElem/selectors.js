/*
 * Reusable selector functions
 */
import { upToDate } from '../utils';


export const getStateElems = (nameSpace, state) => state[nameSpace];
export const getUpdateElemId = (nameSpace, state) => state[nameSpace].updateId;
export const getFilterValue = (nameSpace, state) => state[nameSpace].filterValue;
export const getSortKey = (nameSpace, state) => state[nameSpace].sortKey;
export const getSortDirection = (nameSpace, state) => state[nameSpace].sortDirection;

/* Private function, only exported to test
 * Return the elements that match the filter value else return all elements.
 */
export const getFilteredElems = (elems, filterValue) => {
  let filteredElems = elems.slice();
  if (filterValue !== '') {
    filteredElems = filteredElems.filter((elem) => {
      if (elem.filterString) {
        return elem.filterString.includes(filterValue.toLowerCase());
      }
      return false;
    });
  }
  return filteredElems;
};

/* Private function, only exported to test
 * If descending or ascending sort required, return sorted elements else just return elems.
 */
export const getSortedElems = (elems, sortKey, sortDirection) => {
  let sortedElems = elems.slice();
  if (sortKey !== null && sortDirection !== null) {
    sortedElems = sortedElems.sort((a, b) => {
      let valA = a[sortKey]; // ignore upper and lowercase
      let valB = b[sortKey]; // ignore upper and lowercase

      if (typeof valA === 'number' && typeof valB === 'number') {
        // Sort integers
        return sortDirection === 'asc' ? (valA - valB) : (valB - valA);
      } else if (typeof valA === 'string' && typeof valB === 'string') {
        // Sort strings
        valA = valA.toUpperCase(); // ignore upper and lowercase
        valB = valB.toUpperCase(); // ignore upper and lowercase
        if (valA < valB) {
          return sortDirection === 'asc' ? -1 : 1;
        }
        if (valA > valB) {
          return sortDirection === 'asc' ? 1 : -1;
        }
      } else if (valA === undefined || valA === null) {
        return sortDirection === 'asc' ? -1 : 1;
      } else if (valB === undefined || valB === null) {
        return sortDirection === 'asc' ? 1 : -1;
      }
      /*
      else if () {
        // Sort mixed types

      }
      */

      // case where values are equal
      return 0;
    });
  }
  return sortedElems;
};


export const getElems = (stateElems) => {
  let elems = [];
  if (upToDate(stateElems)) {
    elems = stateElems.elems.slice();

    const filterValue = stateElems.filterValue;
    elems = getFilteredElems(elems, filterValue);

    const sortKey = stateElems.sortKey;
    const sortDirection = stateElems.sortDirection;
    elems = getSortedElems(elems, sortKey, sortDirection);
  }
  return elems;
};

export const getFetchingComplete = (stateElems) => {
  return upToDate(stateElems);
};

export const getElemToUpdate = (updateId, elems) => {
  const elemToUpdate = elems.find(obj => obj.id === updateId);
  return elemToUpdate || {};
};
