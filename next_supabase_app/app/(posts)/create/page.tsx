"use client"

import { useState } from "react";
import { supabase } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuid } from "uuid";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false });
const initialState = { title: "", content: "" }

const CreatePost = () => {

}