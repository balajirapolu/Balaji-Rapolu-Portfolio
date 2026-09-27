import { NextResponse } from 'next/server';
import { executeCliCommand } from '@/lib/cli-engine';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const command = body.command;

    if (typeof command !== 'string') {
      return NextResponse.json(
        { error: 'Invalid payload. "command" field must be a string.' },
        { status: 400 }
      );
    }

    const result = executeCliCommand(command);
    return NextResponse.json(result, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { error: 'Server error processing CLI command.', details: err.message },
      { status: 500 }
    );
  }
}
