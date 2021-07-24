import { createContext } from "react";

export const TotalAmountContext = createContext({
  amount: 0,
  setAmount: () => {},
});

export const PayNowAmountContext = createContext({
  payNowAmount: 0,
  setPayNowAmount: () => {},
});
