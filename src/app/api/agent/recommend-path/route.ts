import { NextResponse } from 'next/server';
import { z } from 'zod';
import { recommendPath } from '@/lib/agent/mock-agent';

const requestSchema = z.object({
  majorId: z.string(),
  jobId: z.string(),
  weakAbilityIds: z.array(z.string()).default([]),
  targetLevel: z.string().default('starter'),
});

export async function POST(request: Request) {
  const input = requestSchema.parse(await request.json());
  return NextResponse.json(recommendPath(input));
}
