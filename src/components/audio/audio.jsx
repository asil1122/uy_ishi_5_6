import React from "react";
import style from "./audio.module.scss";
import { AudioBooksCard } from "../audio-card/audio-card";
import products from "../../data/data2";

export const Audiobooks = () => {
  return (
    <div className={style.Audiobooks}>
      <div className="container">
        <h2 className={style.title}>Аудио китоблар</h2>
        <ul className={style.list}>
          {products.map((item) => (
            <AudioBooksCard
              id={item.id}
              key={item.id}
              img={item.img}
              title={item.title}
              genre={item.genre}
              raiting={item.raiting}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
