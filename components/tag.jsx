import backgroundImage from "../public/pattern.png";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRightOutlined } from "@ant-design/icons";

export default function Tag() {
  const router = useRouter();
  return (
    <>
      <div className="container mx-auto px-3 lg:px-16 mt-24">
        <div
          className={`z-0 px-2 lg:px-10 py-2 mx-auto lg:py-3 text-white font-marryweather tag rounded-xl`}
        >
          <div
            className="z-20"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <div className="z-20 grid lg:grid-cols-3 justify-center md:justify-start gap-4">
              <p className="lg:col-span-2 text-white text-2xl md:text-4xl font-semibold tracking-wider">
                Powered by the Nextswap Protocol
              </p>
              <button
                className=" lg:ml-auto w-1/2 px-2 py-1 bg-transparent rounded-xl text-white font-semibold border hover:border-pink-100 border-white"
                onClick={() => router.push("/transaction")}
              >
                Live Transactions
              </button>
            </div>
            <p className="z-20 pt-6 lg:pt-8 text-white text-md lg:text-lg md:text-xl lg:tracking-wider md:tracking-wider">
              The leading decentralized crypto trading protocol, governed by a
              global community.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export function LaunchTag() {
  const Tags = (value, key) => {
    return (
      <div className="flex flex-col gap-4 justify-center items-center">
        <p className="text-white font-sans font-black text-5xl">{value}</p>
        <p className="text-white font-poppins text-md font-medium">{key}</p>
      </div>
    );
  };

  return (
    <>
      <div className="hidden md:grid w-full mx-auto xl:grid-cols-4 z-30 px-48 pt-14">
        {Tags("$489B+", "Trade Volume")}
        {Tags("71M+", "All Time Trades")}
        {Tags("300+", "Integrations")}
        {Tags("4,400+", "Community Delegates")}
      </div>
      <div className="grid lg:grid-cols-2 gap-10 md:gap-6 px-2 md:px-20 pt-16 md:pt-36">
        <div className="grid gap-2 justify-start xl:w-3/5 text-wrap">
          <a
            className="flex text-white font-poppins cursor-pointer z-30 hover:text-opacity-60 text-2xl font-medium"
            href="/ecosystem"
          >
            NEXTSWAP ECOSYSTEM{" "}
            <ArrowRightOutlined className="ml-1 text-base pt-[2px]" />
          </a>
          <p className="text-white font-semibold text-3xl font-poppins">
            A growing network of DeFi Apps.
          </p>
          <p className="font-poppins text-[#888D9B] text-xl font-medium text-opacity-80">
            Developers, traders, and liquidity providers participate together in
            a financial marketplace that is open and accessible to all.
          </p>
        </div>
        <div className="md:flex lg:justify-end">
          <div className="border-white md:w-5/6 h-[290px] md:h-[264px] rounded-xl z-30 relative bg-center px-3">
            <Image
              src={"/apps.png"}
              fill
              alt="apps"
              style={{ overflow: "hidden", objectFit: "cover" }}
              className="absolute rounded-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export function LaunchingTagTwo() {
  const router = useRouter();
  return (
    <div className="grid lg:grid-cols-3 gap-6 lg:gap-2 px-2 md:px-20 pt-24 md:pt-32">
      <div className="md:col-span-2 rounded-xl z-30 bg-center px-2 border-white h-[353px] md:h-[420px]">
        <a
          className="flex text-white font-poppins cursor-pointer z-30 hover:text-opacity-60 text-2xl font-medium pb-6"
          href="/"
        >
          DEVELOPERS <ArrowRightOutlined className="ml-1 text-base pt-[2px]" />
        </a>
        <div className="w-full h-full relative">
          <Image
            src={"/developer.png"}
            alt="dev"
            fill
            style={{ overflow: "hidden", objectFit: "cover" }}
            className="absolute rounded-2xl"
          />
          <div className="absolute md:bottom-4 md:left-8 px-3 md:px-0 grid gap-4 md:w-3/4 justify-start">
            <p className="text-white text-3xl font-poppins font-medium">
              Superpowers for DeFi developers.
            </p>
            <p className="font-poppins text-[#888D9B] text-xl font-medium text-opacity-90 md:text-opacity-80">
              Build Defi apps and tools on the largest crypto project on
              Ethereum. Get started with quick start guides, protocol
              documentation, a Javascript SDK, and fully open source code.
            </p>
            <button
              onClick={() => router.push("/")}
              className="bg-[#FFFFFF1A] hover:bg-opacity-60 hover:text-opacity-60 font-medium px-1 py-2 rounded-xl text-white font-poppins xl:w-1/4"
            >
              Documentation ↗
            </button>
          </div>
        </div>
      </div>
      <div className="px-3 md:px-4 mt-14 h-full grid justify-start items-start py-2 bg-[#FFFFFF05] border-[1px] border-white border-opacity-20 rounded-2xl">
        <Image
          src={"/unigrants.png"}
          width={150}
          height={150}
          alt="unigrants"
        />
        <p className="text-white text-xl font-medium font-poppins">
          Apply for funding from the Nextswap Grants Program
        </p>
        <p className="font-poppins text-[#888D9B] text-xl font-medium text-opacity-90 md:text-opacity-80">
          Get paid to build the future of finance. Nextswap Governance offers
          grant funding for people building apps, tools, and activities on the
          Nextswap Protocol.
        </p>
      </div>
    </div>
  );
}

export function LaunchingTagThree() {
  const router = useRouter();

  const cardFunctions = () => {
    return "grid justify-center items-center border-[1px] border-white border-opacity-20 rounded-2xl bg-[#FFFFFF05] px-5 md:px-6 py-3 cursor-pointer hover:bg-opacity-60 z-30";
  };

  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-7 px-2 md:px-20 pt-32">
      <div className="rounded-xl z-30 bg-center px-2 border-white h-[353px] md:h-[420px]">
        <a
          className="flex text-white font-poppins cursor-pointer z-30 hover:text-opacity-60 text-2xl font-medium pb-6"
          href="/"
        >
          PROTOCOL GOVERNANCE{" "}
          <ArrowRightOutlined className="ml-1 text-base pt-[2px]" />
        </a>
        <div className="w-full h-full relative">
          <Image
            src={"/defi.avif"}
            alt="dev"
            fill
            style={{ overflow: "hidden", objectFit: "cover" }}
            className="absolute rounded-2xl brightness-50 grayscale"
          />
          <div className="absolute bottom-10 md:bottom-4 md:left-8 px-3 md:px-0 grid gap-4 md:w-3/4 justify-start">
            <p className="text-white text-3xl font-poppins font-medium">
              Governed by the community.
            </p>
            <p className="font-poppins text-[#888D9B] text-xl font-medium text-opacity-90">
              The Nextswap Protocol is managed by a global community of NEXT
              token holders and delegates.
            </p>
            <button
              onClick={() => router.push("/")}
              className="bg-[#FFFFFF1A] hover:bg-opacity-60 hover:text-opacity-60 font-medium px-1 py-2 rounded-xl text-white font-poppins "
            >
              Read more ↗
            </button>
          </div>
        </div>
      </div>
      <div className="mt-14 h-full grid gap-3 py-2">
        <div className={cardFunctions()}>
          <a
            href="/"
            className="text-white text-xl font-medium font-poppins hover:text-opacity-60"
          >
            Governance Forum ↗
          </a>
          <p className="font-poppins text-[#888D9B] text-sm md:text-lg font-semibold text-opacity-90 md:text-opacity-80">
            Participate by proposing upgrades and discussing the future of the
            protocol with the Nextswap community.
          </p>
        </div>
        <div className={cardFunctions()}>
          <a
            href="/"
            className="text-white text-xl font-medium font-poppins hover:text-opacity-60"
          >
            Sybil ↗
          </a>
          <p className="font-poppins text-[#888D9B] text-sm md:text-lg font-semibold text-opacity-90 md:text-opacity-80">
            Vote on offchain proposals with the Snapshot interface. Votes are
            weighted by the number of NEXT delegates.
          </p>
        </div>
        <div className={cardFunctions()}>
          <a
            href="/"
            className="text-white text-xl font-medium font-poppins hover:text-opacity-60"
          >
            Governance Portal ↗
          </a>
          <p className="font-poppins text-[#888D9B] text-sm md:text-lg font-semibold text-opacity-90 md:text-opacity-80">
            Vote on offchain proposals with the Snapshot interface. Votes are
            weighted by the number of NEXT delegates.
          </p>
        </div>
      </div>
    </div>
  );
}
