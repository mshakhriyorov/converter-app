import React, { useEffect, useState } from "react";
import "./styles.scss";

const BASE_URL =
  "https://api.fastforex.io/fetch-all?api_key=fcef4aa979-108fc950bf-qyan8f";

const ConvertedList = () => {
  const [currencyList, setCurrencyList] = useState([]);
  const [amountList, setAmountList] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setAmountList(Object.keys(data.results));
        setCurrencyList(Object.values(data.results));
      });
  }, []);

  return (
    <>
      <div className="list">
        <ul>
          {amountList.map((list) => (
            <li value={list} key={list}>
              {list}
            </li>
          ))}
        </ul>
        <ul>
          {currencyList.map((list) => (
            <li value={list} key={list}>
              {list}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ConvertedList;
