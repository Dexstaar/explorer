import dependencyReducer from './dependencyReducer';

describe('dependencyReducer Test', () => {
  it('should return the initial state', () => {
    expect(dependencyReducer(undefined, {})).toEqual(null);
  });

//   it('should fetch daily', () => {
//     expect(
//       DailyReducer(undefined, {
//         type: 'FETCH_DAILY',
//         payload: { content: {} },
//       }),
//     ).toHaveProperty('all', { content: {} });
//   });
});
