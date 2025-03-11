import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import posts from '../data/Post';
import './PostPage.css';

export default function PostPage() {
  const [pageContent, setPageContent] = useState(null);
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  useEffect(() => {
    const fetchNotionPage = async () => {
        try {
            const response = await fetch(`http://localhost:5000/getPage/${post.id}`);
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            const data = await response.json();
            console.log(data)
            setPageContent(data.pageContent.join(''));
        } catch (error) {
            console.error('Error al obtener la página de Notion:', error);
        }
    };

    if (post?.id) {
        fetchNotionPage();
    }
}, [post?.id]);

  return (
    <div className="post-page">
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} />
      <p>{pageContent}</p>
    </div>
  );
}
