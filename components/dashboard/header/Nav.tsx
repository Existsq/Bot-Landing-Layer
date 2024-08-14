import React from "react";

const navigation = [
  { name: "Analytics", href: "./analytics" },
  { name: "Servers", href: "./servers" },
  { name: "Reports", href: "./reports" },
  { name: "Integrations", href: "./integrations" },
  { name: "Profile", href: "./profile" },
  { name: "Support", href: "./support" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation({ currentPage }) {
  return (
    <>
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
    </>
  );
}
