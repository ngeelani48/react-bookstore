import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  isLoading: true,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: () => 'Under construction',
  },
});

export default categoriesSlice.reducer;
export const { checkStatus } = categoriesSlice.actions;
