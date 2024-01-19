"use client";

import { unstable_noStore as noStore } from "next/cache";
import { Header } from "@/components/navigations";
import React, { useState, useEffect, useRef } from "react";
import { Popover, Radio, Modal } from "antd";
import {
  ArrowDownOutlined,
  DownOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import tokenList from "../../utils/tokenList.json";
import Moralis from "moralis";
import { useAccount } from "wagmi";
import { useSendTransaction, useWaitForTransaction } from "wagmi";
import axios from "axios";

export default function Swap() {
  const [slippage, setSlippage] = useState(2.5);
  const [tokenOneAmount, setTokenOneAmount] = useState("");
  const [tokenTwoAmount, setTokenTwoAmount] = useState("");
  const [tokenOne, setTokenOne] = useState(tokenList[0]);
  const [tokenTwo, setTokenTwo] = useState(tokenList[2]);
  const [isOpen, setIsOpen] = useState(false);
  const [changeToken, setChangeToken] = useState(1);
  const moralisInstance = useRef(null);
  const [prices, setPrices] = useState(null);
  const { address, isConnected } = useAccount();
  const [txDetails, setTxDetails] = useState({
    to: null,
    data: null,
    value: null,
  });
  const { data, sendTransaction } = useSendTransaction({
    request: {
      from: address,
      to: String(txDetails.to),
      data: String(txDetails.data),
      value: String(txDetails.value),
    },
  });

  async function dexSwap() {
    try {
      const apiUrl = `https://api.1inch.io/v5.0/1/approve/allowance?tokenAddress=${tokenOne.address}&walletAddress=${address}`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      };
      const response = await fetch(apiUrl, options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error calling API:", error);
    }
  }

  async function getPrice(tokenOneAddress, tokenTwoAddress) {
    noStore();
    try {
      const responseOne = await Moralis.EvmApi.token.getTokenPrice({
        chain: "0x1",
        address: tokenOneAddress,
      });
      const responseTwo = await Moralis.EvmApi.token.getTokenPrice({
        chain: "0x1",
        address: tokenTwoAddress,
      });
      const usdPrices = {
        tokenOneprice: responseOne.raw.usdPrice,
        tokenTwoprice: responseTwo.raw.usdPrice,
        ratio: responseOne.raw.usdPrice / responseTwo.raw.usdPrice,
      };
      await setPrices(usdPrices);
    } catch (error) {
      const saveErrorlog = error;
      // console.error(saveErrorlog)
    }
  }

  function handleSlippageChange(ev) {
    setSlippage(ev.target.value);
  }

  function changeAmount(e) {
    const { value } = e.target;

    if (
      /^\d*\.?\d*$/.test(value) ||
      e.key === "Backspace" ||
      (e.key === "." && value.indexOf(".") === -1)
    ) {
      setTokenOneAmount(value || "");
    } else {
      e.preventDefault();
    }
    if (e.target.value && prices) {
      setTokenTwoAmount((e.target.value * prices.ratio).toFixed(2));
    } else {
      setTokenTwoAmount("");
    }
  }

  const switchToken = () => {
    setPrices(null);
    setTokenOneAmount("");
    setTokenTwoAmount("");
    const one = tokenOne;
    const two = tokenTwo;
    setTokenOne(two);
    setTokenTwo(one);
    getPrice(two.address, one.address);
  };

  function openModal(asset) {
    setChangeToken(asset);
    setIsOpen(true);
  }

  function modifyToken(i) {
    setPrices(null);
    setTokenOneAmount("");
    setTokenTwoAmount("");
    if (changeToken === 1) {
      setTokenOne(tokenList[i]);
      getPrice(tokenList[i].address, tokenTwo.address);
    } else {
      setTokenTwo(tokenList[i]);
      getPrice(tokenOne.address, tokenList[i].address);
    }
    setIsOpen(false);
  }

  useEffect(() => {
    if (txDetails.to && isConnected) {
      sendTransaction();
      console.log();
    }
  }, [txDetails]);

  useEffect(() => {
    (async () => {
      try {
        if (moralisInstance.current === null) {
          moralisInstance.current = await Moralis.start({
            apiKey: process.env.NEXT_PUBLIC_MORALIS_API_KEY,
          });
        } else {
          return;
        }
      } catch (error) {
        console.error("Error initializing Moralis:", error);
      }
    })();
  }, []);

  useEffect(() => {
    getPrice(tokenList[0].address, tokenList[2].address);
  }, []);

  const settings = (
    <>
      <div className="font-bold mb-2">Slippage Tolerance</div>
      <div>
        <Radio.Group value={slippage} onChange={handleSlippageChange}>
          <Radio.Button value={0.5}>0.5%</Radio.Button>
          <Radio.Button value={2.5}>2.5%</Radio.Button>
          <Radio.Button value={5}>5.0%</Radio.Button>
        </Radio.Group>
      </div>
    </>
  );

  return (
    <>
      <Header />
      <div className="container flex flex-col min-h-screen justify-center px-3 mx-auto items-center">
        <Modal
          open={isOpen}
          footer={null}
          onCancel={() => setIsOpen(false)}
          title="Select a token"
        >
          <div className="max-h-[60vh] overflow-y-auto scrollbar-thumb-[#FF4FB8]">
            <div className="flex flex-col justify-center">
              {tokenList?.map((e, i) => {
                return (
                  <div
                    className="flex gap-2 border-b-2 py-2 cursor-pointer hover:bg-[#98A1C033] pl-2"
                    key={i}
                    onClick={() => modifyToken(i)}
                  >
                    <img src={e.img} alt={e.ticker} className="h-10" />
                    <div className="flex gap-2">
                      <div className="text-lg font-marryweather text-gray-800">
                        {e.name}
                      </div>
                      <div className="font-marryweather text-base ">
                        ({e.ticker})
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Modal>
        <div className="border border-[#2222221A] rounded-xl px-3 py-3 w-full lg:w-1/3 z-10 shadow-md">
          <div className="flex">
            <p className="text-xl font-sans mb-2">Swap</p>
            <Popover
              title="Settings"
              content={settings}
              trigger={"click"}
              placement="bottomRight"
              className="font-bold text-xl"
            >
              <SettingOutlined className="ml-auto mb-2 text-[#7D7D7D] hover:opacity-80 hover:rotate-90 ease-in duration-300 cursor-pointer" />
            </Popover>
          </div>
          <div className="flex flex-col gap-2 mb-2 relative">
            <input
              placeholder="0"
              className="px-4 h-32 text-3xl pr-32 font-bold relative bg-[#F9F9F9] outline-none rounded-2xl"
              value={tokenOneAmount}
              onChange={changeAmount}
              disabled={!prices}
            />
            <input
              placeholder="0"
              className="px-4 h-32 text-3xl pr-32 font-bold relative bg-[#F9F9F9] outline-none rounded-2xl"
              value={tokenTwoAmount}
              disabled={true}
            />
            <div className="absolute bg-[#F9F9F9] border-4 border-white rounded-xl w-9 h-9 top-28 right-36 md:right-52 flex justify-center items-center">
              <ArrowDownOutlined onClick={switchToken} className="" />
            </div>
            <div
              onClick={() => openModal(1)}
              className="absolute min-w-28 min-h-10 bg-[#ffff] hover:bg-[#F9F9F9] border z-20 shadow-sm cursor-pointer top-11 right-2 rounded-full flex justify-center gap-1 items-center font-bold text-base"
            >
              <img src={tokenOne.img} alt="tokenOne" className="h-5 ml-1" />
              <p className="">{tokenOne.ticker}</p>
              <DownOutlined />
            </div>
            <div
              onClick={() => openModal(2)}
              className="absolute min-w-28 min-h-10 bg-[#ffff] hover:bg-[#F9F9F9] border z-20 shadow-sm cursor-pointer top-44 right-2 rounded-full flex justify-center gap-1 items-center font-bold text-base"
            >
              <img src={tokenTwo.img} alt="tokenOne" className="h-5 ml-1" />
              <p className="">{tokenTwo.ticker}</p>
              <DownOutlined />
            </div>
          </div>
          <button
            className="text-[#fff] font-semibold text-center w-full rounded-xl bg-[#FC72FF] py-4 text-xl cursor-pointer hover:bg-pink-400"
            disabled={!tokenOneAmount || !isConnected}
            onClick={dexSwap}
          >
            Swap
          </button>
        </div>
      </div>
    </>
  );
}
