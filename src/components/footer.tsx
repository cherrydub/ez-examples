// Footer.server.jsx

// import fetch from "node-fetch";

// export async function getFooterData() {
//   try {
//     const response = await fetch(
//       "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd"
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching prices:", error);
//     return {};
//   }
// }

export default function Footer({}) {
  const prices = {
    bitcoin: { usd: 57807 },
    ethereum: { usd: 2910.8 },
    solana: { usd: 123.7 },
  };
  return (
    <footer className="overflow-hidden">
      <div className="marquee-container">
        {Object.entries(prices).map(([crypto, { usd }]) => (
          <span key={crypto} className="marquee-item">
            {crypto === "bitcoin" && (
              <i className="fa fa-bitcoin" title="$bitcoin"></i>
            )}
            {crypto === "ethereum" && (
              <i className="lab la-ethereum ml-6" title="$ethereum"></i>
            )}
            {crypto === "solana" && (
              <img
                className="ml-6 sol-icon"
                style={{ height: "15px", display: "inline-block" }}
                src="/icons8-solana-64.png"
                alt=""
                title="$Solana"
              />
            )}
            {` = $${usd.toFixed(0)}`}
          </span>
        ))}
      </div>
    </footer>
  );
}
