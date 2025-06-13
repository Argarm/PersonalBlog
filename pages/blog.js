import Link from 'next/link';
import styles from '../styles/components/blog.module.css';
import { notionService } from '../services/notion';
import EnhancedImage from '../components/EnhancedImage';

export default function Blog({ posts }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Blog Posts</h1>
      <div className={styles.gridContainer}>
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} passHref>
            <div className={styles.blogCard}>
              <EnhancedImage src={post.img} alt={post.title} />
              <div className={styles.blogCardContent}>
                <span className={styles.blogCardCategory}>{post.category}</span>
                <p className={styles.blogCardDate}>{post.date}</p>
                <h2 className={styles.blogCardTitle}>{post.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Obtener el ID del bloque de Notion desde las variables de entorno
  const NOTION_BLOCK_ID = process.env.NOTION_BLOCK_ID;
  const response = await notionService.getPages(NOTION_BLOCK_ID);
  const posts = await Promise.all(
    response.results
      .filter(block => block.type === 'child_page')
      .map(async post => {
        const id = post.id.replace(/-/g, '');
        const title = post.child_page.title;
        // Puedes agregar más campos si los tienes en Notion
        return {
          id,
          title,
          slug: title.toLowerCase().replace(/\s+/g, '-'),
          img: await notionService.getPageMetadata(id),
          category: post.category || '',
          date: post.created_time ? new Date(post.created_time).toLocaleDateString() : ''
        };
      })
  );
  return {
    props: {
      posts
    }
  };
}
