"use client";
import { useState, useEffect } from "react";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Example() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [hasError, setHasError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubscribe = () => {
    if (email.trim() === "") {
      setHasError(true);
    } else {
      setIsSubscribed(true);
      setHasError(false);
    }
  };

  if (!mounted) {
    // Не рендерим компонент на сервере, чтобы избежать рассинхронизации
    return null;
  }

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 pt-16 sm:pt-24 lg:pt-32 pb-[32px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Subscribe to our newsletter.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
              velit quis. Duis tempor incididunt dolore.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:outline-none sm:text-sm sm:leading-6 ${
                  hasError
                    ? "ring-red-500 focus:outline-none" // Красная обводка при ошибке
                    : "ring-white/10 focus:outline-none" // Обычная обводка
                }`}
              />
              <button
                type="button"
                onClick={handleSubscribe}
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                {isSubscribed ? "Successful!" : "Subscribe"}
              </button>
            </div>
            <p
              className={`mt-2 text-sm text-red-500 h-5 ${
                hasError ? "visible" : "invisible"
              }`}
            >
              Please enter your email address.
            </p>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon
                  aria-hidden="true"
                  className="h-6 w-6 text-white"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure
                cupidatat duis commodo amet.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon
                  aria-hidden="true"
                  className="h-6 w-6 text-white"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">No spam</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Officia excepteur ullamco ut sint duis proident non adipisicing.
                Voluptate incididunt anim.
              </dd>
            </div>
          </dl>
        </div>
        <footer className="pt-32 sm:pt-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 text-base">
              <div>
                <h3 className="font-semibold text-white">Tickets Bot</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Setup
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Invite
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Terms of use
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white">Social</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white">Subscribe</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-gray-400 sm:flex sm:items-center sm:justify-between">
              <p>© 2024 Ticket Bot. All rights reserved.</p>
              <div className="mt-6 flex justify-center space-x-6 sm:mt-0 sm:justify-end">
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaFacebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaLinkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </div>
  );
}
