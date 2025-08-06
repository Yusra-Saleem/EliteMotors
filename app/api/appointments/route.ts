import { NextResponse } from 'next/server';
import { insertAppointmentSchema } from '@/shared/schema';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    insertAppointmentSchema.parse(data); // Validate data
    // Here you would normally save the appointment to a database
    // For now, just return the data as confirmation
    return NextResponse.json({ ...data, id: Date.now().toString() }, { status: 201 });
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return NextResponse.json({ message: 'Invalid appointment data', errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ message: 'Failed to create appointment' }, { status: 500 });
  }
}
