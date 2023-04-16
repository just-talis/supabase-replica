import React from 'react';
import logo from '../assets/images/supabase-logo-wordmark--dark.webp';

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
          <button className="hover:bg-zinc-500/20 px-2 py-1 border border-transparent hover:border-zinc-500/10 rounded-md flex gap-4 items-center group">
            <div className="group-hover:text-yellow-300 text-zinc-500/50">
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
            </div>
            <div className="text-white">Star us on GitHub</div>
          </button>
          <button className="text-white bg-zinc-500/20 border border-zinc-500/50 hover:border-zinc-500 px-2 py-1 rounded-md">
            Sign in
          </button>
          <button className="text-white bg-emerald-500/50 hover:bg-emerald-500 border border-emerald-500 px-2 py-1 rounded-md">
            Start you project
          </button>
        </div>
      </div>
    </nav>
  );
};
