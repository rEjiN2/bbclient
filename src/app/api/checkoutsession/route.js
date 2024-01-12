import Stripe from "stripe";
import { NextResponse } from "next/server";
import Bookings from "@/models/Bookings";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { bookingDetails, courseDetails,userId } = body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{
        price_data: {
          currency: "usd",
          product_data: {
            name: "Sample Product",
          },
          unit_amount: 1000,
        },
        quantity: 1,
      }],
      mode: "payment",
      success_url: 'http://localhost:3000/paymentsuccess?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3000/payment-cancel',
      metadata: {
        username: bookingDetails.username,
        email: bookingDetails.email,
        phone: bookingDetails.phone,
        selectedDate: bookingDetails.selectedDate,
        selectedTime: bookingDetails.selectedTime,
        courseTitle: courseDetails.title,
        courseId: courseDetails._id.toString(),
        userId:userId.toString()
      }
    });

    return new NextResponse(JSON.stringify({ sessionId: session.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new NextResponse("Error processing request", {
      status: 500,
    });
  }
}



