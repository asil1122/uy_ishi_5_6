import React from "react";
import style from "./category.module.scss";
import category1 from "../../assets/category1.png";
import category2 from "../../assets/category2.png";
import category3 from "../../assets/category3.png";
import category4 from "../../assets/category4.png";
import category5 from "../../assets/category5.png";
import category6 from "../../assets/category6.png";

import { CategoryCard } from "../cartegory-card/cartegory-card";

export const Category = () => {
  return (
    <div className={style.Category}>
      <div className="container">
        <h2 className={style.title}>
          <ul className={style.list}>
            <CategoryCard img={category1} title={"Жахон адабиёти"} />
            <CategoryCard img={category2} title={"Узбек адабиёти"} />
            <CategoryCard img={category3} title={"Бизнес ва психология"} />
            <CategoryCard img={category4} title={"Болалар адабиёти "} />
            <CategoryCard img={category5} title={"Детективлар"} />
            <CategoryCard img={category6} title={"Фантастика"} />
          </ul>
        </h2>
      </div>
    </div>
  );
};
