import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/components/navbar.module.css';
import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { t } = useLanguage();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return router.pathname === path ? styles.active : '';
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarContent}>
        <div className={styles.logo}>
          <Link href="/">
            <span>AG</span>
          </Link>
        </div>
        
        <div className={styles.navLinks}>
          <Link href="/" className={isActive('/')}>
            {t.home}
          </Link>
          <Link href="/blog" className={isActive('/blog')}>
            {t.blog}
          </Link>
          <Link href="/projects" className={isActive('/projects')}>
            {t.projects}
          </Link>
        </div>
      </div>
    </nav>
  );
}