import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/components/blog.module.css';

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/getPosts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.pages)
      });
  }, []);


  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Blog Posts</h1>
      <div className={styles.gridContainer}>
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} passHref>
            <div className={styles.blogCard}>
            <img src={post.img} alt={post.title} className={styles.blogCardImage} />
            <div className={styles.blogCardContent}>
              <span className={styles.blogCardCategory}>{post.category}</span>
              <p className={styles.blogCardDate}>{post.date}</p>
              <h2 className={styles.blogCardTitle}>{post.title}</h2>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
