import React from 'react';
import styles from '../styles/components/loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p>Cargando contenido...</p>
    </div>
  );
}