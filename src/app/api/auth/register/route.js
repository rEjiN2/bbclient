import connect from "@/utils/db";
import { cookies } from 'next/headers'
import { SignJWT } from "jose";
import { NextResponse } from "next/server";
import { getJwtSecretKey } from "@/libs/auth";
import User from "@/models/User";
import bcrypt from 'bcrypt'

export const POST = async (request) => {
    try {
      
      const { credentials } = await request.json();
      
      await connect();
      console.log(credentials);
   
      const user = await User.findOne({ email: credentials.email })
      if (!user) {
     
        const hashedPassword = await bcrypt.hash(credentials.password, 10);

        const newUser = new User({
          name: credentials.username,
          email: credentials.email,
          password: hashedPassword, 
          phone: credentials.phoneNumber,
        });
        try {
          console.log(newUser, "newUser");
          await newUser.save();
          
          return new NextResponse(JSON.stringify({ message: "User Created" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (err) {
          console.error("Error saving newUser:", err);
          return new NextResponse(err.message, {
            status: 500,
          });
        }
      } else {
        return new NextResponse("User already exists", { status: '303' });
      }
    } catch (error) {
      console.error("Error processing request:", error);
      return new NextResponse("Error processing request", {
        status: 500,
      });
    }
};