import connectMongo from '@/lib/mongodb';
import Url from '@/models/Url';
import { NextResponse } from 'next/server';
import shortid from 'shortid';
import validUrl from 'valid-url';

const baseUrl = process.env.BASE_URL || 'http://localhost:3000';

export async function POST(req: Request) {
  await connectMongo();
  const { originalUrl } = await req.json();

  if (!validUrl.isUri(baseUrl)) {
    return NextResponse.json({ error: 'Invalid base URL' }, { status: 401 });
  }

  const urlCode = shortid.generate();

  if (validUrl.isUri(originalUrl)) {
    try {
      let url = await Url.findOne({ originalUrl });

      if (url) {
        return NextResponse.json(url);
      } else {
        const shortUrl = `${baseUrl}/api/${urlCode}`;
        console.log(shortUrl)
        const newUrl = new Url({ originalUrl, shortUrl, urlCode });
        await newUrl.save();
        return NextResponse.json(newUrl);
      }
    } catch (error) {
      return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
  } else {
    return NextResponse.json({ error: 'Invalid original URL' }, { status: 401 });
  }
}
