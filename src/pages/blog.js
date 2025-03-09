import BlogCard from './components/BlogCard';
import posts from '../app/posts';

export default function BlogPage() {
  return (
    <div className="bg-gradient-to-br from-green-900 to-black min-h-screen text-white flex flex-col items-center">
      <nav className="flex space-x-8 p-4">
        <a href="#" className="hover:text-gray-300">About</a>
        <a href="#" className="hover:text-gray-300">Work</a>
        <a href="#" className="hover:text-gray-300">Blog</a>
        <a href="#" className="hover:text-gray-300">Gallery</a>
      </nav>
      <h1 className="text-5xl font-bold mt-10">Writing about design and tech...</h1>

      <div className="container mx-auto px-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Blog Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
    </div>
  );
}
