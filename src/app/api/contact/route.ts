import { NextResponse } from "next/server";
import { services } from "../../../config/site";

type ContactPayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  requirementType?: unknown;
  message?: unknown;
  website?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?(?:[0-9]| |\(|\)|-){10,20}$/;
const serviceNames = new Set<string>(services.map(({ title }) => title));

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    const body: unknown = await request.json();
    if (typeof body !== "object" || body === null || Array.isArray(body)) {
      return NextResponse.json({ message: "Please submit a valid form." }, { status: 400 });
    }
    payload = body as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Please submit a valid form." }, { status: 400 });
  }

  if (typeof payload.website === "string" && payload.website.trim()) {
    return NextResponse.json({ message: "Thanks. Your request has been received." });
  }

  const { name, phone, email, requirementType, message } = payload;
  if (
    typeof name !== "string" || name.trim().length < 2 || name.length > 100 ||
    typeof phone !== "string" || !phonePattern.test(phone) ||
    typeof email !== "string" || email.length > 254 || !emailPattern.test(email) ||
    typeof requirementType !== "string" || !serviceNames.has(requirementType) ||
    typeof message !== "string" || message.trim().length < 10 || message.length > 5000
  ) {
    return NextResponse.json({ message: "Check the form fields and try again." }, { status: 400 });
  }

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;
  if (!serviceId || !templateId || !publicKey || !privateKey) {
    console.error("Contact email delivery is not configured: EmailJS service, template, public, and private keys are required.");
    return NextResponse.json({ message: "The contact form is temporarily unavailable. Please try again later." }, { status: 503 });
  }

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey,
        template_params: {
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          requirementType,
          message: message.trim(),
        },
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error("EmailJS contact email request failed.", response.status, details);
      return NextResponse.json({ message: "We couldn't send your request. Please try again later." }, { status: 502 });
    }
  } catch (error) {
    console.error("EmailJS contact email request could not reach the service.", error);
    return NextResponse.json({ message: "We couldn't send your request. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ message: "Thanks. Your request has been received." });
}
