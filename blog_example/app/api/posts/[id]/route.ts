/**
 * Retrieves a list of posts from the api dummyjson.
 * @returns {Promise<Object>} A promise that resolves to an object containing 
 * the posts data.
 */


import { NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";


type PostType = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: Array<string>;
  reactions: number;
};

type ApiRouteParams = {
  id: string;
};

export const GET = async (
  req: NextApiRequest,
  { params }: { params: ApiRouteParams }
) => {
  try {
    const { id } = params;

     if (!id) {
      throw new Error("ID parameter is missing");
    }

    const apiEndpoint = `https://dummyjson.com/posts/${id}`;
    const fetchResponse = await fetch(apiEndpoint);

    if (!fetchResponse.ok) {
      throw new Error("Failed to fetch data");
    }

    const post: PostType = await fetchResponse.json();

    return NextResponse.json({ post }, { headers: { 'Access-Control-Allow-Origin': '*' } });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error();
  }
};
