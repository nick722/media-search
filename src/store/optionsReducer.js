import {
  FETCH_OPTIONS_BEGIN,
  FETCH_OPTIONS_SUCCESS,
  FETCH_OPTIONS_FAILURE
} from "./optionsActions";

const initialState = {
  options: [],
  loading: false,
  error: null
};

export default function optionsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_OPTIONS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_OPTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        options: action.payload.options
      };

    case FETCH_OPTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        options: []
      };
    default:
      return state;
  }
}
