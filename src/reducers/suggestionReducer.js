export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_SUGGESSTIONS":
      return action.payload;
    case "LOADING_SUGGESSTIONS":
      return 'loading';
    default:
      return state;
  }
};
