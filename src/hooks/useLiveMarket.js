import { useEffect, useState } from "react";

export default function useLiveMarket(marketPairs) {
  const [currnecyMarket, setCurrencyMatrket] = useState([]);

  useEffect(() => {
    const req = marketPairs.map((market) => {
      return fetch(
        `https://api.frankfurter.dev/v2/rate/${market[0]}/${market[1]}?`,
      );
    });
    Promise.all(req).then((res) => {
      return Promise.all(res.map((res) => res.json())).then((data) =>
        setCurrencyMatrket(data),
      );
    });
  }, [marketPairs]);

  return currnecyMarket;
}
