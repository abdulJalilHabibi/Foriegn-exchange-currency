import { useEffect, useState } from "react";

export function useExchageRate(
  fromSelectedCurrency,
  toSelectedCurrency,
  amount,
) {
  const [rate, setRate] = useState(null);
  const [previousRate, setPreviousRate] = useState(null);

  useEffect(() => {
    async function currency() {
      const currentRes = await fetch(
        `https://api.frankfurter.dev/v2/rate/${fromSelectedCurrency}/${toSelectedCurrency}`,
      );

      const currentData = await currentRes.json();

      setRate(currentData.rate);

      const previousDate = new Date();
      previousDate.setDate(previousDate.getDate() - 1);

      const date = previousDate.toISOString().split("T")[0];

      const previousRes = await fetch(
        `https://api.frankfurter.dev/v2/rate/${fromSelectedCurrency}/${toSelectedCurrency}?date=${date}`,
      );

      const previousData = await previousRes.json();

      setPreviousRate(previousData.rate);
    }

    currency();
  }, [fromSelectedCurrency, toSelectedCurrency]);

  const result = amount && rate ? (Number(amount) * rate).toFixed(2) : "";

  const changePercent =
    rate && previousRate ? ((rate - previousRate) / previousRate) * 100 : null;

  return {
    result,
    rate,
    changePercent,
  };
}
