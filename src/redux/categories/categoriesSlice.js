import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: () => ({

      status: 'Under construction',
    }),
  },
});

export default categoriesSlice.reducer;
export const { checkStatus } = categoriesSlice.actions;
