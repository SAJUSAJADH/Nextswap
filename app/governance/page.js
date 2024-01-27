"use client";

import { LandingNav, LaunchFooter } from "@/components/navigations";
import Image from "next/image";
import React, { useState } from "react";

function Governance() {
  const [selectedPhase, setSelectedPhase] = useState("phase1");

  const phaseClass = (phase) => {
    return `${selectedPhase === phase ? "bg-[#FFFFFF1A] border-opacity-20" : "border-opacity-5 text-opacity-60"} border border-white px-4 py-7 cursor-pointer rounded-xl text-white font-medium font-poppins flex justify-start items-center hover:bg-[#FFFFFF1A] hover:bg-opacity-60`;
  };

  const phaseDescription = (phase) => {
    return `${selectedPhase === phase ? "grid governance" : "hidden"} lg:col-span-2 gap-4`;
  };

  return (
    <div className="landing-page ">
      <LandingNav route={"Governance"} />
      <div className="min-h-screen pt-40 px-3 md:px-44">
        <div className="w-full flex flex-col gap-8 pb-16">
          <p className="text-white text-opacity-60 text-xl md:text-2xl font-medium font-poppins">
            GOVERNANCE
          </p>
          <p className="text-white text-2xl lg:text-3xl lg:w-1/2 font-medium font-poppins tracking-wider">
            The Nextswap Protocol is a public good{" "}
            <span className="font-black">owned</span> and{" "}
            <span className="font-black">governed </span> by NEXT token holders
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6 justify-center items-center w-full pb-16 border-b border-white border-opacity-20">
          <div className="flex justify-center lg:justify-end items-center">
            <Image
              src={"/logo.png"}
              width={200}
              height={200}
              alt="logo"
              className="rotate-animation"
            />
          </div>
          <div className="lg:col-span-2 grid gap-3 justify-center lg:justify-start text-justify">
            <p className="text-white text-xl font-bold font-poppins">
              The NEXT Token
            </p>
            <p className="text-white text-lg font-medium font-poppins lg:w-2/3">
              The Nextswap token enables community ownership and active
              stewardship of the Protocol. NEXT holders govern the Protocol
              through an on-chain governance process.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6 pb-10 mt-28">
          <p className="text-white text-opacity-60 text-xl md:text-2xl font-medium font-poppins">
            THE GOVERNANCE PROCESS
          </p>
          <p className="text-white text-lg md:text-xl md:w-1/2 font-medium font-poppins tracking-wider">
            Share your opinions and shape the future of the protocol
          </p>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 pt-10">
            <div className="grid gap-4">
              <div
                className={phaseClass("phase1")}
                onClick={() => setSelectedPhase("phase1")}
              >
                Phase 1: Temperature Check
              </div>
              <div
                className={phaseClass("phase2")}
                onClick={() => setSelectedPhase("phase2")}
              >
                Phase 2: Consensus Check
              </div>
              <div
                className={phaseClass("phase3")}
                onClick={() => setSelectedPhase("phase3")}
              >
                Phase 3: Governance Proposal
              </div>
            </div>
            <div className={phaseDescription("phase1")}>
              <p className="text-white text-2xl font-poppins font-semibold tracking-wider flex items-center">
                Temperature Check
              </p>
              <p className="text-white text-opacity-60 text-base text-justify font-medium font-poppins lg:w-2/3">
                The Temperature Check process determines whether there is
                sufficient will to make changes to the status quo. At the end of
                the two days, a majority vote with a 25k UNI yes-vote threshold
                wins. If the Temperature check does not suggest a change from
                the status quo, the topic will be closed on the governance site.
                If the Temperature Check does suggest a change, proceed to Stage
                2: Consensus Check.
              </p>
            </div>
            <div className={phaseDescription("phase2")}>
              <p className="text-white text-2xl font-poppins font-semibold tracking-wider flex items-center">
                Consensus Check
              </p>
              <p className="text-white text-opacity-60 text-base text-justify font-medium font-poppins lg:w-2/3">
                The Consensus Check process incorporates feedback from the
                Temperature Check and establishes formal discussion around a
                potential proposal. Consensus Check is accompanied by another
                off-chain vote. At the end of five days, a majority vote with a
                50k UNI yes-vote threshold wins.
              </p>
            </div>
            <div className={phaseDescription("phase3")}>
              <p className="text-white text-2xl font-poppins font-semibold tracking-wider flex items-center">
                Governance Proposal
              </p>
              <p className="text-white text-opacity-60 text-base text-justify font-medium font-poppins lg:w-2/3">
                A Governance Proposal is the final step in the governance
                process. The proposal should incorporate feedback from the
                Consensus Check and is accompanied by executable on-chain code.
                In order to submit an on-chain Governance proposal, a delegate
                must have a minimum balance of 2m UNI. The voting period lasts 7
                days and a majority vote with a 40m UNI yes-vote threshold wins.
              </p>
            </div>
          </div>
        </div>
      </div>
      <LaunchFooter />
    </div>
  );
}

export default Governance;
