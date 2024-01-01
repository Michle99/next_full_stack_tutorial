/**
 * Retrieves a list of posts from the api dummyjson.
 * @returns {Promise<Object>} A promise that resolves to an object containing 
 * the posts data.
 */


import { NextResponse } from "next/server";

export const GET = async () => {
   const response = await fetch("https://dummyjson.com/posts?limit=5", {
    next: { revalidate: 60 },
   });
   const data = await response.json();

   return NextResponse.json(data);
}