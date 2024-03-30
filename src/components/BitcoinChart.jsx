// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BINANCE:BTCUSDT",
          "interval": "D",
          "timezone": "Asia/Seoul",
          "theme": "dark",
          "style": "1",
          "locale": "kr",
          "enable_publishing": false,
          "withdateranges": true,
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "watchlist": [
            "KRX:035420",
            "KRX:035720",
            "KRX:095570",
            "KRX:005930",
            "KRX:112040",
            "KRX:086520",
            "KRX:005380",
            "KRX:068270",
            "KRX:000270",
            "KRX:067160",
            "KRX:373220"
          ],
          "details": true,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);

    return () => {
      container.current.removeChild(script); // Remove the script when component unmounts
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: "100%", width: "100%" }}
    ></div>
  );
}

export default memo(TradingViewWidget);
