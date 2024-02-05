import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  const { tokenOne, address } = await request.json();

  const apiUrl = "https://api.1inch.dev/swap/v5.2/1/approve/allowance";
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_1INCH_API_KEY}`,
    },
    params: {
      tokenAddress: tokenOne.address,
      walletAddress: address,
    },
  };

  try {
    const { data } = await axios.get(apiUrl, config);
    const response = NextResponse.json({ data });
    return response;
  } catch (e) {
    const response = NextResponse.json({
      message: `cannot get allowance at this time - ${e}`,
    });

    return response;
  }
}
