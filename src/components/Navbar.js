import { Link, Outlet } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav">
    <h1 className="main-title">Bookstore CMS</h1>
    <ul>
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
    <Outlet />
  </nav>
);

export default Navbar;