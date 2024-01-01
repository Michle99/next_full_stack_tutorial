
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";


const Profile = async () => {
  const supabase = createServerComponentClient({ cookies });

  const { data: { user }} = await supabase.auth.getUser();

  if (!user) redirect('/sign-in')

  return (
    <div className="card">
      <h2>User Profile</h2>
      <code className="highlight">{user.email}</code>
      <div className="heading">Last Signed in:</div>
      <code className="highlight">
      {user.last_sign_in_at ? new Date(user.last_sign_in_at).toUTCString() : 'N/A'}
      </code>
      <Link className="button" href="/">
        Go to Home
      </Link>
      {/** SignOut Component */}
    </div>
  );
};

export default Profile;


