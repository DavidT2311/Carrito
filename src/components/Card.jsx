import React, { useState } from "react";
//Styles
import cardModule from "./Card.module.css";
//Font-Awesome
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartHover } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Components
import Button from "./Button";
//Redux
import {
  addProductToCart,
  deleteProductFromCart,
} from "../redux/slices/cartSlice";

const Card = ({
  ID,
  title,
  price,
  description,
  category,
  image,
  rating,
  quantity,
  action,
}) => {
  return (
    <article className={cardModule.card}>
      <div className={cardModule.header}>
        <img src={image} alt={title} />
      </div>
      <div className={cardModule.card_head}>
        <h5 className={cardModule.card_title}>{title}</h5>
      </div>
      <div className={cardModule.card_content}>
        <div className={cardModule.card_category}>
          <strong className={cardModule.card_info_title}>Category</strong>
          <span className={cardModule.card_info}>{category}</span>
        </div>
        <div>
          <strong className={cardModule.card_info_title}>Calificacion: </strong>
          <span className={cardModule.card_info}>{rating.rate}</span>
        </div>
        <div>
          <strong className={cardModule.card_info_title}>Comprados: </strong>
          <span className={cardModule.card_info}>{quantity}</span>
        </div>
      </div>
      <div className={cardModule.card_action}>
        {price ? (
          <>
            <Button
              handleEvent={() => action(addProductToCart(ID))}
              text={"Comprar"}
              classes={"blue"}
            />
            <span className={cardModule.card_price}>${price}</span>
          </>
        ) : (
          <>
            <Button
              handleEvent={() => action(addProductToCart(ID))}
              text={"Añadir otro"}
              classes={"blue"}
            />
            <Button
              handleEvent={() => action(deleteProductFromCart(ID))}
              text={"Eliminar"}
              classes={"red"}
            />
          </>
        )}
      </div>
    </article>
  );
};

export default Card;
