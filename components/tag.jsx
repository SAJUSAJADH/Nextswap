import backgroundImage from "../public/pattern.png";
import { useRouter } from "next/navigation";

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
              <p className="lg:col-span-2 text-white text-2xl md:text-4xl font-semibold tracking-widest">
                Powered by the Nextswap Protocol
              </p>
              <button
                className=" lg:ml-auto w-1/2 px-2 py-1 bg-transparent rounded-xl text-white font-semibold border hover:border-pink-100 border-white"
                onClick={() => router.push("/transaction")}
              >
                Live Transactions
              </button>
            </div>
            <p className="z-20 pt-6 lg:pt-8 text-white text-md lg:text-lg md:text-xl lg:tracking-wider md:tracking-widest">
              The leading decentralized crypto trading protocol, governed by a
              global community.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
