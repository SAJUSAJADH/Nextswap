import { LandingNav, LaunchFooter } from "@/components/navigations";
import React from "react";

function FAQ() {
  return (
    <div className="landing-page ">
      <LandingNav route={"FAQ"} />
      <div className="min-h-screen pt-40 px-3 md:px-44">
        <div className="w-full flex">
          <p className="text-white text-xl md:text-2xl font-semibold tracking-wider font-poppins">
            Frequently Asked Questions
          </p>
        </div>
        <div className="w-full flex flex-col gap-5 border-white border-b border-opacity-20 py-16">
          <p className="text-white text-lg md:text-xl font-semibold tracking-wider font-poppins">
            What is Nextswap Protocol?
          </p>
          <p className="text-white text-base md:text-lg font-medium text-opacity-60 tracking-wider font-poppins">
            The Nextswap Protocol is an open-source protocol for providing
            liquidity and trading ERC20 tokens on Ethereum. It eliminates
            trusted intermediaries and unnecessary forms of rent extraction,
            allowing for safe, accessible, and efficient exchange activity. The
            protocol is non-upgradable and designed to be censorship resistant.
          </p>
          <p className="text-white text-base md:text-lg font-medium text-opacity-60 tracking-wider font-poppins">
            The Nextswap Protocol and the Nextswap Interface were developed by
            Nextswap Labs.
          </p>
          <p className="text-white text-base md:text-lg font-medium text-opacity-60 tracking-wider font-poppins">
            Check out the Introduction section of our docs for more info on the
            different roles played by Labs, the Interface, and the Protocol.
          </p>
        </div>
        <div className="w-full flex flex-col gap-5 border-white border-b border-opacity-20 py-16">
          <p className="text-white text-lg md:text-xl font-semibold tracking-wider font-poppins">
            How does Nextswap Protocol work?
          </p>
          <p className="text-white text-base md:text-lg font-medium text-opacity-60 tracking-wider font-poppins">
            Nextswap is an automated market maker. In practical terms, it is a
            collection of smart contracts that define a standard way to create
            liquidity pools, provide liquidity, and swap assets.
          </p>
          <p className="text-white text-base md:text-lg font-medium text-opacity-60 tracking-wider font-poppins">
            Each liquidity pool contains two assets. The pools keep track of
            aggregate liquidity reserves and the pre-defined pricing strategies
            set by liquidity providers. Reserves and prices are updated
            automatically every time someone trades. There is no central order
            book, no third-party custody, and no private order matching engine.
          </p>
          <p className="text-white text-base md:text-lg font-medium text-opacity-60 tracking-wider font-poppins">
            Because reserves are automatically rebalanced after each trade, a
            Nextswap pool can always be used to buy or sell a token — unlike
            traditional exchanges, traders do not need to match with individual
            counterparties to complete a trade. For a more in-depth description,
            check out the Concepts from the documentation.
          </p>
        </div>
        <div className="w-full flex flex-col gap-5 py-16">
          <p className="text-white text-lg md:text-xl font-semibold tracking-wider font-poppins">
            How do I use the Nextswap Protocol?
          </p>
          <p className="text-white text-base md:text-lg font-medium text-opacity-60 tracking-wider font-poppins">
            To create a new liquidity pool, provide liquidity, swap tokens, or
            vote on governance proposals, head over to the Nextswap Interface
            and connect a Web3 wallet. Remember, each transaction on Ethereum
            costs Ether (ETH). For a more detailed walkthrough, check out our
            Help Guides.
          </p>
          <p className="text-white text-base md:text-lg font-medium text-opacity-60 tracking-wider font-poppins">
            If you’re a developer interested in building on top of the Nextswap
            Protocol, please refer to our extensive docs.
          </p>
        </div>
      </div>
      <LaunchFooter />
    </div>
  );
}

export default FAQ;
