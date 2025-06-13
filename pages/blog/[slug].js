import styles from '../../styles/components/postPage.module.css';
import EnhancedImage from '../../components/EnhancedImage';
import { notionService } from '../../services/notion';

export default function PostPage({ post, error }) {
  if (error) return <div className={styles.errorMessage}>{error}</div>;
  if (!post) return <div className={styles.errorMessage}>Post no encontrado</div>;

  return (
    <>
      <div className={styles.gridContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.postDate}>{post.date}</p>
        <div className={styles.imageContainer}>
          <EnhancedImage 
            src={post.image}
            alt={post.title}
            priority
          />
        </div>
        <div className={styles.postContent}>
          <p>{post.content}</p>
        </div>
        <div className={styles.postMeta}>
          <p>{post.wordCount} palabras</p>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const NOTION_BLOCK_ID = process.env.NOTION_BLOCK_ID;
  const response = await notionService.getPages(NOTION_BLOCK_ID);
  const paths = response.results
    .filter(block => block.type === 'child_page')
    .map(post => {
      const title = post.child_page.title;
      return {
        params: { slug: title.toLowerCase().replace(/\s+/g, '-') }
      };
    });
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const NOTION_BLOCK_ID = process.env.NOTION_BLOCK_ID;
  const response = await notionService.getPages(NOTION_BLOCK_ID);
  const foundPost = response.results
    .filter(block => block.type === 'child_page')
    .map(post => {
      const id = post.id.replace(/-/g, '');
      const title = post.child_page.title;
      return {
        id,
        title,
        slug: title.toLowerCase().replace(/\s+/g, '-'),
        created_time: post.created_time
      };
    })
    .find(p => p.slug === params.slug);

  if (!foundPost) {
    return {
      props: {
        error: 'Post no encontrado',
        post: null
      }
    };
  }

  const [image, contentArr] = await Promise.all([
    notionService.getPageMetadata(foundPost.id),
    notionService.getPageContent(foundPost.id)
  ]);
  const content = contentArr.join(' ');
  const wordCount = content.split(/\s+/).length;
  return {
    props: {
      post: {
        ...foundPost,
        image,
        content,
        wordCount,
        date: foundPost.created_time ? new Date(foundPost.created_time).toLocaleDateString() : ''
      },
      error: null
    }
  };
}