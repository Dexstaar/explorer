export default function (state = null, action) {
  switch (action.type) {
    case "FETCH_DEPENDENCIES":
      return action.payload;
    case "LOADING_DEPENDENCIES":
      return null;
    case "FETCH_DEPENDENCIES_ERROR":
      return 'ERROR';
    case "FETCH_DEPENDENCIES_NODATA":
      return 'NODATA';
    default:
      return state;
  }
};
