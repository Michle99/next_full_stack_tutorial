// "use client"

import React, { createContext, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export const AuthContext = createContext<any>(null);

type AuthProviderProps = {
    accessToken: string | null;
    children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ accessToken, children }) => {
    const supabase = createClientComponentClient();
    const router = useRouter();

    useEffect(() => {
        const {
            data: { subscription: authListener},
        } = supabase.auth.onAuthStateChange((event: any, session: any) => {
            if (session?.access_token !== accessToken) {
                router.refresh();
            }
        });

        return () => {
            authListener?.unsubscribe();
        };
    }, [accessToken, supabase, router]);

    return children;

}

export default AuthProvider;
