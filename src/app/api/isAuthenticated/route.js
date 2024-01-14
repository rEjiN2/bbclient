import { NextResponse } from "next/server";
import connect from "@/utils/db";
import User from "@/models/User";
import { jwtVerify } from "jose";


export const GET = (request)=>{

try {
    const token =  request.cookies.get('userToken');
    
} catch (error) {
    
}


}