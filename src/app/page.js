"use client";

import Input from "@/components/Input";
import { Button } from "@material-tailwind/react";
import { useForm, Controller } from 'react-hook-form';
import { useState } from "react";
import Link from "next/link";
import AuthLayout from "@/components/AuthLayout";
import { loginAccount } from "@/services/authentication/api";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { SET_USER_DATA } from "@/reducers/usersSlice";
import { useUser } from "@/helpers/lynchpinValidator";

export default function Home() {
  const { control, handleSubmit } = useForm();
  const [errorEmail, setEmailError] = useState(false);
  const [errorPassword, setPasswordError] = useState(false);

  const dispatch = useDispatch();

  const { user, isToken } = useUser();

  console.log(user);

  const onSubmit = async(data) => {
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

    if (data.password !== '' && data.email !== "") {
      const result = await loginAccount({password: data.password, email: data.email});

      if (result.status) {
        toast.success(result.message);
        localStorage.setItem('lynchpin', result.lynchpin);
        dispatch(SET_USER_DATA(result.userData));
      }
    }

  }
  
  return (
    <div className="w-full max-h-screen flex">
      <AuthLayout />
      <form onSubmit={handleSubmit(onSubmit)} className="w-3/5 h-screen px-4 py-10 flex flex-col justify-center">
        <div className="w-full flex justify-center">
          <div className="w-1/2 flex flex-col gap-8 py-6">
            <p className="text-xl font-bold text-center my-3">Sign In to Woorkroom</p>
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

            <div className="flex w-full justify-between items-center">
              <div className="flex gap-3">
                {/*<CheckBox label="Remember Me" labelStyle="margin-top: -2.3px; color: #7D8592" />*/}
              </div>
              <div className="flex">
                <a className="text-base text-woorkDGrey cursor-pointer">Forgot Password?</a>
              </div>
            </div>

            <div className="w-full flex flex-col gap-5">
              <div className="w-full flex justify-center">
                <Button className="bg-woorkBlue p-3 w-1/2 rounded-md"
                  type="submit"
                >
                  Sign In
                </Button>
              </div>
              <div className="flex justify-end w-full gap-1">
                <p className="text-base">Don't have an account?</p>
                <Link href={'/register'} className="text-woorkBlue font-semibold text-base text-center cursor-pointer">
                  Sign up
                </Link>
              </div>
            </div>

          </div>
        </div>
      </form>
    </div>
  );
}
