"use client";

import { LandingNav, LaunchFooter } from "@/components/navigations";
import { EcosystemData } from "@/utils/ecosystems";
import { navigate } from "@/utils/constants";
import React from "react";

function Ecosystem() {
  const Ecosystems = EcosystemData.map((system, index) => {
    return (
      <div
        key={index}
        onClick={() => navigate(system.link)}
        className="border border-white border-opacity-20 rounded-2xl ecosystem px-2 py-2 grid gap-2 justify-start items-start w-full relative cursor-pointer"
      >
        <div className="flex  w-full">
          <img src={system.image} className="w-24 h-24 rounded-lg" alt="logo" />
          <p className="text-base text-white font-poppins font-medium bg-black px-2 py-1 my-auto rounded-lg absolute right-2">
            {system.type}
          </p>
        </div>
        <p className="text-lg font-semibold tracking-wide text-white font-poppins">
          {system.title}
        </p>
        <p className="text-base font-medium tracking-wide text-white text-opacity-60 font-poppins">
          {system.description}
        </p>
      </div>
    );
  });

  return (
    <div className="landing-page ">
      <LandingNav route={"Ecosystem"} />
      <div className="min-h-screen pt-40 px-2 md:px-20">
        <div className="w-full flex flex-col gap-8 ">
          <p className="text-white text-2xl md:text-4xl font-medium font-poppins">
            Explore the Nextswap Ecosystem
          </p>
          <p className="text-white text-lg md:text-xl md:w-1/2 font-medium font-poppins">
            Swap, earn, vote, and more with hundreds of DeFi apps, integrations,
            and tools built on the Nextswap Protocol.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-4 pt-10">
          {Ecosystems}
        </div>
      </div>
      <LaunchFooter />
    </div>
  );
}

export default Ecosystem;
