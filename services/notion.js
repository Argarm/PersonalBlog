import { Client } from '@notionhq/client';

export class NotionService {
  constructor() {
    this.client = new Client({ auth: process.env.NOTION_API_KEY });
    this.cache = {};
  }

  async getPages(blockId) {
    const cacheKey = `pages_${blockId}`;
    
    if (this.cache[cacheKey]) {
      return this.cache[cacheKey];
    }

    const response = await this.client.blocks.children.list({
      block_id: blockId,
      page_size: 100,
    });

    this.cache[cacheKey] = response;
    return response;
  }

  async getPageMetadata(pageId) {
    const cacheKey = `meta_${pageId}`;
    
    if (this.cache[cacheKey]) {
      return this.cache[cacheKey];
    }
    
    const page = await this.client.pages.retrieve({ page_id: pageId });
    const coverUrl = page.cover 
      ? (page.cover.type === 'external' ? page.cover.external.url : page.cover.file.url) 
      : '/images/default-cover.webp';
    
    this.cache[cacheKey] = coverUrl;
    return coverUrl;
  }

  async getPageContent(pageId) {
    const cacheKey = `content_${pageId}`;
    
    if (this.cache[cacheKey]) {
      return this.cache[cacheKey];
    }
    
    const blocks = await this.client.blocks.children.list({ block_id: pageId });
    const paragraphsWithText = blocks.results.filter(
      block => block.type === 'paragraph' && block.paragraph.rich_text.length > 0
    );
    
    let plainTexts = [];
    paragraphsWithText.forEach(block => {
      block.paragraph.rich_text.forEach(textObj => {
        if (textObj.plain_text) {
          plainTexts.push(textObj.plain_text);
        }
      });
    });
    
    this.cache[cacheKey] = plainTexts;
    return plainTexts;
  }

  clearCache() {
    this.cache = {};
  }
}

export const notionService = new NotionService();