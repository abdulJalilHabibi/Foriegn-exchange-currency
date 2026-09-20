import { useEffect, useRef, useState } from "react";

export default function useAmountInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const [isHovered, setIsHovered] = useState(false);
  const [inputWidth, setInputWidth] = useState(20);

  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      setInputWidth(textRef.current.getBoundingClientRect().width);
    }
  }, [value]);

  function handleChange(e) {
    const newValue = e.target.value;

    if (/^\d*\.?\d*$/.test(newValue)) {
      setValue(newValue);
    }
  }

  return {
    value,
    setValue,
    isHovered,
    setIsHovered,
    inputWidth,
    textRef,
    handleChange,
  };
}
