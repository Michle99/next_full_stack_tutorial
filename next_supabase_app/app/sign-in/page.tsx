import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SignIn } from "@supabase/auth-ui-react";


export default async function SignInPage() {
    const supabase = createServerComponentClient({ cookies });
    const { data } = await supabase.auth.getSession();

    if (data?.session) redirect('/');

    // Create a signin component
    return <SignIn supabaseClient={supabase}/>
}