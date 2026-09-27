import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Please provide a valid name (at least 2 characters).' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return NextResponse.json(
        { error: 'Please enter a message (at least 5 characters).' },
        { status: 400 }
      );
    }

    // Process & log incoming inquiry securely
    console.log(`[CONTACT INQUIRY RECEIVED] From: ${name} <${email}> | Message: ${message}`);

    return NextResponse.json(
      {
        success: true,
        message: `Thank you, ${name.trim()}! Your message has been received. Balaji will respond to ${email.trim()} shortly.`,
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: 'An error occurred while submitting your message.', details: err.message },
      { status: 500 }
    );
  }
}
