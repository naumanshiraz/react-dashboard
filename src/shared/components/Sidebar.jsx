import { NavLink } from "react-router-dom";
import {
  ChartBarLineIcon,
  File01Icon,
  Home03Icon,
  MedicalFileIcon,
  Profile02Icon,
  UserMultiple02Icon,
  ArrowLeft03Icon,
  Menu01Icon,
  Cancel01Icon
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";

import logo from "@/assets/logo.png";
import mlogo from "@/assets/mlogo.png";

const links = [
  { to: "/dashboard", label: "Dashboard", icon: Home03Icon },
  { to: "/strategic-planning", label: "Perspectives", icon: MedicalFileIcon },
  { to: "/tasks", label: "Tasks", icon: Profile02Icon },
  { to: "/documents", label: "Documents", icon: File01Icon },
  { to: "/reports", label: "Reports", icon: ChartBarLineIcon },
  { to: "/user-roles", label: "User & Roles", icon: UserMultiple02Icon }
];

export default function Sidebar({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex">
      <div className="md:hidden w-10 fixed top-0 left-0 right-0 z-50
        flex items-center justify-between px-4 py-4">
        <button onClick={() => setMobileOpen(true)}>
          <HugeiconsIcon icon={Menu01Icon} size={22} />
        </button>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`
          fixed md:relative z-50 md:z-auto
          bg-[#102a44] text-slate-100 min-h-screen
          flex flex-col gap-6
          transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          ${collapsed ? "w-[72px] px-2" : "w-[256px] px-2 py-5"}
        `}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="md:hidden absolute top-3 right-3
            w-8 h-8 flex items-center justify-center
            rounded-full text-slate-300
            shadow transition"
        >
          <HugeiconsIcon icon={Cancel01Icon} size={18} />
        </button>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden md:flex absolute right-[-16px] top-2
            w-9 h-9 items-center justify-center rounded-full
            bg-white text-slate-600 shadow-md hover:bg-slate-100 transition"
        >
          <HugeiconsIcon
            icon={ArrowLeft03Icon}
            className={`transition-transform duration-300 ${
              collapsed ? "rotate-180" : ""
            }`}
          />
        </button>

        <div className="p-3">
          <img
            src={collapsed ? mlogo : logo}
            alt="TAHWUL"
            className={`${collapsed ? "h-8 mx-auto" : "h-10"} transition-all`}
          />
        </div>

        <nav className="flex flex-col gap-2 mt-4">
          {links.map(l => (
            <NavItem
              key={l.to}
              item={l}
              collapsed={collapsed}
              onClick={() => setMobileOpen(false)}
            />
          ))}
        </nav>
      </aside>

      <main className="flex-1 pt-[56px] md:pt-0">
        {children}
      </main>
    </div>
  );
}

function NavItem({ item, collapsed, onClick }) {
  return (
    <div className="relative group">
      <NavLink
        to={item.to}
        onClick={onClick}
        className={({ isActive }) =>
          `
          flex items-center rounded-md transition
          ${collapsed ? "justify-center px-2 py-3" : "px-3 py-2"}
          ${
            isActive
              ? "bg-[#98AEC0]/10 text-white"
              : "text-[#7B9FC3] hover:bg-[#98AEC0]/10"
          }
        `
        }
      >
        <HugeiconsIcon
          icon={item.icon}
          size={18}
          className={collapsed ? "" : "mr-2"}
        />

        {!collapsed && <span className="text-sm">{item.label}</span>}
      </NavLink>

      {collapsed && (
        <div className="
          absolute left-full top-1/2 -translate-y-1/2 ml-3
          opacity-0 group-hover:opacity-100
          bg-black text-white text-xs px-2 py-1 rounded
          whitespace-nowrap pointer-events-none transition
        ">
          {item.label}
        </div>
      )}
    </div>
  );
}
