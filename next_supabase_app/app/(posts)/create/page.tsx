// app/(posts)/create/page.tsx
"use client"

import React, { ChangeEvent, useState } from "react";
import { supabase } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuid } from "uuid";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";
import { User } from "@supabase/supabase-js";

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false });
const initialState = { 
    id: "",
    title: "", 
    content: "" 
}

// type UserType = {
//   user: string | null;
// }

type PostType = {
    title: string;
    content: string;
};

const CreatePost: React.FC<PostType> = () => {
    const [post, setPost] = useState(initialState);
    const { title, content } = post;
    const router = useRouter();

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPost((prevPost) => ({
          ...prevPost,
          [e.target.name]: e.target.value,
        }));
    }
    
    const createNewPost = async () => {
      if (!title || !content) return;
        const user: User | null = (await supabase.auth.getUser()).data?.user ?? null;
      if (!user) {
        // Handle the case when user is null
        console.error('User not authenticated');
        return;
      }
      console.log("user data from supabase:", user);

      const id = uuid();
      post.id = id;
      // Check if user.email is defined before using it
      const user_email: string = user.email || '';
      const postData: { title: string; content: string; user_id: string; user_email: string } = {
        title: post.title,
        content: post.content,
        user_id: user.id,
        user_email: user_email,
      };
      const { data, error } = await supabase
        .from('posts')
        .insert([postData])
        .single();

      if (error) {
        console.error('Error creating post:', error);
        return;
      }
      
      if (data) {
        // Check if 'id' is present in data before accessing it
        const postId: string | undefined = data || null;
      
        if (postId) {
          router.push(`/posts/${postId}`);
        } else {
          console.error('Post ID is undefined in the response data');
        }
      } else {
        console.error('No data returned from the database');
      }
    }

    return (
        <div>
            <h1 className="text-3xl font-semibold tracking-wide mt-6">Create new post</h1>
            <input
              onChange={onChange}
              name="title"
              placeholder="Title"
              value={post.title}
              className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
            /> 
            <SimpleMDE
              value={post.content}
              onChange={value => setPost({ ...post, content: value })}
            />
            <button
              type="button"
              className="mb-4 bg-green-600 text-white font-semibold px-8 py-2 rounded-lg"
              onClick={createNewPost}
            >
              Create Post
            </button>
        </div>
    )
}

export default CreatePost;