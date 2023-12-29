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
  request: NextApiRequest,
  response: NextApiResponse
) => {
  try {
    const { id } = request.query as ApiRouteParams;

    const apiEndpoint = `https://dummyjson.com/posts/${id}`;
    const fetchResponse = await fetch(apiEndpoint, {
      next: { revalidate: 60 },
    });

    if (!fetchResponse.ok) {
      throw new Error("Failed to fetch data");
    }

    const post: PostType = await fetchResponse.json();

    return response.json({ post });
  } catch (error) {
    console.error("Error:", error);

    return response.errored;
  }
};
