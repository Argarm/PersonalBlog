import React from 'react';
import { useParams } from 'react-router-dom';
import posts from '../data/Post';

export default function PostPage() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <h2>Post no encontrado</h2>;
  }

  return (
    <div className="post-page">
      <h1>{post.title}</h1>
      <p><strong>Categoría:</strong> {post.category}</p>
      <p><strong>Fecha:</strong> {post.date}</p>
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
    </div>
  );
}
