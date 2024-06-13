
export default function Home() {
  return (
    <div className="w-full max-h-screen flex">
      <div className="w-2/5 h-screen bg-woorkBlue px-4 flex flex-col justify-center">
        <div className="w-full flex justify-center">
          <div className="w-4/5 flex flex-col gap-12">
            <div className="flex gap-6">
              <img src="@/assets/logo.png" />
              <p className="text-white text-3xl flex flex-col justify-center font-bold">Woorkroom</p>
            </div>

            <p className="text-4xl text-white font-bold leading-snug">
              Your place to work <br />
              Plan. Create. Control.
            </p>

            <div className="flex pb-10">
              <img src="@/assets/Illustration.png" alt="illustration" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-3/5 h-screen px-4 py-10 flex flex-col justify-center">
        <div className="w-full flex justify-center">
          <div className="w-1/2 flex flex-col gap-8 py-6">
            <p className="text-xl font-bold text-center my-3">Sign In to Woorkroom</p>
            <Input
              variant="w-full"
              type="email"
              placeholder="youremail@gmail.com"
              label="Email Address"
              labelClass="text-woorkDGrey font-bold"
            />

            <Input
              variant="'w-full'"
              type="password"
              placeholder="Password"
              label="Password"
              labelClass="text-woorkDGrey font-bold"
            />

            <div className="flex w-full justify-between items-center">
              <div className="flex gap-3">
                <checkbox label="Remember Me" labelStyle="margin-top: -2.3px; color: #7D8592" />
              </div>
              <div className="flex">
                <a className="text-base text-woorkDGrey cursor-pointer">Forgot Password?</a>
              </div>
            </div>

            <div className="w-full flex justify-center">
              <div className="w-1/2 flex flex-col gap-6">
                <v-btn
                  style="background-color: #3f8cff; border-radius: 10px; color: #ffffff; padding: 6px"
                >
                  Sign In
                </v-btn>
                <p className="text-base font-semibold text-woorkBlue text-center cursor-pointer">Don’t have an account?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
