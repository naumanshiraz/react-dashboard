import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Notification02Icon,
  Search01Icon
} from "@hugeicons/core-free-icons";

import profileImage from "@/assets/profile-a.jpg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="w-full bg-white border-b">
      <div className="flex items-center justify-between px-4 h-14">
        <div className="flex items-center gap-3 relative">
          <div className="relative ml-[40px]">
            <HugeiconsIcon
              icon={Search01Icon}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full sm:w-64 pl-9 pr-3 py-2 rounded-lg bg-gray-100 border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 rounded-full hover:bg-gray-100">
            <HugeiconsIcon
              icon={Notification02Icon}
              className="w-5 h-5 text-gray-600"
            />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          <div className="relative" ref={ref}>
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 cursor-pointer rounded-full bg-gray-100 px-2 py-1"
            >
              <img
                src={profileImage}
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <span className="hidden sm:inline text-sm font-medium text-gray-700">
                Mohamed
              </span>
              <svg
                className={`w-4 h-4 text-gray-500 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {open && (
              <div className="absolute right-0 mt-2 w-40 rounded-md bg-white border shadow-lg z-50">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}