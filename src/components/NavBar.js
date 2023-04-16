import React from "react";
import logo from "../assets/images/supabase-logo-wordmark--dark.webp";

export const NavBar = () => {
  return (
    <nav className="flex gap-8 items-center px-20 py-10">
      <div className="h-6 w-max">
        <img
          src={logo}
          alt="supabase-logo"
          className="w-full h-full cursor-pointer"
        />
      </div>
      <div className="flex w-full justify-between items-center">
        <div>
          <ul className="flex gap-8 text-white">
            <li className="cursor-pointer hover:text-emerald-500">Products</li>
            <li className="cursor-pointer hover:text-emerald-500">
              Developers
            </li>
            <li className="cursor-pointer hover:text-emerald-500">Pricing</li>
            <li className="cursor-pointer hover:text-emerald-500">Blog</li>
          </ul>
        </div>
        <div className="flex gap-8 items-center">
          <button className="text-zinc-500 flex gap-4 items-center">
            <svg
              className="star"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="sbui-icon "
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <div className="text-white bg-zinc-500">Star us on GitHub</div>
          </button>
          <button className="text-white bg-zinc-500">Sign in</button>
          <button className="text-white">Start you project</button>
        </div>
      </div>
    </nav>
  );
};
