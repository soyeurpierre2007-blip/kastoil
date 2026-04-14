import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import nodemailer from "nodemailer";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    console.error("Webhook signature invalide:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const shipping = (session as any).shipping_details;
    const name = shipping?.name ?? session.customer_details?.name ?? "Inconnu";
    const address = shipping?.address ?? session.customer_details?.address;
    const phone = session.customer_details?.phone ?? "Non renseigné";
    const email = session.customer_details?.email ?? "Non renseigné";

    const adresseComplete = address
      ? [
          address.line1,
          address.line2,
          `${address.postal_code} ${address.city}`,
          address.state,
          address.country,
        ]
          .filter(Boolean)
          .join(", ")
      : "Non renseignée";

    await transporter.sendMail({
      from: `"Kastoil" <${process.env.GMAIL_USER}>`,
      to: "web.services.fr2026@gmail.com",
      subject: `Nouvelle commande — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0B0E11; color: #D4A017;">
          <h2 style="margin-bottom: 24px; border-bottom: 1px solid rgba(212,160,23,0.3); padding-bottom: 12px;">
            Nouvelle commande Kastoil
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: rgba(212,160,23,0.6); width: 140px;">Nom complet</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: rgba(212,160,23,0.6);">Email</td>
              <td style="padding: 8px 0;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: rgba(212,160,23,0.6);">Téléphone</td>
              <td style="padding: 8px 0;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: rgba(212,160,23,0.6);">Adresse</td>
              <td style="padding: 8px 0;">${adresseComplete}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: rgba(212,160,23,0.6);">Montant</td>
              <td style="padding: 8px 0;">23,99€</td>
            </tr>
          </table>
        </div>
      `,
    });
  }

  return NextResponse.json({ received: true });
}
