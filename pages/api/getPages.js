app.get("/getPages", async (req, res) => {
    
  });

export default function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const response = await notion.blocks.children.list({
          block_id: '1b3555bc040580d7b82bd3c9f8181401',
          page_size: 100,
      })
      const results = response.results.filter(block => block.type === 'child_page').map(page => page.id.replace(/-/g, ""));
    res.status.json({pages: results});
    } catch (error) {
      console.error("Error obteniendo las páginas:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}