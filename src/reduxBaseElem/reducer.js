import * as t from './actionTypes';

export const initialState = {
  isFetching: false,
  didInvalidate: false,
  lastUpdated: undefined,
  elems: [], // array of state objects

  updateId: -1, // id for which to show update form
};

export const elems = (nameSpace, state = initialState, action) => {
  switch (action.type) {
    case `${nameSpace}${t.FETCH_BUSY}`:
      return Object.assign({}, state, {
        ...state,
        isFetching: true,
      });
    case `${nameSpace}${t.FETCH_SUCCESS}`:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: Date.now(),
        elems: action.elems,
      });
    case `${nameSpace}${t.FETCH_FAILURE}`:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: true,
      });

    case `${nameSpace}${t.SET_UPDATE_ID}`: {
      return Object.assign({}, state, {
        ...state,
        updateId: action.id,
      });
    }
    case `${nameSpace}${t.UPDATE_SUCCESS}`: {
      // CREATE
      if (action.id === -1) {
        return Object.assign({}, state, {
          elems: [
            action.elem,
            ...state.elems,
          ],
        });
      }
      const idx = state.elems.findIndex(obj => obj.id === action.id);
      // DELETE
      if (action.elem === undefined) {
        return Object.assign({}, state, {
          elems: [
            ...state.elems.slice(0, idx),
            ...state.elems.slice(idx + 1),
          ],
        });
      }
      // UPDATE
      return Object.assign({}, state, {
        elems: [
          ...state.elems.slice(0, idx),
          action.elem,
          ...state.elems.slice(idx + 1),
        ],
      });
    }
    default:
      return state;
  }
};
