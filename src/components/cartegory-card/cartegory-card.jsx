import React from "react";
import style from "./cartegory-card.module.scss";

export const CategoryCard = ({ img, title }) => {
  return (
    <li className={style.item}>
      <img src={img} alt="img" />
      <h3 className={style.text}>{title}</h3>
    </li>
  );
};
