/* eslint-disable no-undef */
import { notionService } from '../../services/notion';
import { formatSlug, sanitizeId } from '../../utils/formatters';
import { validateApiMethod } from '../../utils/apiValidators';

const NOTION_BLOCK_ID = process.env.NOTION_BLOCK_ID;
const CACHE_DURATION = process.env.CACHE_DURATION || 3600000; 

export default async function handler(req, res) {
  if (!validateApiMethod(req, res, 'GET')) return;

  try {
    const response = await notionService.getPages(NOTION_BLOCK_ID);

    const results = await Promise.all(
      response.results
        .filter(block => block.type === 'child_page')
        .map(async post => {
          const id = sanitizeId(post.id);
          const title = post.child_page.title;
          
          return {
            id,
            title,
            slug: formatSlug(title),
            img: await notionService.getPageMetadata(id)
          };
        })
    );

    res.setHeader('Cache-Control', `public, max-age=${CACHE_DURATION / 1000}`);
    res.status(200).json({ pages: results, updated: new Date().toISOString() });
  } catch (error) {
    console.error("Error fetching pages:", error);
    res.status(500).json({ 
      success: false, 
      error: process.env.NODE_ENV === 'production' ? 'Server error' : error.message 
    });
  }
}


export async function getPageMetadata(pageId) {
    const page = await notion.pages.retrieve({ page_id: pageId });
    const coverUrl = page.cover 
        ? (page.cover.type === 'external' ? page.cover.external.url : page.cover.file.url) 
        : 'postWithNoCoverFound.webp';

    return coverUrl;
}
