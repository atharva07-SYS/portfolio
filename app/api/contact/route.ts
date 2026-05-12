import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '@/lib/supabase';
 
 export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  console.log('--- Contact API Triggered ---');
  const apiKey = process.env.RESEND_API_KEY?.trim();
  console.log('API Key present:', !!apiKey);

  const resend = new Resend(apiKey || "re_test_key");

  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    if (supabase) {
      const { error: dbError } = await supabase
        .from('contacts')
        .insert([{ name, email, subject, message }]);

      if (dbError) {
        console.error('Supabase Error:', dbError);
        // Continue even if DB fails, so email still sends
      }
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Use verified domain in production
      to: ['the.real.atharva@gmail.com'], // The email where you want to receive messages
      replyTo: email,
      subject: `New Contact Request: ${subject}`,
      html: `
        <div>
          <h1>New message from ${name}</h1>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <h2>Message:</h2>
          <p>${message.replace(/\n/g, '<br />')}</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error Details:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
