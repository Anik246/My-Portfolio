import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      'public',
      'resume.pdf'
    );

    const file = await fs.readFile(filePath);

    return new NextResponse(file, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline',
        'Cache-Control': 'no-store',
      },
    });
  } catch (err) {
    return new NextResponse('Resume not found', { status: 404 });
  }
}
