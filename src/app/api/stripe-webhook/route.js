import Bookings from "@/models/Bookings";
import { NextResponse } from "next/server";
import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-11-15",
  });
  

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;


export const POST = async(request)=>{

      const payload = await request.text()
      const signature = request.headers.get("stripe-signature");
      let event;

      try{
        event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);

      }catch(err){
        return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
      }
      if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        const metadata = session.metadata;

        const newBooking = new Bookings({
          name: metadata.username,
          email: metadata.email,
          phone: metadata.phone,
          date: metadata.selectedDate,
          time: metadata.selectedTime,
          package: metadata.courseTitle,
          courseId: metadata.courseId,
          userId:metadata.userId,
        });

        await newBooking.save();

        return new NextResponse(JSON.stringify({ received: true }), { status: 200 });
      }


      return new NextResponse('Event received', { status: 200 });
}




