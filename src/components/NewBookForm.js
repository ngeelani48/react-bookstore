import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook, postABook } from '../redux/books/booksSlice';

const NewBookForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(addBook({ title, author }));
        dispatch(postABook({ title, author }));
        setAuthor('');
        setTitle('');
      }}
      className="form"
    >

      <input
        placeholder="Book title"
        className="input"
        name="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Author"
        className="input"
        name="author"
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit" className="form-button">Add Book</button>
    </form>
  );
};
export default NewBookForm;
