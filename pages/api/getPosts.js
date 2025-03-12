import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

function formatText(text) {
    return text.toLowerCase().replace(/\s+/g, '-');
}

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const response = await notion.blocks.children.list({
            block_id: '1b3555bc040580d7b82bd3c9f8181401',
            page_size: 100,
        });

        const results = response.results
            .filter(block => block.type === 'child_page')
            .map(post => 
                ({
                    id : post.id.replace(/-/g, ""),
                    title : post.child_page.title,
                    slug : formatText(post.child_page.title),
                }));
        res.status(200).json({ pages: results });
    } catch (error) {
        console.error("Error fetching pages:", error);
        res.status(500).json({ success: false, error: error.message });
    }
}
