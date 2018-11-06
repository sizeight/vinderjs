import expect from 'expect';

import {
  getStateElems, getUpdateElemId, getFetchingComplete, getElems, getElemToUpdate,
} from './selectors';


const nameSpace = 'posts';

describe('selectors -> reduxBaseElem', () => {
  it('getStateElems()', () => {
    const state = {
      posts: {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: Date.now(),
        posts: [],
      },
      websites: {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: Date.now(),
        websites: [],
      },
    };
    const derivedData = {
      isFetching: false,
      didInvalidate: false,
      lastUpdated: Date.now(),
      posts: [],
    };
    expect(getStateElems(nameSpace, state)).toEqual(derivedData);
  });

  it('getUpdateElemId()', () => {
    const state = {
      posts: {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: Date.now(),
        posts: [],
        updateId: 2,
      },
      websites: {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: Date.now(),
        websites: [],
        updateId: undefined,
      },
    };
    const derivedData = 2;
    expect(getUpdateElemId(nameSpace, state)).toEqual(derivedData);
  });


  it('getElems() -> fetching complete', () => {
    const elems = {
      isFetching: false,
      didInvalidate: false,
      lastUpdated: Date.now(),
      elems: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
    };
    const derivedData = [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ];
    expect(getElems(elems)).toEqual(derivedData);
  });


  it('getFetchingComplete() -> fetching complete', () => {
    const elems = {
      isFetching: false,
      didInvalidate: false,
      lastUpdated: Date.now(),
    };
    const derivedData = true;
    expect(getFetchingComplete(elems)).toEqual(derivedData);
  });

  it('getFetchingComplete() -> fetching not complete', () => {
    const invites = {
      isFetching: true,
      didInvalidate: false,
      lastUpdated: Date.now(),
    };
    const derivedData = false;
    expect(getFetchingComplete(invites)).toEqual(derivedData);
  });


  it('getElemToUpdate() -> UPDATE', () => {
    const updateId = 2;
    const elems = [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
    ];
    const derivedData = {
      id: 2,
    };
    expect(getElemToUpdate(updateId, elems)).toEqual(derivedData);
  });

  it('getElemToUpdate() -> CREATE (empty object)', () => {
    const updateId = -1;
    const elems = [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ];
    const derivedData = {};
    expect(getElemToUpdate(updateId, elems)).toEqual(derivedData);
  });
});
