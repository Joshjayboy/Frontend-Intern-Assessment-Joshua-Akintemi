"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { label: "About", dropdown: true },
  { label: "What We Do", dropdown: true },
  { label: "Jobs", dropdown: true },
  { label: "Projects", dropdown: false },
  { label: "TG Academy", dropdown: false },
  { label: "Strategic Partnership", dropdown: false },
  { label: "Pricing", dropdown: false },
  { label: "Book a Consultation", dropdown: false },
];

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Tobams Group"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </a>

        <div className="hidden lg:flex items-center gap-[24px]">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md bg-brand-plum px-4 py-2 text-sm font-medium text-white hover:bg-brand-plum-deep transition-colors"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                  fill="#DDD0DA"
                />
                <path
                  d="M10 25V23C10 21.9391 10.4214 20.9217 11.1716 20.1716C11.9217 19.4214 12.9391 19 14 19H18C19.0609 19 20.0783 19.4214 20.8284 20.1716C21.5786 20.9217 22 21.9391 22 23V25M12 11C12 12.0609 12.4214 13.0783 13.1716 13.8284C13.9217 14.5786 14.9391 15 16 15C17.0609 15 18.0783 14.5786 18.8284 13.8284C19.5786 13.0783 20 12.0609 20 11C20 9.93913 19.5786 8.92172 18.8284 8.17157C18.0783 7.42143 17.0609 7 16 7C14.9391 7 13.9217 7.42143 13.1716 8.17157C12.4214 8.92172 12 9.93913 12 11Z"
                  stroke="#571244"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Account
            <ChevronDown className="text-[#DDD0DA]" />
          </a>

          <a
            href="#"
            className="inline-flex items-center rounded-md bg-brand-red px-5 py-[10.5px] text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            Take Assessment
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-brand-plum"
          onClick={() => setOpen((o) => !o)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <div className="hidden lg:block border-t border-[#DDD0DA] py-2">
        <nav className="mx-auto flex max-w-7xl items-center justify-center gap-6 px-4 py-2 md:px-8">
          {links.map(({ label, dropdown }) => (
            <a
              key={label}
              href="#"
              className={`inline-flex items-center gap-1 text-sm text-[#151515] hover:text-brand-plum transition-colors py-1 ${
                label === "About"
                  ? "border-b-2 border-[#571244] text-[#571244] font-medium"
                  : ""
              }`}
            >
              {label}
              {dropdown && <ChevronDown className="text-[#571244]" />}
            </a>
          ))}
        </nav>
      </div>

      {open && (
        <div className="lg:hidden border-t border-brand-pink-soft bg-white">
          <nav className="flex flex-col px-4 py-4 gap-3">
            {links.map(({ label, dropdown }) => (
              <a
                key={label}
                href="#"
                className="inline-flex items-center gap-1 text-sm text-foreground/80"
              >
                {label}
                {dropdown && <ChevronDown />}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-brand-plum px-4 py-2 text-sm font-medium text-white"
              >
                Account
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-brand-red px-5 py-2 text-sm font-medium text-white"
              >
                Take Assessment
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
