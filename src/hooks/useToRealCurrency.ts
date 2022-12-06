/* eslint-disable react-hooks/exhaustive-deps */
import i18next from "i18next";
import { useEffect, useState } from "react";
import { currencies } from "../utils/currency";
import { toPrecision } from "../utils/stringFormatter";

// rl = real life
export const useToRealCurrency = (price: string = "0") => {
  const [rlPrice, setRLPrice] = useState(price);
  const prefix = ["en"];
  useEffect(() => {
    const currentLng = i18next.language;
    const formattedPrice = toPrecision(price, 2, true);
    if (prefix.includes(currentLng)) {
      return setRLPrice(currencies[currentLng] + formattedPrice);
    }
    setRLPrice(formattedPrice + currencies[currentLng]);
  }, [i18next.language]);
  return { rlPrice };
};
