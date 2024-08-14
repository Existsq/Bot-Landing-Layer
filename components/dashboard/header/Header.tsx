import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

import Logo from "@/components/dashboard/header/Logo";

import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const navigation = [
  { name: "Analytics", href: "./analytics" },
  { name: "Servers", href: "./servers" },
  { name: "Reports", href: "./reports" },
  { name: "Integrations", href: "./integrations" },
  { name: "Profile", href: "./profile" },
  { name: "Support", href: "./support" },
];

const userNavigation = [
  { name: "Your Profile", href: "./profile" },
  { name: "Settings", href: "./settings" },
  { name: "Sign out", href: "./sign-out" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface Properties {
  currentPage: string;
  isAdmin?: boolean;
}

export default function Example({ currentPage, isAdmin = false }: Properties) {
  return (
    <>
      <div className="min-h-full">
        <Disclosure
          as="nav"
          className="bg-white border-b-[1px] border-t-[1px] border-[#E5E7EB] sticky top-0 z-[100]"
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
                      <a
                        href={item.href}
                        key={item.name}
                        className={classNames(
                          item.name.toLowerCase() === currentPage
                            ? "text-black border-indigo-600 px-1 py-[22px] text-sm font-medium border-b-2"
                            : "text-[#6B7280] hover:text-black hover:border-b-2 hover:border-gray-300 px-1 py-[22px] text-sm font-medium border-b-2 border-transparent transition-colors duration-300"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

              </div>

              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex max-w-xs items-center rounded-full text-sm focus:outline-none">
                        <BellIcon
                          aria-hidden="true"
                          className="h-6 w-6"
                          color="#6B7280"
                        />
                      </MenuButton>
                    </div>
                    <MenuItems
                      transition
                      className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="flex-row gap-2 items-center">
                        <div className="text-sm">New Notification</div>
                      </div>
                    </MenuItems>
                  </Menu>

                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex max-w-xs items-center rounded-full text-sm focus:outline-none">
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
                      className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          <a
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                            href={item.href}
                          >
                            {item.name}
                          </a>
                        </MenuItem>
                      ))}

                      <MenuItem>
                        <div>
                          <form>
                            <button type="submit">Logout</button>
                          </form>
                        </div>
                      </MenuItem>
                    </MenuItems>
                  </Menu>

                  <span className="ml-3 inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                    Admin
                  </span>
                </div>
              </div>

              <div className="-mr-2 flex md:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#5046E5] hover:text-white focus:outline-none transition ease-out duration-500">
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
                  className="text-black"
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </>
  );
}
