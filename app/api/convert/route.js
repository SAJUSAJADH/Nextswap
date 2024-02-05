import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  const { tokenOne, tokenTwo, tokenOneAmount, address, slippage } =
    await request.json();
  const amount = tokenOneAmount.padEnd(
    tokenOne.decimals + tokenOneAmount.length,
    "0",
  );

  const swapURL = "https://api.1inch.dev/swap/v5.2/1/swap";
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_1INCH_API_KEY}`,
    },
    params: {
      src: tokenOne.address,
      dst: tokenTwo.address,
      amount: amount,
      from: address,
      slippage: slippage,
    },
  };

  try {
    const { data } = await axios.get(swapURL, config);
    const response = NextResponse.json({ data });
    return response;
  } catch (e) {
    const response = NextResponse.json({
      message: `cannot get approval at this time - ${e}`,
    });

    return response;
  }
}
