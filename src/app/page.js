"use client";

import Input from "@/components/Input";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { useForm, Controller } from 'react-hook-form';
import Logo from "@/assets/logo.png";
import Illustration from "@/assets/Illustration.png";
import { useState } from "react";

export default function Home() {
  const { control, handleSubmit } = useForm();
  const [errorEmail, setEmailError] = useState(false);
  const [errorPassword, setPasswordError] = useState(false);

  const onSubmit = (data) => {
    if (data.email === '') {
      setEmailError(true);
    }

    if (data.email === '') {
      setPasswordError(true);
    }
  }

  return (
    <div className="w-full max-h-screen flex">
      <div className="w-2/5 h-screen bg-woorkBlue px-4 flex flex-col justify-center">
        <div className="w-full flex justify-center">
          <div className="w-4/5 flex flex-col gap-12">
            <div className="flex gap-6">
              <Image src={Logo} width={50} height={50} alt="logo" priority />
              <p className="text-white text-3xl flex flex-col justify-center font-bold">Woorkroom</p>
            </div>

            <p className="text-4xl text-white font-bold leading-snug">
              Your place to work <br />
              Plan. Create. Control.
            </p>

            <div className="flex pb-10">
              <Image src={Illustration} width={500} height={373} alt="illustration" priority />
            </div>
          </div>
        </div>
      </div>
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

            <div className="w-full flex justify-center">
              <div className="w-1/2 flex flex-col gap-6">
                <Button className="bg-woorkBlue p-3 rounded-md"
                  type="submit"
                >
                  Sign In
                </Button>
                <p className="text-base font-semibold text-woorkBlue text-center cursor-pointer">Don’t have an account?</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
