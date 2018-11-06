import expect from 'expect';
import deepFreeze from 'deep-freeze';

import { elems as reducer } from './reducer';


const nameSpace = 'websites';

describe('reducer -> reduxBaseElem', () => {
  it('should return the initial state', () => {
    const action = {};
    const stateBefore = undefined;
    const stateAfter = {
      isFetching: false,
      didInvalidate: false,
      lastUpdated: undefined,
      elems: [],
      updateId: -1,
    };
    expect(reducer(nameSpace, stateBefore, action)).toEqual(stateAfter);
  });

  it(`should handle ${nameSpace}/FETCH_BUSY`, () => {
    const action = {
      type: 'websites/FETCH_BUSY',
    };
    const stateBefore = {
      isFetching: false,
    };
    const stateAfter = {
      isFetching: true,
    };
    deepFreeze(stateBefore);
    expect(reducer(nameSpace, stateBefore, action)).toEqual(stateAfter);
  });

  it(`should handle ${nameSpace}/FETCH_SUCCESS`, () => {
    const action = {
      type: 'websites/FETCH_SUCCESS',
      elems: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
    };
    const stateBefore = {
      isFetching: true,
      didInvalidate: true,
    };
    const stateAfter = {
      isFetching: false,
      didInvalidate: false,
      lastUpdated: expect.any(Number), // Date.now(),
      elems: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
    };
    deepFreeze(stateBefore);
    expect(reducer(nameSpace, stateBefore, action)).toEqual(stateAfter);
  });

  it(`should handle ${nameSpace}/FETCH_FAILURE`, () => {
    const action = {
      type: 'websites/FETCH_FAILURE',
    };
    const stateBefore = {
      isFetching: true,
      didInvalidate: true,
    };
    const stateAfter = {
      isFetching: false,
      didInvalidate: true,
    };
    deepFreeze(stateBefore);
    expect(reducer(nameSpace, stateBefore, action)).toEqual(stateAfter);
  });


  it(`should handle ${nameSpace}/SET_UPDATE_ID -> true`, () => {
    const action = {
      type: 'websites/SET_UPDATE_ID',
      id: 15,
    };
    const stateBefore = {
      updateId: -1,
    };
    const stateAfter = {
      updateId: 15,
    };
    deepFreeze(stateBefore);
    expect(reducer(nameSpace, stateBefore, action)).toEqual(stateAfter);
  });

  it(`should handle ${nameSpace}/SET_UPDATE_ID -> false`, () => {
    const action = {
      type: 'websites/SET_UPDATE_ID',
      id: -1,
    };
    const stateBefore = {
      updateId: 15,
    };
    const stateAfter = {
      updateId: -1,
    };
    deepFreeze(stateBefore);
    expect(reducer(nameSpace, stateBefore, action)).toEqual(stateAfter);
  });


  it(`should handle ${nameSpace}/UPDATE_SUCCESS -> CREATE`, () => {
    const action = {
      type: 'websites/UPDATE_SUCCESS',
      id: -1,
      elem: { id: 16, title: 'New' },
    };
    const stateBefore = {
      elems: [
        {
          id: 15,
        },
        {
          id: 14,
        },
      ],
    };
    const stateAfter = {
      elems: [
        {
          id: 16,
          title: 'New',
        },
        {
          id: 15,
        },
        {
          id: 14,
        },
      ],
    };
    deepFreeze(stateBefore);
    expect(reducer(nameSpace, stateBefore, action)).toEqual(stateAfter);
  });

  it(`should handle ${nameSpace}/UPDATE_SUCCESS -> UPDATE`, () => {
    const action = {
      type: 'websites/UPDATE_SUCCESS',
      id: 15,
      elem: { id: 15, title: 'Changed' },
    };
    const stateBefore = {
      elems: [
        {
          id: 16,
        },
        {
          id: 15,
        },
        {
          id: 14,
        },
      ],
    };
    const stateAfter = {
      elems: [
        {
          id: 16,
        },
        {
          id: 15,
          title: 'Changed',
        },
        {
          id: 14,
        },
      ],
    };
    deepFreeze(stateBefore);
    expect(reducer(nameSpace, stateBefore, action)).toEqual(stateAfter);
  });

  it(`should handle ${nameSpace}/UPDATE_SUCCESS -> DELETE`, () => {
    const action = {
      type: 'websites/UPDATE_SUCCESS',
      id: 15,
      elem: undefined,
    };
    const stateBefore = {
      elems: [
        {
          id: 16,
        },
        {
          id: 15,
        },
        {
          id: 14,
        },
      ],
    };
    const stateAfter = {
      elems: [
        {
          id: 16,
        },
        {
          id: 14,
        },
      ],
    };
    deepFreeze(stateBefore);
    expect(reducer(nameSpace, stateBefore, action)).toEqual(stateAfter);
  });
});
