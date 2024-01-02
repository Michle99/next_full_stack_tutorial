import UpdatedPassword from "@/components/Auth/UpdatePassword";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export default async function UpdatePasswordPage () {
    const supabase = createServerComponentClient({ cookies });

    const { data: { session }} = await supabase.auth.getSession();

    if (!session) redirect('/sign-in')

    return <UpdatedPassword/>
}