import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  isLoading: true,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      const newState = { ...state };
      newState.categories = action.payload === 'Under construction'
        ? 'Under construction'
        : state.categories;

      return newState;
    },
  },
});

export default categoriesSlice.reducer;
export const { checkStatus } = categoriesSlice.actions;
