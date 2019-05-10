import axios from "axios";

const baseUrl = "https://npm-registry-proxy.glitch.me";

export const loadingSuggestions = () => dispatch => {
  dispatch({
    type: "LOADING_SUGGESSTIONS"
  });
};


export const fetchSuggestions = term => async dispatch => {
  const requestUrl = baseUrl + "/search/suggestions";

  const requestParams = {
    params: {
      q: term
    }
  };

  const response = await axios.get(requestUrl, requestParams);

  dispatch({
    type: "FETCH_SUGGESSTIONS",
    payload: response.data
  });
};
