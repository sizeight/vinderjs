import expect from 'expect';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  fetchBusy, fetchSuccess, fetchFailure, fetchElems,
  setUpdateId, updateSuccess, createUpdateElem, deleteElem, setFilterValue, setSortKey,
} from './actions';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


const nameSpace = 'websites'; // nameSpace used for testing

describe('actions -> reduxBaseElem (async)', () => {
  afterEach(() => {
    nock.cleanAll();
  });


  it('fetchElems() -> No queryParams, Success', () => {
    const response = [
      { id: 15 },
      { id: 18 },
    ];
    nock(process.env.API_URL)
      .get(`/api/v1/${nameSpace}/`)
      .reply(200, response);

    const expectedActions = [
      { type: 'websites/FETCH_BUSY' },
      { type: 'websites/FETCH_SUCCESS', elems: response },
    ];
    const store = mockStore({});
    return store.dispatch(fetchElems(nameSpace))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('fetchElems() -> No queryParams, Failure', () => {
    nock(process.env.API_URL)
      .get(`/api/v1/${nameSpace}/`)
      .reply(500, '');

    const expectedActions = [
      { type: 'websites/FETCH_BUSY' },
      { type: 'websites/FETCH_FAILURE' },
    ];
    const store = mockStore({});
    return store.dispatch(fetchElems(nameSpace))
      .then(() => {
        expect(store.getActions()).toMatchObject(expectedActions);
      });
  });


  it('fetchElems() -> With queryParams, Success', () => {
    const nameSpaceAlt = 'posts';
    const queryParams = '?page=10&slug=extra_content';
    const response = [
      { id: 15 },
      { id: 18 },
    ];
    nock(process.env.API_URL)
      .get(`/api/v1/${nameSpaceAlt}/${queryParams}`)
      .reply(200, response);

    const expectedActions = [
      { type: 'posts/FETCH_BUSY' },
      { type: 'posts/FETCH_SUCCESS', elems: response },
    ];
    const store = mockStore({});
    return store.dispatch(fetchElems(nameSpaceAlt, queryParams))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('fetchElems() -> With queryParams, Failure', () => {
    const nameSpaceAlt = 'posts';
    const queryParams = '?page=10&slug=extra_content';
    nock(process.env.API_URL)
      .get(`/api/v1/${nameSpaceAlt}/${queryParams}`)
      .reply(500, '');

    const expectedActions = [
      { type: 'posts/FETCH_BUSY' },
      { type: 'posts/FETCH_FAILURE' },
    ];
    const store = mockStore({});
    return store.dispatch(fetchElems(nameSpaceAlt, queryParams))
      .then(() => {
        expect(store.getActions()).toMatchObject(expectedActions);
      });
  });


  it('fetchElems() -> camelCase nameSPace should be changes to lowercase in API call', () => {
    const camelCaseNameSpace = 'subscriptionTerms';
    const response = [
      { id: 15 },
      { id: 18 },
    ];
    nock(process.env.API_URL)
      .get('/api/v1/subscriptionterms/')
      .reply(200, response);

    const expectedActions = [
      { type: 'subscriptionTerms/FETCH_BUSY' },
      { type: 'subscriptionTerms/FETCH_SUCCESS', elems: response },
    ];
    const store = mockStore({});
    return store.dispatch(fetchElems(camelCaseNameSpace))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });


  it('createUpdateElem() -> CREATE Success', () => {
    const data = { title: 'New website' };
    nock(process.env.API_URL)
      .post(`/api/v1/${nameSpace}/`, data)
      .reply(201, { id: 16 });

    const expectedActions = [
      {
        type: 'websites/UPDATE_SUCCESS',
        id: -1,
        elem: { id: 16 },
      },
    ];
    const store = mockStore({});
    return store.dispatch(createUpdateElem(nameSpace, data))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('createUpdateElem() -> CREATE Failure', () => {
    const data = { title: 'New website' };
    nock(process.env.API_URL)
      .post(`/api/v1/${nameSpace}/`, data)
      .reply(500, {});

    const expectedActions = [];
    const store = mockStore({});
    return store.dispatch(createUpdateElem(nameSpace, data))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });


  it('createUpdateElem() -> UPDATE Success', () => {
    const id = 15;
    const data = { title: 'Changed title' };
    nock(process.env.API_URL)
      .patch(`/api/v1/${nameSpace}/${id}/`, data)
      .reply(200, { id: 15 });

    const expectedActions = [
      {
        type: 'websites/UPDATE_SUCCESS',
        id: 15,
        elem: { id: 15 },
      },
    ];
    const store = mockStore({});
    return store.dispatch(createUpdateElem(nameSpace, data, id))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('createUpdateElem() -> UPDATE Failure', () => {
    const id = 15;
    const data = { title: 'Changed title' };
    nock(process.env.API_URL)
      .patch(`/api/v1/${nameSpace}/${id}/`, data)
      .reply(500, {});

    const expectedActions = [];
    const store = mockStore({});
    return store.dispatch(createUpdateElem(nameSpace, data, 15))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });


  it('createUpdateElem() -> camelCase nameSPace should be changes to lowercase in API call', () => {
    const camelCaseNameSpace = 'subscriptionTerms';
    const data = { title: 'New term' };
    nock(process.env.API_URL)
      .post('/api/v1/subscriptionterms/', data)
      .reply(201, { id: 16 });

    const expectedActions = [
      {
        type: 'subscriptionTerms/UPDATE_SUCCESS',
        id: -1,
        elem: { id: 16 },
      },
    ];
    const store = mockStore({});
    return store.dispatch(createUpdateElem(camelCaseNameSpace, data))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });


  it('deleteElem() -> DELETE Success', () => {
    const id = 15;
    nock(process.env.API_URL)
      .delete(`/api/v1/${nameSpace}/${id}/`)
      .reply(204);

    const expectedActions = [
      {
        type: 'websites/UPDATE_SUCCESS',
        id: 15,
        elem: undefined,
      },
    ];
    const store = mockStore({});
    return store.dispatch(deleteElem(nameSpace, 15))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('deleteElem() -> DELETE Failures', () => {
    const id = 15;
    nock(process.env.API_URL)
      .delete(`/api/v1/${nameSpace}/${id}/`)
      .reply(500, {});

    const expectedActions = [];
    const store = mockStore({});
    return store.dispatch(deleteElem(nameSpace, 15))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });


  it('deleteElem() -> camelCase nameSPace should be changes to lowercase in API call', () => {
    const camelCaseNameSpace = 'subscriptionTerms';
    const id = 15;
    nock(process.env.API_URL)
      .delete(`/api/v1/subscriptionterms/${id}/`)
      .reply(204);

    const expectedActions = [
      {
        type: 'subscriptionTerms/UPDATE_SUCCESS',
        id: 15,
        elem: undefined,
      },
    ];
    const store = mockStore({});
    return store.dispatch(deleteElem(camelCaseNameSpace, 15))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});


describe('actions -> reduxBaseElem', () => {
  it('fetchBusy', () => {
    const expectedAction = {
      type: 'websites/FETCH_BUSY',
    };
    expect(fetchBusy(nameSpace)).toEqual(expectedAction);
  });

  it('fetchSuccess', () => {
    const response = [{ id: 1 }, { id: 2 }];
    const expectedAction = {
      type: 'websites/FETCH_SUCCESS',
      elems: response,
    };
    expect(fetchSuccess(nameSpace, response)).toEqual(expectedAction);
  });

  it('fetchFailure', () => {
    const expectedAction = {
      type: 'websites/FETCH_FAILURE',
    };
    expect(fetchFailure(nameSpace)).toEqual(expectedAction);
  });


  it('setUpdateId() -> 15', () => {
    const id = 15;
    const expectedAction = {
      type: 'websites/SET_UPDATE_ID',
      id,
    };
    expect(setUpdateId(nameSpace, id)).toEqual(expectedAction);
  });

  it('setUpdateId() -> not specified', () => {
    const expectedAction = {
      type: 'websites/SET_UPDATE_ID',
      id: -1,
    };
    expect(setUpdateId(nameSpace)).toEqual(expectedAction);
  });

  it('updateSuccess() -> CREATE', () => {
    const id = -1;
    const elem = { id: 16 };
    const expectedAction = {
      type: 'websites/UPDATE_SUCCESS',
      id,
      elem,
    };
    expect(updateSuccess(nameSpace, id, elem)).toEqual(expectedAction);
  });

  it('updateSuccess() -> UPDATE', () => {
    const id = 15;
    const elem = { id: 15 };
    const expectedAction = {
      type: 'websites/UPDATE_SUCCESS',
      id,
      elem,
    };
    expect(updateSuccess(nameSpace, id, elem)).toEqual(expectedAction);
  });

  it('updateSuccess() -> DELETE', () => {
    const id = 15;
    const expectedAction = {
      type: 'websites/UPDATE_SUCCESS',
      id,
      elem: undefined,
    };
    expect(updateSuccess(nameSpace, id)).toEqual(expectedAction);
  });


  it('setFilterValue() -> Lorem ipsum', () => {
    const value = 'Lorem ipsum';
    const expectedAction = {
      type: 'websites/SET_FILTER_VALUE',
      value,
    };
    expect(setFilterValue(nameSpace, value)).toEqual(expectedAction);
  });

  it('setFilterValue() -> Clear with no value specified', () => {
    const expectedAction = {
      type: 'websites/SET_FILTER_VALUE',
      value: '',
    };
    expect(setFilterValue(nameSpace)).toEqual(expectedAction);
  });

  it('setSortKey() -> title', () => {
    const sortKey = 'title';
    const expectedAction = {
      type: 'websites/SET_SORT_KEY',
      sortKey,
    };
    expect(setSortKey(nameSpace, sortKey)).toEqual(expectedAction);
  });
});
