"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import cn from "classnames";
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';

type FormDataType = {
    email: string;
    password: string;
}

const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
});

const SignIn = () => {

    const supabase = createClientComponentClient();
    const [errorMsg, setErrorMsg] = useState<string | null>(null);


    async function signIn(formData: FormDataType) {
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });
    
        if (error) {
          setErrorMsg(error.message);
        }
      }
    
      return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
                <h2 className="text-3xl text-black font-semibold mb-6 text-center">Sign In</h2>
                <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={SignInSchema}
                onSubmit={signIn}
                >
                {({ errors, touched }) => (
                    <Form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                        Email
                        </label>
                        <Field
                        className={cn("mt-1 p-2 w-full border text-black rounded", errors.email && touched.email && "border-red-500")}
                        id="email"
                        name="email"
                        type="email"
                        />
                        {errors.email && touched.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                        Password
                        </label>
                        <Field
                        className={cn("mt-1 p-2 w-full border text-black rounded", errors.password && touched.password && "border-red-500")}
                        id="password"
                        name="password"
                        type="password"
                        />
                        {errors.password && touched.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                    </div>

                    <button
                        className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
                        type="submit"
                    >
                        Sign In
                    </button>
                    </Form>
                )}
                </Formik>

                {errorMsg && <p className="text-red-500 text-xs mt-4">{errorMsg}</p>}

                <div className="mt-4 text-center">
                <Link href="/reset-password" className="text-blue-500">
                    Forgot your password?
                </Link>
                </div>

                <div className="mt-4 text-center">
                <Link href="/sign-up" className="text-blue-500">
                    Don&apos;t have an account? Sign Up.
                </Link>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
