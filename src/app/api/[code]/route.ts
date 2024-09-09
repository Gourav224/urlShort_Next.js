import { NextResponse } from 'next/server';
import connectMongo from '@/lib/mongodb';
import Url from '@/models/Url';

export async function GET(req: Request, { params }: { params: { code: string } }) {
  await connectMongo();

  try {
    const url = await Url.findOne({ urlCode: params.code });

    if (url) {
      return NextResponse.redirect(url.originalUrl);
    } else {
      // Redirect to the custom 404 page
      return NextResponse.redirect('/not-found');
    }
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
