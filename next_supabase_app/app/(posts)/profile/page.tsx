"use client"

import { Auth, Typography, Button } from "@supabase/ui";
import { supabase } from "@/api";
import React from "react";

const { Text } = Typography;

type ProfileType = {
    supabaseClient: typeof supabase;
    children: React.ReactNode;
}

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
    return <>{props.children}</>
}


export default function AuthProfile () {
    return (
        <Auth.UserContextProvider supabaseClient={supabase}>
         <Profile supabaseClient={supabase}>
           <Auth supabaseClient={supabase} />
         </Profile>
        </Auth.UserContextProvider>
    );
}