import { jwtVerify } from "jose";

export function getJwtSecretKey() {
    const secret = process.env.NEXT_PUBLIC_JWT_SECRET_KEY; // Changed to a server-side environment variable
    
    if (!secret) {
        console.log("JWT Secret key is not found");
        throw new Error("JWT Secret key is not found");
    }
    
    return new TextEncoder().encode(secret);
}

export async function verifyJwtToken(token) {
  try {
      if (typeof token !== 'string') {
          throw new Error('Token must be a string');
      }
      console.log("Verifying token:", token); // Log the token

      const secretKey = getJwtSecretKey();
      console.log("Secret Key Length:", secretKey.length); // Log the secret key length for debugging

      const { payload } = await jwtVerify(token, secretKey);
      return payload;
  } catch (error) {
      console.error("Error verifying JWT token:", error);
      return null;
  }
}
