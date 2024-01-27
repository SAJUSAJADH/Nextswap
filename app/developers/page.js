import { LandingNav, LaunchFooter } from "@/components/navigations";
import Image from "next/image";
import React from "react";
import {
  ExclamationCircleOutlined,
  FileDoneOutlined,
  GithubOutlined,
} from "@ant-design/icons";

function Developers() {
  const styles = {
    cardClasses:
      "border border-white border-opacity-20 rounded-2xl px-4 py-6 grid gap-5 justify-start hover:bg-[#FFFFFF05]",
    cardTitle: "text-white text-lg font-poppins font-semibold tracking-wider",
    cardDescription:
      "text-white text-base text-opacity-60 font-poppins font-medium tracking-wider",
    Iconstyle: "text-white font-medium text-2xl flex justify-start",
  };

  return (
    <div className="landing-page ">
      <LandingNav route={"Developers"} />
      <div className="min-h-screen pt-40 px-3 md:px-44">
        <div className="w-full flex flex-col gap-8 pb-16 border-b border-white border-opacity-20">
          <p className="text-white text-opacity-60 text-xl md:text-2xl font-medium font-poppins">
            DEVELOPERS
          </p>
          <div className="w-full h-56 lg:h-80 relative rounded-2xl">
            <Image
              src={"/developer.png"}
              fill
              style={{ objectFit: "cover" }}
              alt="dev"
              className="w-full rounded-2xl"
            />
            <div className="absolute flex flex-col gap-4 ml-8 bottom-4 lg:w-1/2">
              <p className="text-white text-lg lg:text-xl font-semibold tracking-wider font-poppins">
                Build with the Nextswap Protocol.
              </p>
              <p className="text-white text-base lg:text-lg font-medium tracking-wider font-poppins">
                Dive into the world of DeFi apps, integrations, and developer
                tooling built on top of the Nextswap Protocol.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-4 pt-10">
            <div className={styles.cardClasses}>
              <ExclamationCircleOutlined className={styles.Iconstyle} />
              <p className={styles.cardTitle}>What is Nextswap?</p>
              <p className={styles.cardDescription}>
                Learn about the Nextswap Protocol’s core concepts: Swaps, Pools,
                Concentrated Liquidity, and more.
              </p>
            </div>
            <div className={styles.cardClasses}>
              <FileDoneOutlined className={styles.Iconstyle} />
              <p className={styles.cardTitle}>Smart contracts overview</p>
              <p className={styles.cardDescription}>
                Review the architecture of the Nextswap Protocol smart
                contracts, made up of the Core and Periphery libraries.
              </p>
            </div>
            <div className={styles.cardClasses}>
              <GithubOutlined className={styles.Iconstyle} />
              <p className={styles.cardTitle}>Github</p>
              <p className={styles.cardDescription}>
                Want to make any change in the world! Make your contribution to
                Nextswap Community.
              </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 py-16">
          <div className="flex flex-col gap-4 items-center">
            <p className="text-white text-xl font-poppins font-medium">
              Apply to the Uniswap Grants Program
            </p>
            <p className="text-white text-base text-opacity-60 font-poppins font-medium">
              The Uniswap Grants Program empowers independent builders and
              contributors with resources to experiment. Providing both funding
              and feedback, the Grants team cultivates talent that enriches the
              Uniswap ecosystem experience and sets the Protocol on a path to
              sustainable community-driven growth.
            </p>
          </div>
          <div className="flex lg:justify-center">
            <Image src={"/bounty.svg"} width={280} height={280} alt="uni" />
          </div>
        </div>
      </div>
      <LaunchFooter />
    </div>
  );
}

export default Developers;
