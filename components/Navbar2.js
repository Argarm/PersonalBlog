import Link from 'next/link';
import styles from '../styles/components/navbar.module.css';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { t } = useLanguage();
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        <Link href="/">{t.home}</Link>
        <Link href="/blog">{t.blog}</Link>
        <Link href="/projects">{t.projects}</Link>
      </div>
    </nav>
  );
}