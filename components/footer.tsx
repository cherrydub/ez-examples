import React from "react";
import Marquee from "react-fast-marquee";
import CryptoPrices from "@/components/crypto-prices";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <Marquee pauseOnHover>
        <CryptoPrices />
      </Marquee>
    </footer>
  );
}
