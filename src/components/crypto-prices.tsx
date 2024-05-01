import Image from "next/image";
import React from "react";

export default async function CryptoPrices() {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd"
  );
  const data = await response.json();

  return (
    <div className="FONT-silkscreen flex">
      <span className="b">
        <i className="fa fa-bitcoin" title="$bitcoin"></i>
        {"$" + data.bitcoin.usd.toFixed(0)}
      </span>
      <span className="ml-6">
        <i className="lab la-ethereum " title="$ethereum"></i>
        {"$" + data.ethereum.usd.toFixed(0)}
      </span>
      <span className="flex ml-6">
        <Image
          className="invert dark:invert-0 w-4 h-4 mt-1"
          src="/solana.png"
          alt="logo"
          width={10}
          height={10}
          title="$solana"
        />
        {"$" + data.solana.usd.toFixed(0)}
      </span>
    </div>
  );
}
