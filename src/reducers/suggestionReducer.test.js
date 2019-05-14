import suggestionReducer from './suggestionReducer';

describe('suggestionReducer Test', () => {
  const action = { type: null, payload: {content: {}} };

  it('returns initial state', () => {
    expect(suggestionReducer(undefined, action)).toEqual([]);
  });

  const actionFetch = { type: 'FETCH_SUGGESSTIONS', payload: {content: {}} };

  it('returns payload when FETCH_SUGGESSTIONS', () => {
    expect(suggestionReducer(undefined, actionFetch)).toEqual(actionFetch.payload);
  });

  const actionLoading = { type: 'LOADING_SUGGESSTIONS', payload: {content: {}} };

  it('returns null when LOADING_SUGGESSTIONS', () => {
    expect(suggestionReducer(undefined, actionLoading)).toEqual('loading');
  });
});
