import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const POST = async(request)=> {
   
      try {
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          line_items: [
            {
              price_data: {
                currency: "usd",
                product_data: {
                  name: "Sample Product",
                },
                unit_amount: 1000,
              },
              quantity: 1,
            },
          ],
          mode: "payment",
          success_url: 'http://localhost:3000/paymentsuccess',
          cancel_url: `http://localhost:3000/paymentsuccess`,
        });
        return new NextResponse(JSON.stringify({ sessionId: session.id }),{
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        
      } catch (err) {
        return new NextResponse("Error processing request", {
            status: 500,
          });
      }
    
  }
