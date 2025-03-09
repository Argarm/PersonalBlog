import BlogCard from '../components/BlogCard';
import posts from '../data/Post';

export default function Blog() {
  return (
    <div className='container'>
      <h1 className='main-title'>Blog Posts</h1>
      <div className='grid-container'>
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
