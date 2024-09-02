import Image from "next/image";
import Logo from "@/assets/logo.png";
import Illustration from "@/assets/Illustration.png";

export default function AuthLayout() {
    return (
        <>
            <div className="w-2/5 h-screen bg-woorkBlue px-4 flex flex-col justify-center">
                <div className="w-full flex justify-center">
                    <div className="w-4/5 flex flex-col gap-12">
                        <div className="flex gap-6">
                            <Image src={Logo} width={50} height={50} alt="logo" priority />
                            <p className="text-white text-3xl flex flex-col justify-center font-bold">Woorkroom</p>
                        </div>

                        <p className="text-4xl text-white font-bold leading-snug">
                            Your virtual room to work <br />
                            Plan. Create. Control.
                        </p>

                        <div className="flex pb-10">
                            <Image src={Illustration} width={500} height={373} alt="illustration" priority />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}