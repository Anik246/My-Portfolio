import { readFile } from 'fs/promises';
import path from 'path';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'ictis.pdf');
    const pdfBuffer = await readFile(filePath);

    return new Response(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="ictis.pdf"',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch {
    return new Response('PDF not found', { status: 404 });
  }
}
