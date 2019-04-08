import axios from "../axios-media-search";

export const FETCH_OPTIONS_BEGIN = "FETCH_OPTIONS_BEGIN";
export const FETCH_OPTIONS_SUCCESS = "FETCH_OPTIONS_SUCCESS";
export const FETCH_OPTIONS_FAILURE = "FETCH_OPTIONS_FAILURE";

export const fetchOptionsBegin = () => ({
  type: FETCH_OPTIONS_BEGIN
});

export const fetchOptionsSuccess = items => ({
  type: FETCH_OPTIONS_SUCCESS,
  payload: { items }
});

export const fetchOptionsFailure = error => ({
  type: FETCH_OPTIONS_FAILURE,
  payload: { error }
});

export function fetchOptions() {
  return dispatch => {
    dispatch(fetchOptionsBegin());
    return axios
      .get("options.json")
      .then(response => {
        dispatch(fetchOptionsSuccess(response));
        return response;
      })
      .catch(error => dispatch(fetchOptionsFailure(error)));
  };
}
