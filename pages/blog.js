import Link from 'next/link';
import { useEffect, useState } from 'react';

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
    <div className='container'>
      <h1 className='main-title'>Blog Posts</h1>
      <div className='grid-container'>
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} passHref>
            <div className="blog-card">
            <img src={post.image} alt={post.title} className="blog-card-image" />
            <div className="blog-card-content">
              <span className="blog-card-category">{post.category}</span>
              <p className="blog-card-date">{post.date}</p>
              <h2 className="blog-card-title">{post.title}</h2>
              {/* <p className="blog-card-excerpt">{post.excerpt}</p> */}
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
