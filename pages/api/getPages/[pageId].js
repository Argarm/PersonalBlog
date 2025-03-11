export default function handler(req, res) {
    const { pageId } = req.query;
    const page = `contenido de la página ${pageId}`;
  
    if (!page) {
      return res.status(404).json({ message: 'Página no encontrada' });
    }
  
    res.status(200).json(page);
  }