import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  isLoading: true,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      const newState = { ...state };
      newState.books = state.books.filter((book) => book.id !== bookId);
      return newState;
    },
  },
});

export default bookSlice.reducer;
export const { addBook, reducer } = bookSlice.actions;
