"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import cn from "classnames";
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';


const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
});

const SignIn = () => {

    const supabase = createClientComponentClient();
    const [errorMsg, setErrorMsg] = useState(null);
}

export default SignIn;
