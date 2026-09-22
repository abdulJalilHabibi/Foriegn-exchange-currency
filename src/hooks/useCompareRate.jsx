import { useEffect, useState } from "react";

export default function useCompareRate(toCurrency) {
  const [compareResult, setCompareResult] = useState([]);

  useEffect(() => {
    const request = toCurrency.map((currency) => {
      return fetch(`https://api.frankfurter.dev/v2/rate/USD/${currency}`);
    });
    Promise.all(request).then((res) => {
      return Promise.all(res.map((res) => res.json())).then((data) =>
        setCompareResult(data),
      );
    });
  }, [toCurrency]);

  return compareResult;
}
