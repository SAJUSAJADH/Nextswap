"use client";

import { LandingNav, LaunchFooter } from "@/components/navigations";
import React from "react";
import { communities, navigate } from "@/utils/constants";

function Copmmunity() {
  const cardFunctions = () => {
    return "grid gap-6 justify-start items-start border-[1px] border-white border-opacity-20 rounded-2xl bg-[#FFFFFF05] px-5 md:px-6 py-3 cursor-pointer hover:bg-opacity-20 z-30";
  };

  const communityLinks = communities.map((community, index) => {
    return (
      <div
        key={index}
        className={cardFunctions()}
        onClick={() => navigate(community.Link)}
      >
        <p className="text-white cursor-pointer text-xl font-semibold tracking-wider font-poppins hover:text-opacity-60 flex gap-4">
          {community.icon} {community.title}
        </p>
        <p className="font-poppins text-[#888D9B] text-sm md:text-lg font-semibold text-opacity-90 md:text-opacity-80">
          {community.description}
        </p>
      </div>
    );
  });

  return (
    <div className="landing-page ">
      <LandingNav route={"Community"} />
      <div className="min-h-screen pt-40 px-3 md:px-20">
        <div className="w-full flex flex-col gap-8 pb-16 border-b border-white border-opacity-20">
          <p className="text-white text-opacity-60 text-xl md:text-2xl font-medium font-poppins">
            COMMUNITY
          </p>
          <p className="text-white text-2xl md:text-3xl md:w-1/2 font-medium font-poppins tracking-wider">
            The Nextswap community is an ecosystem of{" "}
            <span className="font-black">
              users, developers, designers, and educators
            </span>
          </p>
        </div>
        <div className="w-full flex flex-col gap-8 mt-16">
          <p className="text-white text-lg md:text-xl font-bold font-poppins">
            Join the conversation.
          </p>
          <p className="text-white text-lg md:w-1/2 font-medium font-poppins tracking-wider">
            Nextswap's global and vibrant community drives the success of the
            Protocol. Join the conversation on Github, Twitter, and Reddit to
            stay up to date on the latest community news.
          </p>
        </div>
        <div className="mt-14 h-full grid lg:grid-cols-2 gap-3 py-2">
          {communityLinks}
        </div>
      </div>
      <LaunchFooter />
    </div>
  );
}

export default Copmmunity;
