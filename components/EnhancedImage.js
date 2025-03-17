import { useState } from 'react';
import styles from '../styles/components/enhancedImage.module.css';

export default function EnhancedImage({ src, alt, priority = false }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={styles.imageWrapper}>
      <div className={`${styles.skeleton} ${isLoaded ? styles.loaded : ''}`}></div>
      <img 
        src={src} 
        alt={alt || 'Blog image'} 
        className={`${styles.image} ${isLoaded ? styles.loaded : ''}`}
        onLoad={() => setIsLoaded(true)}
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  );
}