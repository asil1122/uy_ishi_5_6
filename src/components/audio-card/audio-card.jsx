import React from "react";
import style from "./audio-card.module.scss";
import { Link } from "react-router-dom";

export const AudioBooksCard = ({ id, img, title, genre, raiting }) => {
  return (
    <Link to={`/product/${id}`}>
      <li className={style.item}>
        <div>
          <img src={img} alt="img" />
        </div>
        <div className={style.text_wrap}>
          <h3 className={style.title}>{title}</h3>
          <p className={style.text}>{genre}</p>
          <div className={style.wrap}>
            <p className={style.reiting}>{raiting}</p>
            <div className={style.box}>
              <button className={style.listen}></button>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
};
