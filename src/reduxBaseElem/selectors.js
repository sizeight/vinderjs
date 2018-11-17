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
