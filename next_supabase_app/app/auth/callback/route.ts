import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function GET (request: NextRequest) {
    const requestURL = new URL(request.url);
    const code = requestURL.searchParams.get('code');

    if (code) {
        const supabase = createRouteHandlerClient({ cookies });
        await supabase.auth.exchangeCodeForSession(code);
    }
    
    // URL to redirect to after sign in process completes
    return NextResponse.redirect(requestURL.origin);
}