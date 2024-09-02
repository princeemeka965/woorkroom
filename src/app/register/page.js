"use client";

import { Button } from "@material-tailwind/react";
import { useForm, Controller } from 'react-hook-form';
import AuthLayout from "@/components/AuthLayout";
import { useState } from "react";
import Link from "next/link";
import Input from "@/components/Input";
import { validateEmail } from "@/services/api";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { SET_USER_DATA } from "@/reducers/usersSlice";
import { useRouter } from "next/navigation";

export default function Register() {
    const { control, handleSubmit } = useForm();
    const [errorNames, setErrorNames] = useState(false);
    const [errorEmail, setEmailError] = useState(false);
    const [errorPassword, setPasswordError] = useState(false);

    const dispatch = useDispatch();

    const router = useRouter();

    const onSubmit = async (data) => {
        if (data.fullNames === '') {
            setErrorNames(true)
        }
        else {
            setErrorNames(false)
        }

        if (data.email === '') {
            setEmailError(true);
        }
        else {
            setEmailError(false)
        }

        if (data.password === '') {
            setPasswordError(true);
        }
        else {
            setPasswordError(false)
        }

        if (data.fullNames !== '' && data.email !== "" && data.password !== "") {
            const result = await validateEmail({ email: data.email });
            toast.success(result.message);

            if (result.message) {
                const payload = { name: data.fullNames, email: data.email, password: data.password };
                dispatch(SET_USER_DATA(payload));
                router.push('/register/verify-account')
            }
        }
    }

    return (
        <>
            <div className="w-full max-h-screen flex">
                <AuthLayout />

                <form onSubmit={handleSubmit(onSubmit)} className="w-3/5 h-screen px-4 py-10 flex flex-col justify-center">
                    <div className="w-full flex justify-center">
                        <div className="w-1/2 flex flex-col gap-8 py-6">
                            <p className="text-xl font-bold text-center my-3">Sign Up to Woorkroom</p>
                            <Controller
                                name="fullNames"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <Input
                                    {...field}
                                    name="fullNames"
                                    variant="w-full"
                                    type="text"
                                    placeholder="Surname & Firstname"
                                    label="Full name"
                                    labelClass="text-woorkDGrey font-bold"
                                    errors={errorNames}
                                />}
                            />

                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <Input
                                    {...field}
                                    name="email"
                                    variant="w-full"
                                    type="email"
                                    placeholder="youremail@gmail.com"
                                    label="Email Address"
                                    labelClass="text-woorkDGrey font-bold"
                                    errors={errorEmail}
                                />}
                            />

                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <Input
                                    {...field}
                                    name="password"
                                    variant="'w-full'"
                                    type="password"
                                    placeholder="Password"
                                    label="Password"
                                    labelClass="text-woorkDGrey font-bold"
                                    errors={errorPassword}
                                />}
                            />

                            <div className="w-full flex flex-col gap-5">
                                <div className="w-full flex justify-center">
                                    <Button className="bg-woorkBlue p-3 w-1/2 rounded-md"
                                        type="submit"
                                    >
                                        Sign Up
                                    </Button>
                                </div>
                                <div className="flex justify-end w-full gap-1">
                                    <p className="text-base">Already have an account?</p>
                                    <Link href={'/'} className="text-woorkBlue font-semibold text-base text-center cursor-pointer">
                                        Sign in
                                    </Link>
                                </div>
                            </div>
                        </div>
                        </div>
                </form>
            </div>
        </>
    )
}