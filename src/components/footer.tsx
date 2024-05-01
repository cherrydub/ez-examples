import React from "react";
import Marquee from "react-fast-marquee";
import CryptoPrices from "./crypto-prices";
import LatestPush from "./latest-push";

export default function Footer() {
  return (
    <footer className="border-t">
      <Marquee pauseOnHover>
        <CryptoPrices />
        {/* <LatestPush /> */}
      </Marquee>
    </footer>
  );
}
