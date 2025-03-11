import { useRouter } from 'next/router';
import posts from '../data/Post';

export default function BlogPost({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='container'>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
  };
}
