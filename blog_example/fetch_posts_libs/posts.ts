/***
 * @endpoint Import endpoint URL for posts
 * @getAllPosts Fetch posts data from endpoint
 * @returns {Promise<Object>} A promise that resolves to an object 
 * containing the posts data, or an error response.
 */

import { endpoint } from "@/utils/endpoint";


export async function getAllPosts() {
    const data = await fetch(`${endpoint}/posts`);
    console.log("post data:", data);
    if (!data.ok) {
        throw new Error("Failed to fetch posts data");
    }
    
    return data.json();
}
