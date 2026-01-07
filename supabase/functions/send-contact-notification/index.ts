import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactNotificationRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactNotificationRequest = await req.json();

    console.log("Sending contact notification for:", { name, email });

    // Send notification to site owner
    const ownerEmail = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["mahmoudalmoselhy@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #333; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">New Contact Form Submission</h1>
          
          <div style="background: #f8fafc; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h2 style="color: #6366f1; margin-top: 0;">Contact Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone.replace(/\s/g, '')}">${phone}</a></p>
          </div>
          
          <div style="background: #f8fafc; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h2 style="color: #6366f1; margin-top: 0;">Message</h2>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #64748b; font-size: 12px; margin-top: 30px;">
            This message was sent via your portfolio contact form.
          </p>
        </div>
      `,
    });

    console.log("Owner notification sent:", ownerEmail);

    // Send confirmation to the person who submitted the form
    const confirmationEmail = await resend.emails.send({
      from: "Mahmoud AlMoselhy <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for reaching out!",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #333;">Thank you, ${name}!</h1>
          
          <p style="color: #4b5563; line-height: 1.6;">
            I've received your message and will get back to you as soon as possible.
          </p>
          
          <div style="background: #f8fafc; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h3 style="color: #6366f1; margin-top: 0;">Your Message</h3>
            <p style="color: #4b5563; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #4b5563; line-height: 1.6;">
            In the meantime, feel free to connect with me on <a href="https://linkedin.com/in/mahmoudalmoselhy" style="color: #6366f1;">LinkedIn</a>.
          </p>
          
          <p style="color: #4b5563; line-height: 1.6;">
            Best regards,<br>
            <strong>Mahmoud AlMoselhy</strong><br>
            Content Strategist & SEO Expert
          </p>
        </div>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmail);

    return new Response(
      JSON.stringify({ success: true, ownerEmail, confirmationEmail }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
