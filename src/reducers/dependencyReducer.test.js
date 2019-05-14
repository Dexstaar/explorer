import dependencyReducer from './dependencyReducer';

describe('dependencyReducer Test', () => {
  const action = { type: null, payload: {content: {}} };

  it('returns initial state', () => {
    expect(dependencyReducer(undefined, action)).toEqual(null);
  });

  const actionFetchDependencies = { type: 'FETCH_DEPENDENCIES', payload: {content: {}} };

  it('returns payload when FETCH_DEPENDENCIES', () => {
    expect(dependencyReducer(undefined, actionFetchDependencies)).toEqual(actionFetchDependencies.payload);
  });

  const actionLoading = { type: 'LOADING_DEPENDENCIES', payload: {content: {}} };

  it('returns null when LOADING_DEPENDENCIES', () => {
    expect(dependencyReducer(undefined, actionLoading)).toEqual(null);
  });

  const actionError = { type: 'FETCH_DEPENDENCIES_ERROR', payload: {content: {}} };

  it('returns null when FETCH_DEPENDENCIES_ERROR', () => {
    expect(dependencyReducer(undefined, actionError)).toEqual('ERROR');
  });

  const actionNoData = { type: 'FETCH_DEPENDENCIES_NODATA', payload: {content: {}} };

  it('returns null when FETCH_DEPENDENCIES_NODATA', () => {
    expect(dependencyReducer(undefined, actionNoData)).toEqual('NODATA');
  });

});
