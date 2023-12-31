import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function GET (request: NextRequest) {
    const requestURL = new URL(request.url);
    const code = requestURL.searchParams.get('code');
}