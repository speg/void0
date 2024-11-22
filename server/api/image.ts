import fs from 'node:fs/promises'
import path from 'path'
import { defineEventHandler, MIMES, send } from 'h3'

export default defineEventHandler(async (event) => {
  // Get the image path from the query params or body
  const { imagePath } = getQuery(event)

  // You can validate the path here if needed to prevent access to restricted directories
  const filePath = path.resolve('/tmp', Array.isArray(imagePath) ? imagePath[0] : imagePath);  // Replace with your desired base path

  try {
    // Read the file from the file system
    const fileBuffer = await fs.readFile(filePath);

    // Determine the file type (optional, if you need to set a specific MIME type)
    const extname = path.extname(filePath).toLowerCase();
    const mimeType = extname === '.jpg' ? 'image/jpeg' : 'image/png';  // Adjust for other image formats as needed

    // Serve the image
    return send(event, fileBuffer, { type: mimeType });
  } catch (error) {
    // Handle errors (file not found, permission issues, etc.)
    return send(event, { error: 'File not found' }, 404);
  }
})
