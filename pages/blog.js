import posts from './data/Post';
import '../components/BlogCard';
import BlogCard from '../components/BlogCard';
import Link from 'next/link';

export default function Blog() {
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
