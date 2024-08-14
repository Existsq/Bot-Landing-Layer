"use server";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { SignIn } from "@/components/auth/SignIn"


function Example() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
      <div className="flex min-h-full flex-1 flex-col justify-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          {/* <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to Tickets
          </h2>
          <h3 className="mt-2 text-center text-[15px] font-normal leading-9 tracking-tight text-gray-900">
            Welcome back! Please sign in to continue
          </h3> */}
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[400px] px-10 py-8 rounded-lg shadow-xl border-[1px] border-gray-200">
          {/* <div>
              <label
                htmlFor="email"
                className="block text-sm font-normal leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-normal leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}

          <div className="flex-row items-center justify-center mb-6 text-center text-gray-800 text-[17px] font-bold">
            <p>Sign in to dashboard</p>
            <p className="text-[13px] font-light text-[#747686] mt-2">
              Welcome back! Please sign in to continue
            </p>
          </div>

          <SignIn ></SignIn>

          {/* <div className="flex justify-between items-center">
              <div className="flex gap-3 font-normal text-[14px]">
                <div className="flex h-6 items-center">
                  <input
                    id="candidates"
                    name="candidates"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:outline-none focus:ring-transparent"
                  />
                </div>
                <p className="flex items-center text-center">Remember me</p>
              </div>

              <div className="text-sm">
                <a
                  href="/faq"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  I need help
                </a>
              </div>
            </div> */}

          <div
            id="divider"
            className="flex items-center justify-between mt-6 mb-3"
          >
            {/* <div className="min-h-[1px] bg-[#E5E7EB] w-full"></div>
              <p className="inline min-w-fit mx-4 text-[14px] font-normal">
                Or continue with
              </p> */}
            <div className="min-h-[1px] bg-[#E5E7EB] w-full"></div>
          </div>

          <a
            type="submit"
            href="https://discord.com/oauth2/authorize?client_id=1264239380000936067"
            className="flex gap-2 w-full items-center justify-center text-gray-600 px-3 py-1.5 text-sm font-medium leading-6 hover:text-indigo-600 transition duration-200"
          >
            <PlusCircleIcon height={20} width={20} color="#4B5563" />
            Invite bot on server
          </a>

          {/* <div
            id="divider"
            className="flex items-center justify-between mt-10 mb-6"
          >
            <div className="min-h-[1px] bg-[#E5E7EB] w-full"></div>
            <p className="inline min-w-fit mx-4 text-[14px] font-normal">
              Or continue with
            </p>
            <div className="min-h-[1px] bg-[#E5E7EB] w-full"></div>
          </div>

          <div
            id="integrations"
            className="flex justify-between items-center gap-6 max-w-full text-[14px] font-medium"
          >
            <button className="flex-grow flex items-center justify-center gap-0 px-[12px] py-[8px] bg-white border-[1px] border-gray-200 rounded-md max-w-full max-h-[40px]">
              <div className="flex items-center justify-center gap-2">
                <FcGoogle size={20} className="flex-shrink-0" />
                <p className="flex-grow text-center">Google</p>
              </div>
            </button>
            <button className="flex-grow flex items-center justify-center gap-4 px-[12px] py-[8px] bg-white border-[1px] border-gray-200 rounded-md max-w-full max-h-[40px]">
              <div className="flex items-center justify-center gap-2">
                <FaGithub size={20} className="flex-shrink-0" />
                <p className="">GitHub</p>
              </div>
            </button>
          </div> */}
        </div>

        <div className="mt-6">
          <p className="text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="/free-trial"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Example;
