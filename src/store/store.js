import { createStore } from "redux";

const SELECT_OPTION = "SELECT_OPTION";
const RESET_OPTION = "RESET_OPTION";

//Actions
export const selectOption = selectedOption => {
  return {
    type: "SELECT_OPTION",
    selectedSortOption: selectedOption
  };
};

export const resetOption = originalSortOption => {
  return {
    type: "RESET_OPTION",
    selectedSortOption: originalSortOption
  };
};

const initialState = {
  options: [
    { id: "relevance", value: "Relevance", label: "Relevance" },
    { id: "DateNewest", value: "Newest Date", label: "Newest Date" },
    { id: "DateOldest", value: "Oldest Date", label: "Oldest Date" }
  ],
  selectedSortOption: "relevance",
  originalSortOption: "relevance"
};

function reducer(state = initialState, action) {
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
}

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
