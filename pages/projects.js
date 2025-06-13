// pages/projects.js
import styles from '../styles/components/blog.module.css';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>{t.projects}</h1>
      <div style={{marginTop: 32, color: '#b3c0d1', fontSize: '1.2rem'}}>
        <p>Próximamente encontrarás aquí una selección de mis proyectos personales y profesionales destacados.</p>
        <p>¡Vuelve pronto!</p>
      </div>
    </div>
  );
}
