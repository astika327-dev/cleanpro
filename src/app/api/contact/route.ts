import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Simulate processing the form data (e.g., sending an email, saving to a database)
    console.log('Received contact form submission:');
    console.log({ name, email, phone, service, message });

    // Basic validation on the server side
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Simulate a successful submission
    return NextResponse.json({ message: 'Form submitted successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
