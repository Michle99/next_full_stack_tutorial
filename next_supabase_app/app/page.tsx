import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Home() {

  const supabase = createServerComponentClient({ cookies });

  const { data: { user }} = await supabase.auth.getUser();

  if (!user) redirect('/sign-in');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3>Home Page...</h3>
    </main>
  );
}
