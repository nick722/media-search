export const SELECT_OPTION = "SELECT_OPTION";
export const RESET_OPTION = "RESET_OPTION";

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
