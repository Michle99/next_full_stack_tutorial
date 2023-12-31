"use client";

import { Typography, Button } from "@supabase/ui";
import { Auth } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import {ThemeSupa} from '@supabase/auth-ui-shared'
import { supabase } from "@/api";
import React from "react";


const { Text } = Typography;

type ProfileType = {
  supabaseClient: typeof supabase;
  children: React.ReactNode;
};

const Profile: React.FC<ProfileType> = (props) => {
  const supabase = useSupabaseClient();
  const session = useSession();
  // const { user } = Auth.useUser();

  if (session)
    return (
      <>
        <Text>Signed in: {session.user.email}</Text>
        <Button
          block
          onClick={() => supabase.auth.signOut()}
          placeholder="Sign Out"
        >
          Sign Out
        </Button>
      </>
    );
  return (
    <>
      {props.children}
      <div>
       <h3 className="text-center text-red-300 mt-6">Profile Page</h3>
      </div>
    </>
    );
};

// export default Profile;

export default function AuthProfile() {
  return (
    <Profile supabaseClient={supabase}>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
      />
    </Profile>
  );
}
