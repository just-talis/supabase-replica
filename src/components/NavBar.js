import React from "react";
import logo from "../assets/images/supabase-logo-wordmark--dark.webp";

export const NavBar = () => {
  return (
    <nav className="flex justify-around items-center">
      <div className="px-20">
      <img
        src={logo}
        alt=""
      />
      </div>
      <div className="flex w-full justify-between items-center">
      <div>
      <ul className="flex gap-8 text-white">
        <li>Products</li>
        <li>Developers</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      </div>
      <div className="flex">
      <svg className="star" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sbui-icon "><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        <button className='star-btn'>Star us on GitHub</button>
        <button className="btn">Sign in</button>
        <button className="btn">Start you project</button>
      </div>
      </div>
    </nav>
    
  );
};
