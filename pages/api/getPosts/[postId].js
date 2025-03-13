import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
    const { postId } = req.query;

    if (!postId) {
        return res.status(400).json({ error: 'Page ID is required' });
    }

    try {
        var postUrl = await getPageMetadata(postId);
        console.log('Post URL:', postUrl);
        const blocks = await notion.blocks.children.list({ block_id: postId });
        const paragraphsWithText = blocks.results.filter(block => block.type === 'paragraph' && block.paragraph.rich_text.length > 0);
        
        let plainTexts = [];
        paragraphsWithText.forEach(block => {
            block.paragraph.rich_text.forEach(textObj => {
                if (textObj.plain_text) {
                    plainTexts.push(textObj.plain_text);
                }
            });
        });

        res.status(200).json({ postImgUrl: postUrl, postText: plainTexts });
    } catch (error) {
        console.error('Error fetching Notion page:', error);
        res.status(500).json({ error: 'Error fetching Notion page' });
    }

    async function getPageMetadata(pageId) {
        const page = await notion.pages.retrieve({ page_id: pageId });
        
        // Extract Cover Image URL
        const coverUrl = page.cover 
            ? (page.cover.type === 'external' ? page.cover.external.url : page.cover.file.url) 
            : 'No Cover Found';
    
        console.log('Cover Image URL:', coverUrl);
        return coverUrl;
    }
}
