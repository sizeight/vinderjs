/*
 * Reusable selector functions
 */
import { upToDate } from '../utils';


export const getStateElems = (nameSpace, state) => state[nameSpace];
export const getUpdateElemId = (nameSpace, state) => state[nameSpace].updateId;
export const getFilterValue = (nameSpace, state) => state[nameSpace].filterValue;

export const getElems = (stateElems) => {
  let elems = [];
  if (upToDate(stateElems)) {
    elems = stateElems.elems;
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

/*
 * Return the elemnts that match the filter value.
 */
export const getFilteredElems = (nameSpace, state) => {
  let filteredElems = [];
  const stateElems = state[nameSpace];
  const filterValue = state[nameSpace].filterValue;
  if (upToDate(stateElems) && filterValue !== '') {
    filteredElems = stateElems.elems.filter((elem) => {
      if (elem.filterString) {
        return elem.filterString.includes(filterValue.toLowerCase());
      }
      return false;
    });
  }
  return filteredElems;
};
