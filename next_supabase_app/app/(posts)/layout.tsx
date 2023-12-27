"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { supabase } from "@/api";
import { User } from "@supabase/supabase-js";

export type PostLayoutTypes = {
  children: React.ReactNode;
};

export default function PostLayout({ children }: PostLayoutTypes) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const { data: autthListener } = supabase.auth.onAuthStateChange(async () =>
      checkUser()
    );
    checkUser();
    return () => {
      autthListener?.subscription.unsubscribe();
    };
  }, []);

  async function checkUser() {
    await supabase.auth.getUser().then(({ data: { user } }) => setUser(user));
  }

  return (
    <html lang="en">
      <body>
        <div>
          <nav className="p-6 border-b border-gray-300">
            <Link href="/">
              <span className="mr-6 cursor-pointer">Home</span>
            </Link>
            {user && (
              <Link href="/create-post">
                <span className="mr-6 cursor-pointer">Create Post</span>
              </Link>
            )}
            <Link href="/profile">
              <span className="mr-6 cursor-pointer p-10">Profile</span>
            </Link>
          </nav>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
