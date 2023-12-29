/***
 * @endpoint Import endpoint URL for posts
 * @getAllPosts Fetch posts data from endpoint
 * @returns {Promise<Object>} A promise that resolves to an object 
 * containing the posts data, or an error response.
 */

import { endpoint } from "@/utils/endpoint";

type PostId = string;

export async function getAllPosts() {
    const data = await fetch(`${endpoint}/posts`);
    
    if (!data.ok) {
        throw new Error("Failed to fetch posts data");
    }
    
    return data.json();
}


export async function getSinglePost(id:PostId) {
    try {
        const postResponse = await fetch(`${endpoint}/posts/${id}`)

        if (!postResponse.ok) {
            throw new Error(`Error fetching post: ${postResponse.statusText}`);
        }
        const post = await postResponse.json();
        console.log("Post data by ID from getSinglePost fn:", post)
        return post;
    } catch (error) {
        console.error("Error fetching post:", error)
        throw error;
    }
}