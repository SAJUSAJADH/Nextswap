"use client";

import React, { useState, useEffect } from "react";
import { Input } from "antd";
import {
  SearchOutlined,
  GithubOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/navigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = `mx-auto bg-white p-6 px-2 ${scrolled ? "border-b" : ""} lg:px-12 fixed w-full z-50`;

  // Class Functions//

  const HeaderNavigations = (nav, link) => {
    return (
      <a
        href={`${link}`}
        className="text-[#7d7d7d] tracking-widest text-md font-roboto font-semibold hover:bg-[#99a1bd14] px-3 py-1 rounded-lg"
      >
        {nav}
      </a>
    );
  };

  const connectButton = () => {
    return (
      <ConnectButton
        label="Connect"
        showBalance="false"
        accountStatus="address"
        chainStatus={{ smallScreen: "none", largeScreen: "full" }}
      />
    );
  };

  return (
    <nav className={navbarClasses}>
      <div className="flex md:grid md:grid-cols-4 lg:gap-28 justify-between items-center ">
        <div className="hidden md:flex justify-between items-center gap-2">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />

          {HeaderNavigations("Swap", "swap")}
          {HeaderNavigations("Send", "send")}
          {HeaderNavigations("Tokens", "explore")}
          {HeaderNavigations("NFTs", "explore")}
        </div>
        <div className="flex md:hidden gap-4 justify-between items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>
        <div className="hidden md:flex justify-center items-center col-span-2 relative">
          <Input
            spellCheck={false}
            className="w-2/3 tracking-widest py-1 pl-10 text-[#7d7d7d] text-md font-roboto font-semibold"
            placeholder="Search tokens and NFT collections"
          />
          <SearchOutlined className="absolute xl:hidden left-28 cursor-pointer text-[#7d7d7d] text-md" />
        </div>
        <div className="hidden md:flex">{connectButton()}</div>
        <div className="flex items-center md:hidden gap-4">
          <div className="bg-[#F9F9F9] border-4 border-white rounded-xl w-9 h-9 flex justify-center items-center">
            <SearchOutlined className="cursor-pointer px-2 text-[#7d7d7d] text-md ml-auto" />
          </div>
          {connectButton()}
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <div className="container mx-auto px-3 lg:px-16 mt-24 py-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className=" flex flex-col gap-2 justify-center items-center">
          <p className="text-lg font-semibold font-sans">App</p>
          <a
            href=""
            className="text-[#7D7D7D] text-base hover:opacity-60 font-semibold tracking-wider"
          >
            Swap
          </a>
          <a
            href=""
            className="text-[#7D7D7D] text-base hover:opacity-60 font-semibold tracking-wider"
          >
            Send
          </a>
          <a
            href=""
            className="text-[#7D7D7D] text-base hover:opacity-60 font-semibold tracking-wider"
          >
            NFTs
          </a>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <p className="text-lg font-semibold font-sans">Get help</p>
          <a
            href=""
            className="text-[#7D7D7D] text-base hover:opacity-60 font-semibold tracking-wider"
          >
            Contact us
          </a>
          <a
            href=""
            className="text-[#7D7D7D] text-base hover:opacity-60 font-semibold tracking-wider"
          >
            Help centre
          </a>
        </div>
        <div className=" md:order-first col-span-2 flex flex-col justify-center items-center">
          <div className="flex gap-4 justify-center items-center">
            <GithubOutlined className="text-4xl opacity-40 hover:opacity-100 cursor-pointer" />
            <TwitterOutlined className="text-4xl opacity-40 hover:opacity-100 cursor-pointer" />
            <LinkedinOutlined className="text-4xl opacity-40 hover:opacity-100 cursor-pointer" />
          </div>
          <p className="text-base text-[#CECECE] mt-4">
            &copy;2024 Nextswap Lab
          </p>
        </div>
      </div>
    </div>
  );
}
