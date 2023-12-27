"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { supabase } from "@/api";
import { Session, User } from "@supabase/supabase-js";

export default function NavbarLayout() {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async () =>
      checkUser()
    );
    checkUser();
    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  function checkUser() {
    supabase.auth.getSession()
      .then(({ data: { session } }) => {
        setSession(session);
        setUser(session?.user ?? null);
    });
  }

  return (
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
          <span className="mr-6 cursor-pointer">Profile</span>
        </Link>
      </nav>
    </div>
  );
}
