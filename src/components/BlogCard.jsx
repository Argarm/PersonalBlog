import React from 'react';
import { Link } from "react-router-dom";
import './BlogCard.css';

export default function BlogCard({ post }) {
  return (
    <div className="blog-card">
      <img src={post.image} alt={post.title} className="blog-card-image" />
      <div className="blog-card-content">
        <span className="blog-card-category">{post.category}</span>
        <p className="blog-card-date">{post.date}</p>
        <h2 className="blog-card-title">
          <Link to={`/blog/${post.slug}`} className="blog-card-link">
            {post.title}
          </Link>
        </h2>
        <p className="blog-card-excerpt">{post.excerpt}</p>
      </div>
    </div>
  );
}
