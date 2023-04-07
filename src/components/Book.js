import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook, deleteBook } from '../redux/books/booksSlice';
import 'react-circular-progressbar/dist/styles.css';
import './styles/Book.css';

const Book = ({
  title, author, category, id,
}) => {
  const dispatch = useDispatch();
  const progress = Math.floor(Math.random() * 100);
  const chapter = Math.floor(Math.random() * 15);
  return (
    <div className="book">
      <div className="info">
        <p className="category">{category}</p>
        <h2 className="title">{title}</h2>
        <p className="author">{author}</p>
        <div className="all-btns">
          <button
            className="btn-action"
            type="button"
            onClick={
              () => {
                dispatch(removeBook({ id }));
                dispatch(deleteBook(id));
              }
            }
          >
            Remove
          </button>
          <span className="separator">|</span>
          <button
            className="btn-action"
            type="button"
            title="Comment"
          >
            Comment
          </button>
          <span className="separator">|</span>
          <button
            className="btn-action"
            type="button"
            title="Edit"
          >
            Edit
          </button>
        </div>
      </div>
      <div className="progress">
        <div className="progressCircle">
          <CircularProgressbar value={progress} />
        </div>
        <div className="progress-percentage">
          <p className="percentage">
            {progress}
            %
          </p>
          <p className="progress-text">Completed</p>
        </div>
        <span className="separator2" />
        <div className="progressInfo">
          <p className="currentChapter">CURRENT CHAPTER</p>
          <p className="chapter">

            CHAPTER
            {' '}
            {chapter}

          </p>
          <button
            className="update-progress"
            type="button"
            title="UPDATE PROGRESS"
          >
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
