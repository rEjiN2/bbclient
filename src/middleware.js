import { NextResponse } from 'next/server';
import { verifyJwtToken } from './libs/auth'; 

export async function middleware(req) {
   console.log("hi");
    const token =  req.cookies.get('userToken'); // Assuming the token is sent in the Authorization header
    if (!token) {
        return NextResponse.redirect('http://localhost:3000/login'); // Redirect to login page, for example
    }
  const tokenValue = token.value

    const user = await verifyJwtToken(tokenValue);
    console.log(user);
    if (!user) {
        // Token is invalid or expired
        return NextResponse.redirect('http://localhost:3000/login');
    }

    // Token is valid, proceed with the request
    return NextResponse.next();
}

export const config = {
    matcher: [
      '/bookings',
      
    ]
  }