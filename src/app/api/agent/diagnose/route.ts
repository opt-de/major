import { NextResponse } from 'next/server';
import { z } from 'zod';
import { diagnose } from '@/lib/agent/mock-agent';

const requestSchema = z.object({
  diagnosticId: z.string(),
  answers: z.record(z.string(), z.string()),
});

export async function POST(request: Request) {
  const input = requestSchema.parse(await request.json());
  return NextResponse.json(diagnose(input));
}
