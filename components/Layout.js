import Navbar from './Navbar';
import ThemeToggle from './ThemeToggle';
import BackToTop from './BackToTop';
import styles from '../styles/components/layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
      {/* <ThemeToggle /> */}
      <BackToTop />
    </>
  );
}