"use client";

import { useForm, Controller } from 'react-hook-form';
import AuthLayout from "@/components/AuthLayout";
import { useUser } from "@/helpers/lynchpinValidator";
import { useRouter } from "next/navigation";
import Input from '@/components/Input';
import { useState } from 'react';

export default function Create() {
    const { control, handleSubmit } = useForm();
    const [errorTitle, setTitleError] = useState(false);

    const { user } = useUser();
    const router = useRouter();

    if (!user) {
        router.push('/')
    }

    return (
        <>
            <div className="w-full max-h-screen flex">
                <AuthLayout />
                <form onSubmit={handleSubmit(onSubmit)} className="w-3/5 h-screen px-4 py-10 flex flex-col justify-center">
                    <div className="w-full flex justify-center">
                        <div className="w-1/2 flex flex-col gap-8 py-6">
                            <p className="text-xl font-bold text-center my-3">Start a meeting</p>
                            <Controller
                                name="title"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <Input
                                    {...field}
                                    name="title"
                                    variant="w-full"
                                    type="text"
                                    placeholder="Meeting Title"
                                    label="Meeting Title"
                                    labelClass="text-woorkDGrey font-bold"
                                    errors={errorTitle}
                                />}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}