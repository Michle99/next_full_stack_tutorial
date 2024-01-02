"use client";

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import cn from 'classnames';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import * as Yup from "yup";

type FormDataType = {
    password: string;
}

const UpdatePasswordSchema = Yup.object().shape({
    password: Yup.string().required('Required'),
});

const UpdatedPassword = () => {
    const supabase = createClientComponentClient();
    const router = useRouter();
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    async function updatePassword(formData: FormDataType) {
        const { error } = await supabase.auth.updateUser({
            password: formData.password,
        });

        if (error) {
            setErrorMsg(error.message);
        } else {
            router.replace('/');
        }
    }


    return (
      <div className="card">
        <h2 className="w-full text-center">Update Password</h2>
        <Formik
          initialValues={{
            password: '',
          }}
          validationSchema={UpdatePasswordSchema}
          onSubmit={updatePassword}
        >
          {({ errors, touched }) => (
            <Form className="column w-2/4">
              <label htmlFor='email'>New Password</label>
              <Field
                className={cn('input', errors.password && touched.password && 'bg-red-400')}
                id="password"
                name="password"
                type="password"
              />
              {errors.password && touched.password ? (
                <div className="text-red-600">{errors.password}</div>
              ) : null}
              <button className="button-inverse w-2/4" type="submit">
                Update Password
              </button>
            </Form>
          )}
        </Formik>
        {errorMsg && <div className="text-red-600">{errorMsg}</div>}
      </div>
    );
}

export default UpdatedPassword;