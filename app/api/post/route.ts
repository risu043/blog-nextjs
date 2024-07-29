import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const res = await fetch(
    `https://hyperform.jp/api/async/${process.env.HYPERFORM_API}/complete`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  );
  const data = await res.json();
  return Response.json(data);
}
