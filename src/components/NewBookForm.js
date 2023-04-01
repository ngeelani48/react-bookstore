const NewBookForm = () => (
  <form className="form">
    <input type="text" placeholder="Book title" className="input" />
    <input type="text" placeholder="Author" className="input" />
    <button type="submit" className="form-button">Add Book</button>
  </form>
);

export default NewBookForm;
