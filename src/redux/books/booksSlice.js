import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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

export const postABook = createAsyncThunk('book/addBook', async (book) => {
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

export const deleteBook = createAsyncThunk('book/removeBook', async (bookId) => {
  const response = await fetch(`${url}/apps/${id}/books/${bookId}`, {
    method: 'DELETE',
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
  reducers: {
    addBook: (state, action) => {
      const book = {
        item_id: `item${state.books.length + 1}`,
        title: action.payload.title,
        author: action.payload.author,
      };
      state.books.push(book);
    },
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.item_id !== action.payload.id),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const newBooks = Object.entries(action.payload).map((book) => ({
        item_id: book[0],
        ...book[1][0],
      }));

      return { ...state, books: newBooks };
    })
      .addCase(postABook.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.filter((book) => book.item_id !== action.payload);
      });
  },
});

export default bookSlice.reducer;
export const { addBook, removeBook } = bookSlice.actions;
