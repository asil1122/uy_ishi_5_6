import React from "react";
import style from "./hero.module.scss";
import { HeroCard } from "../hero-card/hero-card";
import hero_img1 from "../../assets/hero_img1.png";
import hero_img2 from "../../assets/hero_img2.png";
import hero_img3 from "../../assets/hero_img3.png";
import { MiniCard } from "../mini-card/mini-card";

export const Hero = () => {
  return (
    <div className={style.hero}>
      <div className="container">
        <div className={style.wrap}>
        <div className={style.box}>
          <h2 className={style.title}>Кўп ўқилаётганлар</h2>
          <ul className={style.list}>
            <HeroCard img={hero_img1} title={"1984"} />
            <HeroCard img={hero_img2} title={"Code 8"} />
            <HeroCard img={hero_img3} title={"Rich dad poor dad"} />
          </ul>
        </div>
        <MiniCard />
        </div>
      </div>
    </div>
  );
};
