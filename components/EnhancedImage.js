import { useState } from 'react';
import Image from 'next/image';
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
        fill
        sizes="(max-width: 850px) 100vw, 850px"
        priority={priority}
        onLoad={() => setIsLoaded(true)}
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}