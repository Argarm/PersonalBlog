import '../components/BlogCard';
import BlogCard from '../components/BlogCard';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/getPosts')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.pages);
        setPosts(data.pages)});
  }, []);


  return (
    <div className='container'>
      <h1 className='main-title'>Blog Posts</h1>
      <div className='grid-container'>
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} passHref>
          <BlogCard post={post} />
        </Link>
        ))}
      </div>
    </div>
  );
}
