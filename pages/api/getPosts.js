import { Client } from '@notionhq/client';

// eslint-disable-next-line no-undef
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

        const results = await Promise.all(
            response.results
                .filter(block => block.type === 'child_page')
                .map(async post => ({
                    id: post.id.replace(/-/g, ""),
                    title: post.child_page.title,
                    slug: formatText(post.child_page.title),
                    img: await getPageMetadata(post.id.replace(/-/g, ""))
                }))
        );

        console.log(results); // Now this will log the fully resolved array

        res.status(200).json({ pages: results });
    } catch (error) {
        console.error("Error fetching pages:", error);
        res.status(500).json({ success: false, error: error.message });
    }
}


export async function getPageMetadata(pageId) {
    const page = await notion.pages.retrieve({ page_id: pageId });
    const coverUrl = page.cover 
        ? (page.cover.type === 'external' ? page.cover.external.url : page.cover.file.url) 
        : 'postWithNoCoverFound.webp';

    return coverUrl;
}
