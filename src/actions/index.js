import axios from "axios";

const baseUrl = "https://npm-registry-proxy.glitch.me";

export const loadingSuggestions = () => dispatch => {
  dispatch({
    type: "LOADING_SUGGESSTIONS"
  });
};

export const fetchSuggestions = value => async dispatch => {
  const requestUrl = baseUrl + "/search/suggestions";

  const requestParams = {
    params: {
      q: value
    }
  };

  const response = await axios.get(requestUrl, requestParams);

  dispatch({
    type: "FETCH_SUGGESSTIONS",
    payload: response.data
  });
};

export const fetchDependencies = value => async dispatch => {
  dispatch({
    type: "LOADING_DEPENDENCIES"
  });

  const requestUrl = baseUrl + `/${encodeURIComponent(value)}/latest`;

  let dependencies = [];
  let response = null;

  try {
    response = await axios.get(requestUrl);
  } catch (error) {
    dispatch({
      type: "FETCH_DEPENDENCIES_ERROR"
    });
    return;
  }

  if (response.data.dependencies) {
    // console.log('response.data.dependencies : ', response.data.dependencies);
    dependencies = Object.keys(response.data.dependencies);

    for (const elem of dependencies) {
      const subDependencyUrl = baseUrl + `/${encodeURIComponent(elem)}/latest`;
      
      let responseForSub = null;

      try {
        responseForSub = await axios.get(subDependencyUrl);
      } catch (error) {
        dispatch({
          type: "FETCH_DEPENDENCIES_ERROR"
        });
        return;
      }



  
      if (responseForSub.data.dependencies) {
        let subDependencies = Object.keys(responseForSub.data.dependencies);
  
        for (const subDependency of subDependencies) {
          if (
            !dependencies.find(dependency => {
              return dependency === subDependency;
            })
          )
            dependencies.push(subDependency);
        }
      }
    }
  
    dispatch({
      type: "FETCH_DEPENDENCIES",
      payload: dependencies
    });
  } else {
    // console.log('fetchDependencies | no data');
    dispatch({
      type: "FETCH_DEPENDENCIES_NODATA"
    });

  }
};
