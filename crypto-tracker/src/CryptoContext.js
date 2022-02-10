import React, {  createContext, useContext, useState } from "react";
import { useEffect } from "react";
//for React app to effectively produce global varaibles that can be passed around.
//context provide a way to share values like these between components
//a context is a a state that use for all the project
const Crypto = createContext();

const CryptoContext = ({children}) => {
  const [currency, setCurrency] = useState("USD"); //this is use state which initial value
  const [symbol, setSymbol] = useState("$"); //second if USD then $

  useEffect(() => {
    if (currency === "USD") setSymbol("$"); //if currecy OO, then setSymbol = $
    else if (currency === "JPY") setSymbol("￥");
    else if (currency === "RM") setSymbol("RM");
  }, [currency]); //when the variable in [] change, it will run

  return <Crypto.Provider value={{currency,symbol,setCurrency}}>{children}</Crypto.Provider>;
};//return currency,symbol and set Currency to header

export default CryptoContext; //return to index,js

export const CryptoState = () => { // return to header.js
  return useContext(Crypto);//use this context which is a variable called Crypto
};