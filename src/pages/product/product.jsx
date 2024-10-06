import React from "react";
import { useParams } from "react-router-dom";
import style from "./product.module.scss";
import products from "../../data/data";
import products2 from "../../data/data2";

export const ProductItem = () => {
  const { id } = useParams();
  const data = [...products, ...products2];
  const items = data.find((item) => item.id === parseInt(id));

  return (
    <div className="container">
      <div className={style.product_block}>
        <div>
          <img src={items.img} alt="img" />
        </div>
        <div className={style.item}>
          <div className={style.top}>
            <div className={style.text_wrap}>
              <h1 className={style.title}>{items.title}</h1>
              <p className={style.subtitle}>{items.genre}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
