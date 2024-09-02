"use client";

import AuthLayout from "@/components/AuthLayout";
import { createAccount, verifyOTP } from "@/services/api";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function VerifyAccount() {
    const [otp, setOtp] = useState('');
    const userDetails = useSelector((state) => state.userData);

    const router = useRouter();

    const handleSubmit = async () => {
        const response = await verifyOTP({ email: userDetails.user.email, token: otp });

        if (response.status === 200) {
            const account_creation = await createAccount(userDetails.user);

            if (account_creation.status === 200) {
                toast.success(account_creation.message);
               // router.push('/dashboard')
            }
            else {
                toast.error(account_creation.response.data.message)
            }
        }
        else {
            toast.error(response.response.data.message)
        }
    };

    console.log(userDetails.user)

    return (
        <>
            <div className="w-full max-h-screen flex">
                <AuthLayout />
                <div className="w-3/5 h-screen px-4 py-10 flex flex-col justify-center">
                    <div className="w-full flex justify-center">
                        <div className="w-1/2 flex flex-col gap-8 py-6">
                            <p className="text-xl font-bold text-center my-3">Verify your Woorkroom account</p>
                            <div className="w-full flex justify-center">
                                <OTPInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={4}
                                    renderSeparator={<span>-</span>}
                                    renderInput={(props) => <input {...props} className="otp-input" />}
                                />
                            </div>
                            <div className="w-full flex flex-col my-3">
                                <div className="w-full flex justify-center">
                                    <Button className="bg-woorkBlue p-3 w-1/2 rounded-md"
                                        type="submit"
                                        onClick={handleSubmit}
                                    >
                                        Verify Account
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}