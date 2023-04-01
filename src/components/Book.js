import PropTypes from 'prop-types';

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
export default Book;
