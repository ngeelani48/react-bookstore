import { useSelector } from 'react-redux';
import Book from './Book';
import NewBookForm from './NewBookForm';
import './styles/Books.css';

const Books = () => {
  const { books } = useSelector((state) => state.books);
  return (
    <div className="books">
      <ul className="booklist">
        {books.map((book) => (
          <li className="item" key={book.item_id}>
            <Book title={book.title} author={book.author} />
          </li>
        ))}
      </ul>
      <NewBookForm />
    </div>
  );
};
export default Books;
