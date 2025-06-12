export const selectFilterType = (state) => state.filters.type;
export const selectFilterValue = (state) => state.filters.value;
export const selectFilter = (state) => ({
  type: state.filters.type,
  value: state.filters.value,
});
