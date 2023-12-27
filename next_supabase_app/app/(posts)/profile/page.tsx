"use client";

import { Auth, Typography, Button } from "@supabase/ui";
import { supabase } from "@/api";
import React from "react";

// const Profile = () => {
//   return (
//     <div>
//       <h3 className="text-center text-red-300 mt-6">Profile Page</h3>
//     </div>
//   )
// }



const { Text } = Typography;

type ProfileType = {
  supabaseClient: typeof supabase;
  children: React.ReactNode;
};

const Profile: React.FC<ProfileType> = (props) => {
  const { user } = Auth.useUser();
  if (user)
    return (
      <>
        <Text>Signed in: {user.email}</Text>
        <Button
          block
          onClick={() => props.supabaseClient.auth.signOut()}
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
      <Auth supabaseClient={supabase} />
    </Profile>
  );
}
