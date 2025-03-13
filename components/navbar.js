import Link from 'next/link';
import styles from '../styles/components/navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
    <div className={styles.navLinks}>
      <Link href="/">🏠</Link>
      <a href="#">Work</a>
      <Link href="/blog">Blog</Link>
    </div>
  </nav>
  );
}

export default Navbar;