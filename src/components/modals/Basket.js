import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { otherServices } from "../../services/otherServices";
import BasketItem from "../contents/sub-contents/BasketItem";

function Basket() {
  const [data, setData] = useState([]);

  useEffect(() => {
    otherServices
      .getAllFood()
      .then((data) => data.json())
      .then((data) => setData(data.data));
  }, []);

  return <div className="basket-container">bnm</div>;
}

export default Basket;
