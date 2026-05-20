import { NextResponse } from 'next/server';
import { z } from 'zod';

const requestSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  feedback: z.string().min(1),
});

export async function POST(request: Request) {
  const input = requestSchema.parse(await request.json());
  return NextResponse.json({
    accepted: true,
    receivedAt: new Date().toISOString(),
    summary: `${input.role} ${input.name} submitted feedback.`,
  });
}
