import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* <Image src={post.image} alt={post.title} className="w-full h-52 object-cover" /> 
      <div className="p-4">
        <span className="text-purple-600 text-sm font-bold uppercase">{post.category}</span>
        <p className="text-gray-500 text-xs mt-1">{post.date}</p>
        <h2 className="text-lg font-bold text-gray-900 mt-2">
          <Link href={`/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>
        <p className="text-gray-600 text-sm mt-2">{post.excerpt}</p>
      </div> */}
    </div>
  );
}
