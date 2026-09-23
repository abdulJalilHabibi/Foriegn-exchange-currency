import { useEffect, useState } from "react";

const todayDate = "2026-09-23";
export default function useHistoryRate(
  senderCurrency,
  receiverCurrency,
  historyDate,
) {
  const [historyRate, setHistoryRate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCurrency() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.dev/v2/rates?base=${senderCurrency}&quotes=${receiverCurrency}&from=${historyDate}&to=${todayDate}`,
        );
        const data = await res.json();

        setHistoryRate(data);
      } catch {
        setError("Failed to load history data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCurrency();
  }, [senderCurrency, receiverCurrency, historyDate]);

  return { historyRate, isLoading, error };
}
