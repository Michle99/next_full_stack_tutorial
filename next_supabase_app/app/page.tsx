import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Link from "next/link";
import SignOut from "@/components/Auth/SignOut";

export default async function Home() {

  const supabase = createServerComponentClient({ cookies });

  const { data: { user }} = await supabase.auth.getUser();

  if (!user) redirect('/sign-in');

  return (
    <main className="card">
      <h2>Home Page...</h2>
      <code className="highlight">{user.role}</code>
      <Link className="button" href="/profile">
        Go to Profile
      </Link>
      <SignOut/>
    </main>
  );
}
