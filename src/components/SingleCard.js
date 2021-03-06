import React, { useState } from "react";
import "../styles/singleCardZul.css";
import { useNavigate } from "react-router-dom";
import FoodModal from "./modals/foodModal";

export default function SingleCard(props) {
  const navigate = useNavigate();
  const handleShow = () => {
    setShow(true);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <div className="createModal">
      <div className="modalSee">
        {show == true ? (
          <FoodModal show={show} handleClose={handleClose} data={props.data} />
        ) : null}
      </div>
      <div className="d-flex ">
        <div className="card card-g " variant="primary" onClick={handleShow}>
          <div className="hover">
            <img src="../images/basket_icon.svg" alt="" />
            <a href="" className="basket-text">
              Сагслах
            </a>
          </div>

          <div className="discount">
            <p
              className={`${
                props.data.discount > 0 ? "activePrice" : "disp-noactive"
              }`}
            >
              {props.data.discount + "%"}
            </p>
            <img
              className="card-img"
              src={`https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com${props.data.image}`}
            />
          </div>

          <div className="card-desc">
            <p className="card-name">{props.data.name}</p>
            <span className="price">
              {props.data.price -
                (props.data.price * props.data.discount) / 100}
              {"₮"}
            </span>
            <strike
              className={`${
                props.data.discount > 0 ? "price-strike" : "disp-noactive"
              }`}
            >
              {props.data.price}
            </strike>
          </div>
        </div>
      </div>
    </div>
  );
}
