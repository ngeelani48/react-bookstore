import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook, deleteBook } from '../redux/books/booksSlice';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="book">
      <h2>{title}</h2>
      <p>{author}</p>
      <button
        type="button"
        className="remove-button"
        onClick={() => {
          dispatch(deleteBook(id));
          dispatch(removeBook({ id }));
        }}
      >
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
