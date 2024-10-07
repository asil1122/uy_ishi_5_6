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
    <div className={style.product}>
      <div className="container">
        <div className={style.product_block}>
          <div className={style.img_block}>
            <img src={items.img} alt="img" />
          </div>
          <div className={style.item}>
            <div className={style.top}>
              <div className={style.text_wrap}>
                <h1 className={style.title}>{items.title}</h1>
              </div>
              <p className={style.subtitle}>{items.genre}</p>
              <p className={style.text}>{items.text}</p>
            </div>
            <div className={style.buttons}>
              <button className={style.btn_buy}>Сотиб олиш - 65 000 сум</button>
              <button className={style.btn}>Аудио тинглаш - 55 000 сум</button>
              <button className={style.btn}>Онлайн укиш - 45 000 сум</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
