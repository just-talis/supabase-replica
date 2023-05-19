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
      <div className="mt-16 flex content-center sm:mt-24 lg:absolute lg:-right-80 lg:col-span-6 lg:mt-0 lg:w-9/12 xl:relative xl:right-0 xl:w-full ">
        <div className="relative flex w-full flex-col items-center justify-center rounded-md">
          <div className="flex h-5 w-full items-center justify-start rounded-t-md px-2">
            <div className="mr-2 h-2 w-2 rounded-full"></div>
            <div className="mr-2 h-2 w-2 rounded-full"></div>
            <div className="mr-2 h-2 w-2 rounded-full"></div>
          </div>
          <div
            className="relative rounded-b-md w-full shadow-lg"
            style={{ padding: "56.25% 0 0 0" }}
          >
            <iframe
              className="absolute rounded-b-md w-full h-full"
              title="Demo video showcasing Supabase"
              src="https://www.youtube-nocookie.com/embed/dBOSUER_5T4?playlist=dBOSUER_5T4&amp;autoplay=1&amp;loop=1&amp;controls=0&amp;modestbranding=1&amp;rel=0&amp;disablekb=1&amp;mute=1&amp;muted=1"
              style={{ top: 0, left: 0 }}
              frameborder="0"
              allow="autoplay; modestbranding; encrypted-media"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
