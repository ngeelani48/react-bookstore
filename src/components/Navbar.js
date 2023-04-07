import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';
import { BsPersonCircle } from 'react-icons/bs';

const Navbar = () => (
  <nav className="nav-bar">
    <h1 className="main-title">Bookstore CMS</h1>
    <ul className="links">
      <li>
        <NavLink exact to="/" activeClassName="active" style={{ textDecoration: 'none' }}>Books</NavLink>
      </li>
      <li>
        <NavLink to="/categories" activeClassName="active" style={{ textDecoration: 'none' }}>Categories</NavLink>
      </li>
    </ul>
    <div className="user">
      <BsPersonCircle />
    </div>
  </nav>
);

export default Navbar;
