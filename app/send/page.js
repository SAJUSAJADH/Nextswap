"use client";

import { contractABI, contractAddress } from "@/utils/constants";
import React, { useState, useEffect } from "react";
import { Header, MiniHeader } from "@/components/navigations";
import { useAccount, useSendTransaction, useWaitForTransaction } from "wagmi";
import { parseEther } from "viem";
import { ethers, formatEther } from "ethers";
import { Spin } from "antd";

const Send = () => {
  const { address, isConnected } = useAccount();
  const [balanceAndnetwork, setBalanceAndNetwork] = useState("");
  const [FormData, setFormData] = useState({
    addressTo: "",
    amount: "",
    message: "",
  });
  const { addressTo, amount, message } = FormData;
  const { data: hash, sendTransaction, isLoading } = useSendTransaction();
  const [transactionCount, setTransactionCount] = useState(() => {
    if (typeof window !== "undefined") {
      return parseInt(localStorage.getItem("transactionCount")) || 0;
    }

    return 0;
  });

  useEffect(() => {
    async function fetchBalanceAndNetwork() {
      try {
        let ethereum;
        if (typeof window !== "undefined") {
          ethereum = window.ethereum;
        }

        const provider = new ethers.BrowserProvider(ethereum);
        const balanceInWei = await provider.getBalance(address);
        const balanceInString = formatEther(balanceInWei);
        const balance = Number(balanceInString);
        const { name } = await provider.getNetwork();
        setBalanceAndNetwork(`Balance: ${balance.toFixed(2)} ${name}`);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    }

    if (isConnected) {
      fetchBalanceAndNetwork();
    }
  }, [isConnected, address]);

  const getEthereumContract = async () => {
    const provider = new ethers.BrowserProvider(ethereum);

    const signer = await provider.getSigner();

    const transactionContract = new ethers.Contract(
      contractAddress,
      contractABI,
      signer,
    );

    return transactionContract;
  };

  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const makeTransaction = async (e) => {
    e.preventDefault();

    try {
      if (!addressTo || !amount || isLoading || !isConnected) {
        console.log("no required values");
        return;
      }
      await sendTransaction({ to: addressTo, value: parseEther(amount) });

      const amountAsBigInt = BigInt(Math.floor(amount * 1e18));

      const transactionContract = await getEthereumContract();

      const transactionHash = await transactionContract.addToBlockchain(
        addressTo,
        amountAsBigInt,
        message,
      );

      const transactionCount = await transactionContract.getTransactionCount();

      setTransactionCount(Number(transactionCount));

      setFormData({
        addressTo: "",
        amount: "",
        message: "",
      });
    } catch (error) {
      console.log("Transaction failed due to ", error);
      setFormData({
        addressTo: "",
        amount: "",
        message: "",
      });
    }
  };

  return (
    <div>
      <Header />
      <MiniHeader />
      <div className="container flex flex-col min-h-screen justify-center px-3 mx-auto items-center">
        <div className="border border-[#2222221A] rounded-xl px-3 py-3 w-full lg:w-1/3 z-10 shadow-md">
          <div className="flex">
            <p className="text-xl font-sans mb-2">Send</p>
          </div>
          <div className="flex flex-col gap-2 mb-2 relative">
            <label className="">Recipient Address</label>
            <input
              spellCheck={false}
              placeholder="0x000000000000000000000000000000000000000"
              className="px-2 text-lg h-12 font-bold relative bg-[#F9F9F9] outline-none rounded-2xl"
              value={addressTo}
              onChange={(e) => handleChange(e, "addressTo")}
            />
            <label className="">Amount</label>
            <input
              type="number"
              spellCheck={false}
              placeholder="0.00 ETH"
              className="px-2 text-lg h-12 font-bold relative bg-[#F9F9F9] outline-none rounded-2xl"
              value={amount}
              onChange={(e) => handleChange(e, "amount")}
            />
            <p className="text-[#FF4FB8] text-sm font-bold italic">{`${balanceAndnetwork}`}</p>
            <label className="message">Message</label>
            <textarea
              spellCheck={false}
              rows={3}
              style={{ resize: "none" }}
              placeholder="message"
              className="px-2 text-lg pt-2 font-bold relative bg-[#F9F9F9] outline-none rounded-2xl"
              value={message}
              onChange={(e) => handleChange(e, "message")}
            />
          </div>
          <button
            className="text-[#fff] font-semibold text-center w-full rounded-xl bg-[#FC72FF] py-4 text-xl cursor-pointer hover:bg-pink-400"
            onClick={makeTransaction}
          >
            {isLoading ? <Spin style={{ color: "white" }} /> : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Send;
