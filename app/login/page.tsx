import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Example() {
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
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[480px] p-12 rounded-lg shadow-lg border-[1px] border-gray-100">
          <form action="#" method="POST" className="space-y-6">
            <div>
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
            </div>

            <div className="flex justify-between items-center my-2">
              <div className="flex gap-3 font-normal text-[14px]">
                <div className="flex h-6 items-center">
                  <input
                    id="candidates"
                    name="candidates"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:outline-none focus:ring-transparent"
                  />
                </div>
                <p>Remember me</p>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <div
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
          </div>
        </div>

        <div className="mt-6">
          <p className="text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
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
