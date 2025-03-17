import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import styles from '../../styles/components/postPage.module.css';

export default function PostPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);

    fetch('/api/getPosts')
      .then((res) => {
        if (!res.ok) throw new Error('Error cargando lista de posts');
        return res.json();
      })
      .then((data) => {
        const foundPost = data.pages.find((p) => p.slug === slug);
        if (!foundPost) {
          setError('Post no encontrado');
          setLoading(false);
          return;
        }
        return fetch(`/api/getPosts/${foundPost.id}`)
          .then((res) => {
            if (!res.ok) throw new Error('Error cargando datos del post');
            return res.json();
          })
          .then((postData) => {
            setPost({
              ...foundPost,
              image: postData.postImgUrl,
              content: postData.postText.join(' '),
              wordCount: postData.wordCount
            });
            setLoading(false);
          });
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, [slug]);
  console.log(post);
  if (loading) return <Loading />;
  if (error) return <div className={styles.errorMessage}>{error}</div>;
  if (!post) return <div className={styles.errorMessage}>Post no encontrado</div>;

  return (
    <>
      <div className={styles.gridContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.postDate}>{post.date}</p>
        <div className={styles.imageContainer}>
          <EnhancedImage 
            src={post.image}
            alt={post.title}
            priority
          />
        </div>
        <div className={styles.postContent}>
          <p>{post.content}</p>
        </div>
        <div className={styles.postMeta}>
          <p>{post.wordCount} palabras</p>
        </div>
      </div>
    </>
  );
}