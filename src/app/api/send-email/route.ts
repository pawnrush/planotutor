import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// This function handles POST requests to /api/send-email
export async function POST(req: NextRequest) {
  try {
    // Parse the request body to get the form data
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // Use Resend to send the email
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Required by Resend, can be this default
      to: ['info@planotutor.net'], // Your email address here
      subject: `New Inquiry from ${name} - The Plano Tutor`,
      replyTo: email, // CORRECTED: Changed 'reply_to' to 'replyTo' (camelCase)
      // Use HTML for a nicely formatted email body
      html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service of Interest:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // If there's an error with Resend, return an error response
    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
    }

    // If successful, return a success response
    return NextResponse.json({ message: 'Email sent successfully!', data }, { status: 200 });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
