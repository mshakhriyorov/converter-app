import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

export default function Currency(props) {
  const {
    currency,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props;

  return (
    <>
      <div className="box">
        <input
          type="number"
          className="input"
          value={amount}
          onChange={onChangeAmount}
        />
        <select value={selectedCurrency} onChange={onChangeCurrency}>
          {currency.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
