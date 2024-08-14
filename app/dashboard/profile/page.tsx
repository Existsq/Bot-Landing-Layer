import React, { useState } from "react";
// import { PhotoIcon } from "@heroicons/react/24/solid";
// import RenewalModal from "@/components/dashboard/RenewalModal";
import Image from "next/image";

export default async function page() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isAutoRenewalOn, setIsAutoRenewalOn] = useState(false);

  // const handleToggle = () => {
  //   if (isAutoRenewalOn) {
  //     // Если выключаем (переключатель был включен), открыть модальное окно
  //     setIsModalOpen(true);
  //   } else {
  //     // Если включаем, просто изменить состояние
  //     setIsAutoRenewalOn(true);
  //   }
  // };

  // const handleConfirm = () => {
  //   setIsAutoRenewalOn(false); // Отключаем автообновление
  //   setIsModalOpen(false); // Закрыть модальное окно после подтверждения
  // };

  // const handleCancel = () => {
  //   setIsModalOpen(false); // Закрыть модальное окно без изменения состояния
  // };

  // if (!session) {
  //   return (
  //     <div className="flex min-h-screen justify-center items-center text-4xl font-bold ">
  //       You are not logged in!
  //     </div>
  //   );
  // }

  return (
    <>
      <div
        id="wrapper"
        className="flex justify-center items-center min-w-full bg-white overflow-y-auto my-auto"
      >
        <form>
          <div className="space-y-12 px-14 pt-8">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Profile
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                This information won't be displayed publicly, so don't worry
                about what you share.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-x-10 sm:gap-x-14 gap-y-8 sm:grid-cols-6">
                <div className="col-span-1 sm:col-span-2">
                  <label
                    htmlFor="photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Photo
                  </label>

                  <div className="mt-2 flex items-center gap-x-3">
                    <Image
                      alt="avatar"
                      src=""
                      width={130}
                      height={130}
                      quality={100}
                      className="rounded-full"
                    />
                    {/* <label
                      htmlFor="photo"
                      className="relative cursor-pointer group"
                    >
                      <div className="flex items-center justify-center w-[160px] h-[160px]">
                        <div className="z-0 w-[130px] h-[130px] rounded-full overflow-hidden bg-black">
                          <div className="z-10 inset-0 bg-gray-500 bg-opacity-50 opacity-0 group-hover:opacity-100 min-w-full min-h-full flex items-center justify-center transition-opacity duration-300 rounded-full max-w-[130px] max-h-[130px]">
                            <PhotoIcon
                              className="h-8 w-8 text-gray-500"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      </div>
                    </label> */}
                  </div>
                </div>

                <div className="sm:col-span-2 max-w-full flex-row gap-5 sm:flex-none">
                  <div className="max-w-full">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Username
                    </label>

                    <div className="mt-[14px]">
                      <div className="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                        <input
                          id="username"
                          name="username"
                          type="text"
                          placeholder='username'
                          autoComplete="username"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-3 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="sm:mt-10 max-w-full">
                    <label className="mt-[20px] sm:mt-0 text-sm font-medium leading-6 text-gray-900 flex items-center">
                      Badges
                      <a
                        href="/how-to-earn"
                        id="upgrade"
                        className="flex ml-2 mt-[1.2px] gap-1 text-xs text-[#5046E5]"
                      >
                        How to earn?
                      </a>
                    </label>

                    <div className="mt-[14px] sm:flex-nowrap flex flex-wrap gap-3 items-center justify-start">
                      <div>
                        <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                          Admin
                        </span>
                      </div>

                      <div>
                        <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                          Premium
                        </span>
                      </div>

                      <div>
                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                          Active
                        </span>
                      </div>

                      <div>
                        <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                          Admin
                        </span>
                      </div>

                      <div>
                        <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                          Admin
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sm:hidden sm:mt-0 md:block md: col-span-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Subscription
                  </label>

                  <div className="mt-[2px]">
                    <span className="relative top-[8px] -left-[5px] flex h-3 w-3 z-10">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5046E5] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#5046E5]"></span>
                    </span>
                    <div className="flex-grow w-2/3 sm:w-full px-3 py-[8px] text-sm rounded-md shadow-sm ring-1 ring-inset ring-[#6466F1] text-[#6466F1]">
                      <p>Expire on: 2027-12-04</p>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block md:hidden col-span-2 sm:col-span-2 sm:max-w-full max-w-fit">
                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Subscription
                    </label>

                    <div className="mt-[2px]">
                      <span className="relative top-[8px] -left-[5px] flex h-3 w-3 z-10">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5046E5] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#5046E5]"></span>
                      </span>
                      <div className="flex-grow w-full px-3 py-[8px] text-sm rounded-md shadow-sm ring-1 ring-inset ring-[#6466F1] text-[#6466F1]">
                        <p>End: 2027-12-04</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Personal Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      placeholder="James"
                      className="block w-2/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      placeholder="Cameron"
                      className="block w-2/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <div className="text-[#4B5563] py-[6px]">
                      <span>Existqq@gmail.com</span>
                      {/* <button className="text-xs text-[#5046E5] ml-1">
                        (Change email)
                      </button> */}
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Language
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-2/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option>English</option>
                      <option>Russian</option>
                      <option>Chinese</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Payment methods
                  </label>
                  <div className="mt-2">
                    <select
                      id="payments"
                      autoComplete="country-name"
                      className="block w-2/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></select>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="renewal"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Auto renewal
                  </label>
                  <div className="mt-2">
                    <div
                      id="renewal"
                      className="block w-full py-1.5 sm:text-sm sm:leading-6"
                    >
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          // checked={isAutoRenewalOn}
                          // onChange={handleToggle} // Открыть модальное окно при изменении переключателя
                        />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-indigo-600 dark:peer-focus:ring-indigo-600 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                        <span className="ms-3 text-sm font-normal text-black">
                          Never lose full functionality with this auto-renewal
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Используем компонент Modal */}
                  {/* <RenewalModal
                    isOpen={isModalOpen}
                    onClose={handleCancel}
                    onConfirm={handleConfirm}
                  >
                    <p>
                      Are you sure you want to change the auto renewal setting?
                    </p>
                  </RenewalModal> */}
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Notifications
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                We'll always let you know about important changes, but you pick
                what else you want to hear about.
              </p>

              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    By Email
                  </legend>
                  <div className="mt-6 space-y-6">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-transparent"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="comments"
                          className="font-medium text-gray-900"
                        >
                          Comments
                        </label>
                        <p className="text-gray-500">
                          Get notified when someone posts a comment on a
                          posting.
                        </p>
                      </div>
                    </div>

                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-transparent"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="comments"
                          className="font-medium text-gray-900"
                        >
                          Comments
                        </label>
                        <p className="text-gray-500">
                          Get notified when someone posts a comment on a
                          posting.
                        </p>
                      </div>
                    </div>

                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-transparent"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="comments"
                          className="font-medium text-gray-900"
                        >
                          Comments
                        </label>
                        <p className="text-gray-500">
                          Get notified when someone posts a comment on a
                          posting.
                        </p>
                      </div>
                    </div>

                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="candidates"
                          name="candidates"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:outline-none focus:ring-transparent"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="candidates"
                          className="font-medium text-gray-900"
                        >
                          Candidates
                        </label>
                        <p className="text-gray-500">
                          Get notified when a candidate applies for a job.
                        </p>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6 px-14 pb-8">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

// export default page;
