import Link from 'next/link';
import '../styles/components/Navbar.module.css';

function Navbar() {
  return (
    <nav className="navbar">
    <div className="nav-links">
      <Link href="/">🏠</Link>
      <a href="#">Work</a>
      <Link href="/blog">Blog</Link>
    </div>
  </nav>
  );
}

export default Navbar;