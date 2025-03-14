import Navbar from './Navbar';
import styles from '../styles/components/layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  );
}