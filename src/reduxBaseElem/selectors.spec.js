import expect from 'expect';
import rewire from 'rewire';

import {
  getStateElems, getUpdateElemId, getFilterValue, getFetchingComplete, getElems, getElemToUpdate,
  getSortKey, getSortDirection, getPagination,
} from './selectors';

// Selector functions not exported need to be rewired to test
const selectors = rewire('./selectors');
const getFilteredElems = selectors.__get__('getFilteredElems'); /* eslint-disable-line no-underscore-dangle */
const getSortedElems = selectors.__get__('getSortedElems'); /* eslint-disable-line no-underscore-dangle */

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

  it('getFilterValue()', () => {
    const state = {
      posts: {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: Date.now(),
        posts: [],
        updateId: 2,
        filterValue: 'Some text',
      },
      websites: {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: Date.now(),
        websites: [],
        updateId: undefined,
        filterValue: '',
      },
    };
    const derivedData = 'Some text';
    expect(getFilterValue(nameSpace, state)).toEqual(derivedData);
  });

  it('getSortKey()', () => {
    const state = {
      posts: {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: Date.now(),
        posts: [],
        updateId: 2,
        filterValue: 'Some text',
        sortKey: 'title',
        sortDirection: 'asc',
      },
      websites: {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: Date.now(),
        websites: [],
        updateId: undefined,
        filterValue: '',
        sortKey: undefined,
        sortDirection: undefined,
      },
    };
    const derivedData = 'title';
    expect(getSortKey(nameSpace, state)).toEqual(derivedData);
  });

  it('getSortDirection()', () => {
    const state = {
      posts: {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: Date.now(),
        elems: [],
        updateId: 2,
        filterValue: 'Some text',
        sortKey: 'title',
        sortDirection: 'asc',
      },
      websites: {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: Date.now(),
        elems: [],
        updateId: undefined,
        filterValue: '',
        sortKey: undefined,
        sortDirection: undefined,
      },
    };
    const derivedData = 'asc';
    expect(getSortDirection(nameSpace, state)).toEqual(derivedData);
  });

  it('getPagination()', () => {
    const state = {
      posts: {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: Date.now(),
        elems: [],
        pagination: {
          count: 115,
          previous: null,
          page: 1,
          next: 2,
        },
      },
      websites: {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: Date.now(),
        elems: [],
      },
    };
    const derivedData = {
      count: 115,
      previous: null,
      page: 1,
      next: 2,
    };
    expect(getPagination(nameSpace, state)).toEqual(derivedData);
  });


  it('getFilteredElems() -> fetching complete, filterValue = "Ha"', () => {
    const filterValue = 'ha';
    const elems = [
      {
        id: 1,
        filterString: 'alpha',
      },
      {
        id: 2,
        filterString: 'bravo',
      },
      {
        id: 3,
        filterString: 'charlie',
      },
    ];
    const derivedData = [
      {
        id: 1,
        filterString: 'alpha',
      },
      {
        id: 3,
        filterString: 'charlie',
      },
    ];
    expect(getFilteredElems(elems, filterValue)).toEqual(derivedData);
  });

  it('getFilteredElems() -> fetching complete, filterValue = ""', () => {
    const filterValue = '';
    const elems = [
      {
        id: 1,
        filterString: 'alpha',
      },
      {
        id: 2,
        filterString: 'bravo',
      },
      {
        id: 3,
        filterString: 'charlie',
      },
    ];
    const derivedData = [
      {
        id: 1,
        filterString: 'alpha',
      },
      {
        id: 2,
        filterString: 'bravo',
      },
      {
        id: 3,
        filterString: 'charlie',
      },
    ];
    expect(getFilteredElems(elems, filterValue)).toEqual(derivedData);
  });

  it('getFilteredElems() -> fetching complete, No filterString fields in reducer', () => {
    const filterValue = 'ha';
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
    const derivedData = [];
    expect(getFilteredElems(elems, filterValue)).toEqual(derivedData);
  });


  it('getSortedElems() -> No sort required', () => {
    const sortKey = null;
    const sortDirection = null;
    const elems = [
      {
        title: 'Charlie',
      },
      {
        title: 'Bravo',
      },
      {
        title: 'Delta',
      },
      {
        title: 'Alpha',
      },
    ];
    const derivedData = [
      {
        title: 'Charlie',
      },
      {
        title: 'Bravo',
      },
      {
        title: 'Delta',
      },
      {
        title: 'Alpha',
      },
    ];
    expect(getSortedElems(elems, sortKey, sortDirection)).toEqual(derivedData);
  });

  it('getSortedElems() -> Ascending strings', () => {
    const sortKey = 'title';
    const sortDirection = 'asc';
    const elems = [
      {
        title: 'Charlie',
      },
      {
        title: 'Bravo',
      },
      {
        title: 'Delta',
      },
      {
        title: 'Alpha',
      },
    ];
    const derivedData = [
      {
        title: 'Alpha',
      },
      {
        title: 'Bravo',
      },
      {
        title: 'Charlie',
      },
      {
        title: 'Delta',
      },
    ];
    expect(getSortedElems(elems, sortKey, sortDirection)).toEqual(derivedData);
  });

  it('getSortedElems() -> Descending strings', () => {
    const sortKey = 'title';
    const sortDirection = 'desc';
    const elems = [
      {
        title: 'Charlie',
      },
      {
        title: 'Bravo',
      },
      {
        title: 'Delta',
      },
      {
        title: 'Alpha',
      },
    ];
    const derivedData = [
      {
        title: 'Delta',
      },
      {
        title: 'Charlie',
      },
      {
        title: 'Bravo',
      },
      {
        title: 'Alpha',
      },
    ];
    expect(getSortedElems(elems, sortKey, sortDirection)).toEqual(derivedData);
  });

  it('getSortedElems() -> Ascending numbers', () => {
    const sortKey = 'number';
    const sortDirection = 'asc';
    const elems = [
      {
        number: 3,
      },
      {
        number: 1,
      },
      {
        number: 4,
      },
      {
        number: 2,
      },
    ];
    const derivedData = [
      {
        number: 1,
      },
      {
        number: 2,
      },
      {
        number: 3,
      },
      {
        number: 4,
      },
    ];
    expect(getSortedElems(elems, sortKey, sortDirection)).toEqual(derivedData);
  });

  it('getSortedElems() -> Descending numbers', () => {
    const sortKey = 'number';
    const sortDirection = 'desc';
    const elems = [
      {
        number: 3,
      },
      {
        number: 1,
      },
      {
        number: 4,
      },
      {
        number: 2,
      },
    ];
    const derivedData = [
      {
        number: 4,
      },
      {
        number: 3,
      },
      {
        number: 2,
      },
      {
        number: 1,
      },
    ];
    expect(getSortedElems(elems, sortKey, sortDirection)).toEqual(derivedData);
  });

  it('getSortedElems() -> Ascending mixed types', () => {
    const sortKey = 'number';
    const sortDirection = 'asc';
    const elems = [
      {
        id: 3,
        number: 3,
      },
      {
        id: 1,
        number: 1,
      },
      {
        id: 4,
        number: null,
      },
      {
        id: 2,
        number: 2,
      },
    ];
    const derivedData = [
      {
        id: 4,
        number: null,
      },
      {
        id: 1,
        number: 1,
      },
      {
        id: 2,
        number: 2,
      },
      {
        id: 3,
        number: 3,
      },
    ];
    expect(getSortedElems(elems, sortKey, sortDirection)).toEqual(derivedData);
  });

  it('getSortedElems() -> Descending mixed types', () => {
    const sortKey = 'number';
    const sortDirection = 'desc';
    const elems = [
      {
        id: 3,
        number: 3,
      },
      {
        id: 1,
        number: 1,
      },
      {
        id: 4,
        number: null,
      },
      {
        id: 2,
        number: 2,
      },
    ];
    const derivedData = [
      {
        id: 3,
        number: 3,
      },
      {
        id: 2,
        number: 2,
      },
      {
        id: 1,
        number: 1,
      },
      {
        id: 4,
        number: null,
      },
    ];
    expect(getSortedElems(elems, sortKey, sortDirection)).toEqual(derivedData);
  });


  it('getElems() -> fetching complete', () => {
    const stateElems = {
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
      filterValue: '',
      sortKey: null,
      sortDirection: null,
    };
    const derivedData = [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ];
    expect(getElems(stateElems)).toEqual(derivedData);
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
    const stateElems = {
      isFetching: false,
      didInvalidate: false,
      lastUpdated: Date.now(),
      updateId: 2,
      elems: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
      ],
      filterValue: '',
      sortKey: null,
      sortDirection: null,
    };
    const derivedData = {
      id: 2,
    };
    expect(getElemToUpdate(stateElems)).toEqual(derivedData);
  });

  it('getElemToUpdate() -> CREATE (empty object)', () => {
    const stateElems = {
      isFetching: false,
      didInvalidate: false,
      lastUpdated: Date.now(),
      updateId: -1,
      elems: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
      ],
      filterValue: '',
      sortKey: null,
      sortDirection: null,
    };
    const derivedData = {};
    expect(getElemToUpdate(stateElems)).toEqual(derivedData);
  });
});
