import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  TwitterOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { navigate } from "@/utils/constants";

export function Hero() {
  const router = useRouter();
  return (
    <div className="container w-full mx-auto px-8 lg:px-32 flex flex-col justify-center gap-4 lg:gap-6 items-center min-h-screen">
      <div className="flex flex-col gap-3">
        <p className="text-[#FF4FB8] text-2xl lg:text-6xl font-bold font-marryweather text-center">
          Swap and Send crypto
        </p>
        <p className="text-[#FF4FB8] text-2xl lg:text-6xl font-bold font-marrtweather text-center">
          with confidense
        </p>
      </div>
      <p className="text-lg md:text-xl text-[#7D7D7D] font-marryweather text-center lg:leading-relaxed pb-2">
        Swap, send, and explore tokens and NFTs
      </p>
      <button
        className="text-xl bg-pink-500 hover:bg-pink-600 text-white rounded-xl px-4 py-2"
        onClick={() => router.push("/swap")}
      >
        Get started
      </button>
      <a
        href="/transaction"
        className="text-lg md:text-xl text-[#7D7D7D] font-marryweather text-center lg:leading-relaxed"
      >
        View Transactions
      </a>
    </div>
  );
}

export function LaunchHero() {
  const router = useRouter();
  return (
    <div className="w-full min-h-screen relative bg-[#191b1f]">
      <Image
        src="/unicorn.png"
        alt="Background Image"
        width={550}
        height={0}
        className="absolute top-[-3px] md:top-16 left-[-60px] md:left-1 z-10 bg-auto"
      />
      <Image
        src="/background.svg"
        alt="Background Image"
        fill
        style={{ objectFit: "cover" }}
        className="z-20"
      />
      <div className="flex flex-col md:w-3/5 gap-8 md:gap-6 z-30 absolute bottom-[188px] md:bottom-14 mx-auto px-2 md:px-20">
        <p className="font-poppins font-medium text-3xl md:text-6xl text-wrap text-white">
          NEXTSWAP
          <span className="font-black fond-poppins text-3xl md:text-6xl ml-3 md:ml-5">
            PROTOCOL
          </span>
        </p>
        <p className="font-poppins font-light text-2xl text-wrap text-white">
          Swap, and send on the leading decentralized crypto trading protocol.
        </p>
        <button
          onClick={() => navigate("/launch")}
          className="flex lg:hidden w-32 px-4 py-3 rounded-lg text-[#FFFFFF] launch-button hover:opacity-80 z-10 shadow-lg"
        >
          Launch App
        </button>
        <span className="flex gap-6 text-white text-3xl">
          <TwitterOutlined
            onClick={() => navigate("https://twitter.com/CrypExplorer")}
            className="hover:opacity-60 cursor-pointer"
          />
          <GithubOutlined
            onClick={() => navigate("https://github.com/SAJUSAJADH")}
            className="hover:opacity-60 cursor-pointer"
          />
          <LinkedinOutlined
            onClick={() => navigate("https://www.linkedin.com/in/sajusajadh/")}
            className="hover:opacity-60 cursor-pointer"
          />
        </span>
      </div>
    </div>
  );
}
