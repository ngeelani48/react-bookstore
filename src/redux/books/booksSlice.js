import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// import uniqid from 'uniqid';

const id = 'Ku6HMfRxobX956gVoTVq';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const initialState = {
  books: [],
};

export const fetchBooks = createAsyncThunk('book/fetchBooks', async () => {
  const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Ku6HMfRxobX956gVoTVq/books');
  const data = await response.json();
  return data;
});

export const addBook = createAsyncThunk('book/addBook', async (book) => {
  const response = await fetch(`${url}/apps/${id}/books`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: Math.random().toString(36).substring(2, 11),
      title: book.title,
      author: book.author,
      category: 'Fiction',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  return data;
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const newBooks = Object.entries(action.payload).map((book) => ({
        item_id: book[0],
        ...book[1][0],
      }));

      return { ...state, books: newBooks };
    })
      .addCase(addBook.fulfilled, (state, action) => {
        state.push(action.payload);
      });
  },
});

export default bookSlice.reducer;
export const { removeBook, addB } = bookSlice.actions;
