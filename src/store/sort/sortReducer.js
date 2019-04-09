import { SELECT_OPTION, RESET_OPTION } from "./sortActions";

const initialState = {
  selectedSortOption: {
    id: "DateNewest",
    value: "Newest Date",
    label: "Newest Date"
  },
  originalSortOption: {
    id: "relevance",
    value: "Relevance",
    label: "Relevance"
  }
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
        selectedSortOption: action.originalSortOption
      };
    default:
      return state;
  }
};
