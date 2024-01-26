import Image from "next/image";
import { useRouter } from "next/navigation";

export function Functions() {
  const router = useRouter();
  return (
    <>
      <div id="functions" className="mx-auto container px-3 lg:px-16">
        <div className=" mt-4 grid lg:grid-cols-2 gap-4">
          <div
            className="bg-white container shadow-xl hover:border-2 rounded-xl cursor-pointer grid grid-cols-3 md:grid-cols-2 py-2"
            onClick={() => router.push("/swap")}
          >
            <div className="pl-8 col-span-2 md:col-span-1 space-y-16 flex flex-col justify-between px-2">
              <div className="pt-2">
                <p className="text-2xl font-poppins font-black">Swap tokens</p>
              </div>
              <div className="mt-auto">
                <p className="text-md md:text-xl font-poppins font-semibold pb-1 tracking-widest">
                  Swap, send and explore tokens on Ethereum.
                </p>
                <p className="text-pink-500 text-md md:text-xl font-sans font-semibold text-justify">
                  Trade tokens
                </p>
              </div>
            </div>
            <div className="">
              <Image
                src={"/swapcard.png"}
                alt="swapcard"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div
            className="bg-white container shadow-xl hover:border-2 rounded-xl cursor-pointer grid grid-cols-3 md:grid-cols-2 py-2"
            onClick={() => router.push("/send")}
          >
            <div className="pl-8 col-span-2 md:col-span-1 space-y-16 flex flex-col justify-between px-2">
              <div className="pt-2">
                <p className="text-2xl font-poppins font-black">Send tokens</p>
              </div>
              <div className="mt-auto">
                <p className="text-md md:text-xl font-poppins font-semibold text-justify pb-1 tracking-widest">
                  Send Crypto across the world.
                </p>
                <p className="text-pink-500 text-md md:text-xl font-sans font-semibold text-justify">
                  Transfer tokens
                </p>
              </div>
            </div>
            <div className="">
              <Image
                src={"/swapcard-2.png"}
                alt="swapcard"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Features() {
  const router = useRouter();
  return (
    <>
      <div className="mx-auto container px-3 lg:px-16">
        <div className=" mt-10 grid lg:grid-cols-3 gap-4">
          <div
            className="bg-white container shadow-xl hover:border-2 rounded-xl cursor-pointer grid grid-cols-3 py-2"
            onClick={() => router.push("/swap")}
          >
            <div className="pl-8 col-span-2 flex flex-col justify-between px-2 space-y-16">
              <div className="pt-2">
                <p className="text-2xl font-poppins font-black">Swap tokens</p>
              </div>
              <div className="mt-auto">
                <p className="text-md md:text-xl font-poppins font-semibold pb-1 tracking-widest">
                  Swap, send and explore tokens on Ethereum.
                </p>
                <p className="text-pink-500 text-md md:text-xl font-sans font-semibold text-justify">
                  Trade tokens
                </p>
              </div>
            </div>
            <div className="ml-auto">
              <Image
                src={"/dollar.svg"}
                alt="swapcard"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div
            className="bg-white container shadow-xl hover:border-2 rounded-xl cursor-pointer grid grid-cols-3 py-2"
            onClick={() => router.push("/send")}
          >
            <div className="pl-8 col-span-2 flex flex-col justify-between px-2 space-y-16">
              <div className="pt-2">
                <p className="text-2xl font-poppins font-black">Send tokens</p>
              </div>
              <div className="mt-auto">
                <p className="text-md md:text-xl font-poppins font-semibold pb-1 tracking-widest">
                  Send Crypto across the world.
                </p>
                <p className="text-pink-500 text-md md:text-xl font-sans font-semibold text-justify">
                  Transfer tokens
                </p>
              </div>
            </div>
            <div className="ml-auto mx-3">
              <Image src={"/arrow.png"} alt="swapcard" width={50} height={50} />
            </div>
          </div>
          <div
            className="bg-white container shadow-xl hover:border-2 rounded-xl cursor-pointer grid grid-cols-3 py-2"
            onClick={() => router.push("/explore")}
          >
            <div className="pl-8 col-span-2 flex flex-col justify-between px-2 space-y-16">
              <div className="pt-2">
                <p className="text-2xl font-poppins font-black">Explore Tokens</p>
              </div>
              <div className="mt-auto">
                <p className="text-md md:text-xl font-poppins font-semibold pb-1 tracking-widest">
                  Explore tokens and NFTs on Ethereum.
                </p>
                <p className="text-pink-500 text-md md:text-xl font-sans font-semibold text-justify">
                  Explore NFTs
                </p>
              </div>
            </div>
            <div className="ml-auto">
              <Image
                src={"/explore.svg"}
                alt="swapcard"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
