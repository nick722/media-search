import { SELECT_OPTION, RESET_OPTION } from "./sortActions";

const initialState = {
  selectedSortOption: "relevance",
  originalSortOption: "relevance"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_OPTION:
      return {
        ...state,
        selectedSortOption: action.selectedSortOption
      };
    case RESET_OPTION:
      return {
        ...state,
        selectedSortOption: action.selectedSortOption
      };
    default:
      return state;
  }
};
