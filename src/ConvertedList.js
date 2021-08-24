import React, { useEffect, useState } from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
      <h4 id='top'>All currency rates are converted from USD* ($1:)</h4>
      <p>
        To back to converter page <Link to="/">click</Link> the link
      </p>
      <div className="list">
        <ul>
          {amountList.map((list) => (
            <li value={list} key={list} className="currency">
              {list}
              <span className="btn" >
                <FontAwesomeIcon icon={faBookmark} />
              </span>
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
      <a href='#top' className='upper'>Page Up</a>
    </>
  );
};

export default ConvertedList;
