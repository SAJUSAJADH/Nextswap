import { useRouter } from "next/navigation";

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
