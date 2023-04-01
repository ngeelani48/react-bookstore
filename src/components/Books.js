import PropTypes from 'prop-types';
import './styles/Books.css';

const Books = () => (
  <div className="books">
    <ul className="booklist">
      <li className="item">
        <Book title="The Vicar of Wakefield" author="Oliver Goldsmith" />
      </li>
      <li className="item">
        <Book title="The Decline and Fall of the Roman Empire:" author="Edward Gibbon" />
      </li>
      <li className="item">
        <Book title="The Merchant of Venice" author="Shakespeare" />
      </li>
    </ul>
    <form className="form">
      <input type="text" placeholder="Book title" className="input" />
      <input type="text" placeholder="Author" className="input" />
      <button type="submit" className="form-button">Add Book</button>
    </form>
  </div>
);
export default Books;

const Book = ({ title, author }) => (
  <div className="book">
    <h2>{title}</h2>
    <p>{author}</p>
    <button type="button" className="remove-button">Remove </button>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
