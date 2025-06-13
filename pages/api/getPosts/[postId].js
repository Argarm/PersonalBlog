import { notionService } from '../../../services/notion';
import { validateApiMethod } from '../../../utils/apiValidators';

export default async function handler(req, res) {
  if (!validateApiMethod(req, res, 'GET')) return;
  
  const { postId } = req.query;

  if (!postId || !/^[a-zA-Z0-9]+$/.test(postId)) {
    return res.status(400).json({ error: 'Invalid post ID' });
  }

  try {
    const [postImgUrl, postText] = await Promise.all([
      notionService.getPageMetadata(postId),
      notionService.getPageContent(postId)
    ]);

    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.status(200).json({ 
      postId,
      postImgUrl, 
      postText,
      wordCount: postText.join(' ').split(/\s+/).length
    });
  } catch (error) {
    console.error('Error fetching Notion page:', error);
    res.status(error.status || 500).json({ 
      error: process.env.NODE_ENV === 'production' ? 'Error fetching data' : error.message 
    });
  }
}
