export function validateApiMethod(req, res, allowedMethod) {
    if (req.method !== allowedMethod) {
      res.setHeader('Allow', [allowedMethod]);
      res.status(405).json({ error: `Method ${req.method} Not Allowed` });
      return false;
    }
    return true;
  }