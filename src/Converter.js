import React, { useEffect, useState } from "react";
import Currency from "./Currency";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import  { Link } from 'react-router-dom';

const BASE_URL =
  "https://api.fastforex.io/fetch-all?api_key=fcef4aa979-108fc950bf-qyan8f";

function Converter() {
  const [currency, setcurrency] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = (amount * exchangeRate).toFixed(2);
  } else {
    toAmount = amount;
    fromAmount = (amount / exchangeRate).toFixed(2);
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.results)[138];
        setcurrency([data.base, ...Object.keys(data.results)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.results[firstCurrency]);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(BASE_URL)
        .then((res) => res.json())
        .then((data) => setExchangeRate(data.results[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  return (
    <>
      <h1>Real-time currency converter</h1>
      <Currency
        currency={currency}
        selectedCurrency={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount}
      />
      <Currency
        currency={currency}
        selectedCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
      />
      <Link to="/list" className="btn btn-info">Click to see the whole list of currency rate</Link>
    </>
  );
}

export default Converter;
