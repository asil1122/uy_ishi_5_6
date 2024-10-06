import React from "react";
import style from "./book.module.scss";
import products from "../../data/data";
import { BookCard } from "../book-card/book-card";

export const Book = () => {
  return (
    <div className={style.news}>
      <div className="container">
        <h2 className={style.title}>Янги қўшилганлар</h2>
        <ul className={style.list}>
          {products.map((item) => (
            <BookCard
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
