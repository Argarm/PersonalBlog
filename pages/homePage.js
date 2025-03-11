import React from 'react';
import styles from '../styles/components/homePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.profileWrapper}> {/* Adjust the margin-top to bring it closer to the navbar */}
        <div className={styles.profileImageSection}>
          <div className={styles.profileImage}>
            <img
              src='/avatar.jpeg'
              alt="Profile"
            />
          </div>
          <div className={styles.profileLocation}>
            <p>📍 Canary Islands, Spain</p>
          </div>
          <div className={styles.languageButtons}>
            <button>English</button>
            <button>Spanish</button>
          </div>
        </div>

        <div className={styles.profileContent}>
          <h1 className={styles.profileName}>Aarón García</h1>
          <p className={styles.profileTitle}>Software Engineer</p>

          <div className={styles.socialButtons}>
            <button className={styles.socialButton}>🐙 GitHub</button>
            <button className={styles.socialButton}>💼 LinkedIn</button>
            <button className={styles.socialButton}>✉️ Email</button>
          </div>
        </div>
      </div>
      <p className={styles.profileDescription}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit eget, varius bibendum risus pharetra sollicitudin suscipit himenaeos, fermentum mi dictumst feugiat rutrum felis cubilia. Nostra convallis mattis nascetur cum pretium montes ridiculus duis tellus, mauris congue gravida curae nullam sociis quisque augue taciti, sociosqu magna fames netus non blandit feugiat aliquam. Suspendisse metus in dapibus ut nam augue potenti fames fusce, aenean bibendum sodales magna commodo egestas tempor eget suscipit taciti, curae iaculis mattis pretium pellentesque luctus pharetra tempus.
      </p>
    </>
  );
}