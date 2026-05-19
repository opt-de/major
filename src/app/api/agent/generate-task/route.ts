import { NextResponse } from 'next/server';
import { z } from 'zod';
import { generateTaskCard } from '@/lib/agent/mock-agent';

const requestSchema = z.object({
  majorId: z.string(),
  jobId: z.string(),
  abilityIds: z.array(z.string()).min(1),
  learnerGoal: z.string().default('学习目标'),
});

export async function POST(request: Request) {
  const input = requestSchema.parse(await request.json());
  return NextResponse.json(generateTaskCard(input));
}
