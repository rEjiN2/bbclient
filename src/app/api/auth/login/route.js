import connect from "@/utils/db";
import { cookies } from 'next/headers'
import { SignJWT } from "jose";
import { NextResponse } from "next/server";
import { getJwtSecretKey } from "@/libs/auth";
import User from "@/models/User";
import bcrypt from 'bcrypt'

export const POST = async(request)=>{
    try{
        const {email , password } = await request.json();
         
        await connect();
        const user = await User.findOne({email : email})
        if(user){
            const isPasswordCorrect = await bcrypt.compare(password , user.password)
            if(isPasswordCorrect){
                
              const token = await new SignJWT({
                     id: user._id,
                 })
                .setProtectedHeader({ alg: "HS256" })
                .setIssuedAt() 
                // .setExpirationTime("3000s") 
                .sign(getJwtSecretKey());
            cookies().set({
                name: 'userToken',
                value: token,
                httpOnly: true,
                path: '/',
              })

            const serializedUser = JSON.stringify(user); 
            
            return new NextResponse(serializedUser, { status: 201, headers: { "Content-Type": "application/json" } });
            }else{
                return new NextResponse("Password is Incorrect" , {status:401})
            }
            
            
            return new NextResponse("User Und kutta", { status:200 });
        }
        else
        {
          
            return new NextResponse("coach is not here register now", { status: 404 });

        }
        }catch(error){
        console.error("Error processing request:", error);
        return new NextResponse("Error processing request", {
          status: 500,
        });
    }

}