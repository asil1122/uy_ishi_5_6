import React from "react";
import style from "./service.module.scss";
import icon_1 from "../../assets/card_icon_1.svg";
import icon_2 from "../../assets/card_icon_2.svg";
import icon_3 from "../../assets/card_icon_3.svg";
import icon_4 from "../../assets/card_icon_4.svg";
import { ServiceCard } from "../service-card/service-card";

export const Service = () => {
  return (
    <div className={style.Category}>
      <div className="container">
        <ul className={style.list}>
          <ServiceCard
            title={"Тезкор етказиш"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            }
            img={icon_1}
          />
          <ServiceCard
            title={"Тўлов химояси"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            }
            img={icon_2}
          />
          <ServiceCard
            title={"Юқори сифат"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            }
            img={icon_3}
          />
          <ServiceCard
            title={"Энг сара китоблар"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            }
            img={icon_4}
          />
        </ul>
      </div>
    </div>
  );
};
