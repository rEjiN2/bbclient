import { NextResponse } from 'next/server';
import { verifyJwtToken } from './libs/auth'; 

export async function middleware(req) {
    const url = req.nextUrl.clone()
    console.log(url.pathname,"url"); 
    const token =  req.cookies.get('userToken'); 


    if(token){
      const tokenValue = token.value
      const user = await verifyJwtToken(tokenValue);
      
      if (!user) {  
          return NextResponse.redirect('http://localhost:3000/login');
      }

      if (url.pathname === '/login' || url.pathname === '/register') {
        return NextResponse.redirect('http://localhost:3000');
    }
  
      return NextResponse.next();
    }else{
      
      if (url.pathname === '/login' || url.pathname === '/register') {
        return NextResponse.next();
    }
      return NextResponse.redirect('http://localhost:3000/login');
    }
  
}

export const config = {
    matcher: [
      
      '/login',
      '/register'
    ]
  }