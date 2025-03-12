import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function PostPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);
  useEffect(() => {
  
    if (!slug) return;
    fetch('/api/getPosts')
      .then((res) => res.json())
      .then((data) => {
        
        const foundPost = data.pages.find((p) => p.slug === slug);
        if (foundPost) {
          fetch(`/api/getPosts/${foundPost.id}`)
            .then((res) => res.json())
            .then((postData) => {
              setPost({
                ...foundPost,
                content: postData.join(' '),
              });
            });
        }
      });
  }, [slug]);

  if (!post) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="container">
      <h1 className="post-title">{post.title}</h1>
      <p className="post-date">{post.date}</p>
      <img src={post.image} alt={post.title} className="post-image" />
      <div className="post-content">
        <p>{post.content}</p>
      </div>
    </div>
  );
}
