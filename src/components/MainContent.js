import React from "react";

const MainContent = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="w-full h-1/2">
        <h1 className="text-5xl">
          <span className="block text-white"> Build in a weekend.</span>
          <span className="block md:ml-0 text-emerald-500">
            Scale to millions.
          </span>
        </h1>
        <p className="text-[#b7b7b7]">
          Supabase is an open source Firebase alternative. Start your project
          with a Postgres database, Authentication, instant APIs, Edge
          Functions, Realtime subscriptions, and Storage.
        </p>
      </div>
      <div className="w-full h-1/2">
         <iframe
      title="Demo video showcasing Supabase"
      src="https://www.youtube-nocookie.com/embed/dBOSUER_5T4?playlist=dBOSUER_5T4&amp;autoplay=1&amp;loop=1&amp;controls=0&amp;modestbranding=1&amp;rel=0&amp;disablekb=1&amp;mute=1&amp;muted=1"
      style={{top:0, right:0}}
      frameborder="0"
      allow="autoplay; modestbranding; encrypted-media"
    ></iframe>
      </div>
    </div>
  );
};

export default MainContent;
