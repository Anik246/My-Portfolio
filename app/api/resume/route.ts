import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      'public',
      'Shahriar_Rahman__Resume-braintrust.pdf'
    );

    const file = await fs.readFile(filePath);

    return new NextResponse(file, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Shahriar_Rahman_Resume.pdf"',
        'Cache-Control': 'no-store',
      },
    });
  } catch (err) {
    return new NextResponse('Resume not found', { status: 404 });
  }
}
