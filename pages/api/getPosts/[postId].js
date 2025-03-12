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

        res.status(200).json(plainTexts);
    } catch (error) {
        console.error('Error fetching Notion page:', error);
        res.status(500).json({ error: 'Error fetching Notion page' });
    }
}
