import abi from "./abi.json";

export const contractABI = abi.abi;

export const contractAddress = "0x0174aE013a8a0C2327c5d8DE697E87591f7c9FB8";

export const navigate = () => {
    if (typeof window !== "undefined") {
      window.open("/launch", "_blank")
    }
  }
