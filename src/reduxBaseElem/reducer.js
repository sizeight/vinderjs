import * as t from './actionTypes';

export const initialState = {
  isFetching: false,
  didInvalidate: false,
  lastUpdated: undefined,
  elems: [], // array of state objects
  filterOnFields: [], // array of fields reducer should lowercase concat for each elem to filter on

  updateId: -1, // id for which to show update form
  filterValue: '',
  sortKey: null,
  sortDirection: null,

  pagination: {},
};

export const elems = (nameSpace, state = initialState, action) => {
  switch (action.type) {
    case `${nameSpace}${t.FETCH_BUSY}`:
      return Object.assign({}, state, {
        ...state,
        isFetching: true,
      });
    case `${nameSpace}${t.FETCH_SUCCESS}`: {
      // if paginated response, the response json is different
      let responseElems = [];
      let pagination = {};
      if (Array.isArray(action.elems)) {
        responseElems = action.elems.slice();
      } else if (action.elems.results) {
        responseElems = action.elems.results.slice();
        pagination = {
          count: action.elems.count,
          page_size: action.elems.page_size,
          page: action.elems.page,
          next: action.elems.next,
          previous: action.elems.previous,
        };
      }

      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: Date.now(),
        elems: responseElems.map((elem) => {
          const filterString = state.filterOnFields.map(x => elem[x].toLowerCase()).join(' ');
          return Object.assign({}, elem, {
            filterString,
          });
        }),
        pagination,
      });
    }

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

    case `${nameSpace}${t.SET_FILTER_VALUE}`: {
      return Object.assign({}, state, {
        ...state,
        filterValue: action.value,
      });
    }

    case `${nameSpace}${t.SET_SORT_KEY}`: {
      let newSortKey = action.sortKey;
      let newSortDirection = 'asc';
      if (state.sortKey === action.sortKey) {
        if (!state.sortDirection) {
          newSortKey = action.sortKey;
          newSortDirection = 'asc';
        } else if (state.sortDirection === 'asc') {
          newSortKey = action.sortKey;
          newSortDirection = 'desc';
        } else if (state.sortDirection === 'desc') {
          newSortKey = null;
          newSortDirection = null;
        }
      }

      return Object.assign({}, state, {
        ...state,
        sortKey: newSortKey,
        sortDirection: newSortDirection,
      });
    }
    default:
      return state;
  }
};
