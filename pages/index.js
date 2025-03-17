import React from 'react';
import styles from '../styles/components/homePage.module.css';
import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';

export default function Home() {
  const { t, language, setLanguage } = useLanguage();
  return (
    <>
    <div className={styles.profileWrapper}>
      <div className={styles.profileImageSection}>
        <div className={styles.profileImage}>
          <img
            src='/avatar.jpeg'
            alt="Perfil de Aarón García"
            className={styles.profileImg}
          />
        </div>
        <div className={styles.profileLocation}>
          <p>{t.location}</p>
        </div>
        <div className={styles.languageButtons}>
          <button 
            onClick={() => setLanguage('en')}
            className={language === 'en' ? styles.activeLanguage : ''}
          >
            English
          </button>
          <button 
            onClick={() => setLanguage('es')}
            className={language === 'es' ? styles.activeLanguage : ''}
          >
            Español
          </button>
        </div>
      </div>

      <div className={styles.profileContent}>
        <h1 className={styles.profileName}>Aarón García</h1>
        <p className={styles.profileTitle}>{t.jobTitle}</p>

        <div className={styles.socialButtons}>
          <a href="https://github.com/argarm" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>🐙 GitHub</a>
          <a href="https://www.linkedin.com/in/aaron-garcia-a853b2163/" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>💼 LinkedIn</a>
          <a href="mailto:aarongrmrr@gmail.com" className={styles.socialButton}>✉️ Email</a>
        </div>
      </div>
    </div>
    <p className={styles.profileDescription}>
      {t.profileDescription}
    </p>
  </>
  );
}
