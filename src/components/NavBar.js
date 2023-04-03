import React from "react";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav className="nav">
      <img
        src="https://supabase.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsupabase-logo-wordmark--dark.53d797e9.png&w=256&q=75"
        alt=""
      />
      <ul>
        <li>Products</li>
        <li>Developers</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div>
        <button className='star-btn'>Star us on GitHub</button>
        <button className="btn">Sign in</button>
        <button className="btn">Start you project</button>
      </div>
    </nav>
  );
};
