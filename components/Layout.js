import Navbar from './Navbar2';
import styles from '../styles/components/layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  );
}