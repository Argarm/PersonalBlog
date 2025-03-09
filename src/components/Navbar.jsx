import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
    <div className="nav-links">
      <Link to="/">🏠</Link>
      <a href="#">Work</a>
      <Link to="/blog">Blog</Link>
    </div>
  </nav>
  );
}

export default Navbar;