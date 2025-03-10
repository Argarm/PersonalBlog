import React from 'react';
import { useParams } from 'react-router-dom';
import posts from '../data/Post';
import './PostPage.css';

export default function PostPage() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  console.log(post);
  if (!post) {
    return <h2>Post no encontrado</h2>;
  }

  return (
    <div className="post-page">
      <h1>{post.title}</h1>
      <p><strong>Fecha:</strong> {post.date}</p>
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
    </div>
  );
}
