"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  SquaresPlusIcon,
  ChartBarIcon,
  CommandLineIcon,
  TicketIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PlayCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "Ticket System",
    description: "Manage your appeals more conveniently",
    href: "/features/ticketing",
    icon: TicketIcon,
  },
  {
    name: "Analytics",
    description: "Track your requests and collect statistics",
    href: "/features/analytics",
    icon: ChartBarIcon,
  },
  {
    name: "Commands",
    description: "Use additional moderation commands",
    href: "/features/commands",
    icon: CommandLineIcon,
  },
  {
    name: "Integrations",
    description: "Connect your social networks to notify users",
    href: "/features/integrations",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Automatic cleaning for the server",
    href: "/features/automations",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon }, // Удален href для предотвращения открытия новой вкладки
  {
    name: "Invite to server",
    href: "https://discord.com/oauth2/authorize?client_id=1264239380000936067",
    icon: PlusCircleIcon,
  },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false); // Состояние для модального окна с видео

  const openVideo = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Предотвращает переход по ссылке
    setVideoOpen(true);
  };
  const closeVideo = () => setVideoOpen(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 focus:outline-none">
              Features
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-[110] mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={item.name === "Watch demo" ? openVideo : undefined} // Открытие видео при клике на "Watch demo"
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none text-gray-400"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="/login" className="text-sm font-semibold leading-6 text-gray-900">
            Dashboard
          </a>
          <a href="/documentation" className="text-sm font-semibold leading-6 text-gray-900">
            Documentation
          </a>
          <a href="/faq" className="text-sm font-semibold leading-6 text-gray-900">
            FAQ
          </a>
          <a href="https://discord.com/oauth2/authorize?client_id=1264239380000936067" className="text-sm font-semibold leading-6 text-gray-900">
            Invite
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/login" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      {/* Модальное окно для видео */}
      <Dialog open={videoOpen} onClose={closeVideo}>
        <div
          className="fixed inset-0 bg-black/50 z-[110] w-full h-full"
          aria-hidden="true"
        />
        <DialogPanel className="fixed inset-0 flex items-center justify-between p-6 xl:p-32 z-[110]">
          <button
            type="button"
            onClick={closeVideo}
            className="flex z-[120] -mr-[10px] h-full justify-center items-center focus:outline-none top-1/2 bg-white rounded-l-lg text-black max-h-[50px] sm:max-h-[100px] md:max-h-[200px] lg:max-h-[300px] min-w-[25px] hover:bg-[#5046E5] duration-500 hover:text-white"
          >
            <XMarkIcon
              className="flex justify-center h-10 w-10"
              aria-hidden="true"
            />
          </button>
          <div className="flex-grow w-fit h-fit border-[10px] border-white bg-white rounded-lg">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Ваше видео
                title="Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-md"
              ></iframe>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 z-[100]">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Features
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        target={item.name === "Watch demo" ? "_self" : "_blank"} // Открытие видео при клике на "Watch demo"
                        rel={
                          item.name === "Watch demo"
                            ? ""
                            : "noopener noreferrer"
                        }
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={
                          item.name === "Watch demo" ? openVideo : undefined
                        } // Открытие видео при клике на "Watch demo"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Dashboard
                </a>
                <a
                  href="/documentation"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Documentation
                </a>
                <a
                  href="/faq"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  FAQ
                </a>
                <a
                  href="https://discord.com/oauth2/authorize?client_id=1264239380000936067"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Invite
                </a>
              </div>
              <div className="py-6">
                <a
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
