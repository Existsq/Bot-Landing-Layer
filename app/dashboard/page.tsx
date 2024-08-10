"use client";
import React, { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "dashboard" },
  { name: "Team", href: "team" },
  { name: "Projects", href: "projects" },
  { name: "Calendar", href: "calendar" },
  { name: "Reports", href: "reports" },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [currentTab, setCurrentTab] = useState("dashboard");

  const renderContent = () => {
    const [avatar, setAvatar] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

    switch (currentTab) {
      case "dashboard":
        return (
          <>
            <div className="flex-1 justify-center items-center min-w-full bg-white overflow-y-auto">
              <form className="bg-white px-10 sm:px-14 md:px-[140px] lg:px-48 2xl:px-80 py-8 rounded-lg shadow-lg min-w-full max-w-4xl">
                <div className="space-y-12">
                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Profile
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      This information won't be displayed publicly, so don't
                      worry about what you share.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 z-10">
                      <div className="col-span-2">
                        <label
                          htmlFor="photo"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Photo
                        </label>
                        <div className="mt-2 flex items-center gap-x-3">
                          <input
                            id="photo"
                            name="photo"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                          <label
                            htmlFor="photo"
                            className="relative cursor-pointer group"
                          >
                            <div className="relative w-[160px] h-[160px] rounded-full overflow-hidden">
                              {avatar ? (
                                <img
                                  src={avatar}
                                  alt="Profile Avatar"
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <UserCircleIcon
                                  className="text-gray-300"
                                  aria-hidden="true"
                                />
                              )}
                              <div className="absolute mt-[15px] ml-[15px] inset-0 bg-gray-500 bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-full max-w-[130px] max-h-[130px]">
                                <PhotoIcon
                                  className="h-8 w-8 text-gray-500"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>

                      {/* Остальная часть формы */}
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Username
                        </label>
                        <div className="mt-[14px]">
                          <div className="flex w-2/3 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                            <input
                              id="username"
                              name="username"
                              type="text"
                              placeholder="James Bond"
                              autoComplete="username"
                              className="block flex-1 border-0 bg-transparent py-1.5 pl-3 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"
                            />
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
                            <span>existqq@gmail.com</span>
                            <button className="text-xs text-[#5046E5] ml-1">
                              (Change email)
                            </button>
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
                    </div>
                  </div>

                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Notifications
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      We'll always let you know about important changes, but you
                      pick what else you want to hear about.
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
                      <fieldset>
                        <legend className="text-sm font-semibold leading-6 text-gray-900">
                          Push Notifications
                        </legend>
                        <div className="mt-6 space-y-6">
                          <div className="relative flex gap-x-3">
                            <div className="flex h-6 items-center">
                              <input
                                id="newsletter"
                                name="newsletter"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:outline-none focus:ring-transparent"
                              />
                            </div>
                            <div className="text-sm leading-6">
                              <label
                                htmlFor="newsletter"
                                className="font-medium text-gray-900"
                              >
                                Newsletter
                              </label>
                              <p className="text-gray-500">
                                Get notified when we release new features.
                              </p>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
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
      case "team":
        return (
          <>
            <h1 className="text-2xl font-bold text-gray-900">Team</h1>
            <p className="mt-4 text-gray-600">Manage your team members here.</p>
          </>
        );
      case "projects":
        return (
          <>
            <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
            <p className="mt-4 text-gray-600">View and manage your projects.</p>
          </>
        );
      case "calendar":
        return (
          <>
            <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
            <p className="mt-4 text-gray-600">Upcoming events and deadlines.</p>
          </>
        );
      case "reports":
        return (
          <>
            <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
            <p className="mt-4 text-gray-600">Generate and view reports.</p>
          </>
        );
      default:
        return (
          <>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="mt-4 text-gray-600">Welcome to the Dashboard!</p>
          </>
        );
    }
  };

  return (
    <>
      <div className="min-h-full">
        <Disclosure
          as="nav"
          className="bg-white border-[1px] border-[#E5E7EB] sticky top-0 z-[100]"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    className="h-8 w-8"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => setCurrentTab(item.href)}
                        className={classNames(
                          currentTab === item.href
                            ? "text-black border-b-[2px] border-[#6466F1]"
                            : "text-[#6B7280] hover:text-black hover:border-b-2 hover:border-gray-300",
                          "px-1 py-[22px] text-sm font-medium border-b-2 border-transparent transition-colors duration-300"
                        )}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="relative rounded-full p-1 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#5046E5]"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                  </button>

                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          alt=""
                          src={user.imageUrl}
                          className="h-8 w-8 rounded-full"
                        />
                      </MenuButton>
                    </div>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          <a
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:border-b-2 hover:border-gray-300"
                          >
                            {item.name}
                          </a>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block h-6 w-6 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden h-6 w-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="button"
                  onClick={() => setCurrentTab(item.href)}
                  aria-current={currentTab === item.href ? "page" : undefined}
                  className={classNames(
                    currentTab === item.href
                      ? "bg-gray-900 text-white border-b-2 border-purple-600"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white hover:border-b-2 hover:border-gray-300",
                    "block px-3 py-2 text-base font-medium border-b-2 transition-colors duration-300"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>

        <main>
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {renderContent()}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
