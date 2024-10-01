"use client";

import AuthLayout from "@/components/AuthLayout";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function Meeting() {

    const user = useSelector((state) => state.userData.user);
    const router = useRouter();

    if (Object.keys(user).length === 0) {
        router.push('/');
    }

    return (
            <>
                <div className="w-full max-h-screen flex">
                    <AuthLayout />
                    <div className="w-3/5 h-screen px-4 py-10 flex flex-col justify-center">
                        <div className="w-full flex justify-center">
                            <div className="w-1/2 flex flex-col gap-8 py-6">
                                <p className="text-xl font-bold text-center my-3">Welcome to {user.orgDomain}'s meeting room</p>
                                <div className="w-full flex justify-center">
                                    <Link href={'/meeting/create'} className="bg-woorkBlue p-3 w-1/2 rounded-md"
                                    >
                                        Start a meeting
                                    </Link>
                                </div>

                                <div className="w-full flex justify-center">
                                    <div className="w-1/2 border my-7 mx-2" style={{ height: '1px' }} /> <p className="text-xl my-4">OR</p>
                                    <div className="w-1/2 border my-7 mx-2" style={{ height: '1px' }} />
                                </div>

                                <div className="w-full flex justify-center">
                                    <Button className="p-3 w-1/2 rounded-md text-black border"
                                    >
                                        Join a meeting
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}