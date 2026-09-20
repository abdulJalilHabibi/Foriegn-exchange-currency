import { useState } from "react";

export default function useCurrency() {
  const [isOpen, setIsOpen] = useState(false);
  const [isReceiveOpen, setIsReceiveOpen] = useState(false);

  const [searchFrom, setSearchFrom] = useState("");
  const [searchTo, setSearchTo] = useState("");

  const [fromSelectedCurrency, setFromSelectedCurrency] = useState("USD");
  const [toSelectedCurrency, setToSelectedCurrency] = useState("AFN");

  function handleSenderOpen() {
    setIsOpen(!isOpen);
    setIsReceiveOpen(false);
    setSearchFrom("");

  }
  function handleReceiverOpen() {
    setIsReceiveOpen(!isReceiveOpen);
    setIsOpen(false);
    setSearchTo("");

  }

  return {
    isOpen,
    setIsOpen,
    isReceiveOpen,
    setIsReceiveOpen,
    searchFrom,
    setSearchFrom,
    searchTo,
    setSearchTo,
    fromSelectedCurrency,
    setFromSelectedCurrency,
    toSelectedCurrency,
    setToSelectedCurrency,
    handleSenderOpen,
    handleReceiverOpen,
  };
}
