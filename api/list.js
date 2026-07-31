import { list } from '@vercel/blob';

export default async function handler(request, response) {
  // Configurar CORS
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  try {
    const { blobs } = await list();
    // Devolver la lista ordenada por fecha de creación (de más reciente a más antiguo)
    const sortedBlobs = blobs.sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt));
    return response.status(200).json(sortedBlobs);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}
