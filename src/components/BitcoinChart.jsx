import React, { useState, useEffect } from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

const BitcoinChart = () => {
  const symbols = [
    "BTC",
    "ETH",
    "BNB",
    "ADA",
    "SOL",
    "XRP",
    "AVAX",
    "DOGE",
    "DOT",
    "TRX",
    "MATIC",
    "LINK",
    "SHIB",
    "ICP",
    "LTC",
    "BCH",
    "UNI",
    "ATOM",
    "XLM",
    "FIL",
    "NEAR",
    "OP",
    "ETC",
    "APT",
    "STX",
    "ARB",
    "GMT",
    "EOS",
  ];
  const [currentSymbolIndex, setCurrentSymbolIndex] = useState(0);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowRight") {
        setCurrentSymbolIndex((prevIndex) => (prevIndex + 1) % symbols.length);
      }
      if (event.key === "ArrowLeft") {
        setCurrentSymbolIndex((prevIndex) => (prevIndex - 1) % symbols.length);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="h95vh">
      <TradingViewWidget
        symbol={`${symbols[currentSymbolIndex]}USDT`}
        theme={Themes.DARK}
        locale="ko"
        autosize
        enable_publishing
      />
    </div>
  );
};

export default BitcoinChart;
