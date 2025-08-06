import { NextResponse } from 'next/server';
import { carModels } from '@/data/cars';

export async function GET() {
  return NextResponse.json(carModels);
}
