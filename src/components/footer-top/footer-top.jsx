import React from "react";
import style from "./footer-top.module.scss";
import icon1 from "../../assets/play.svg";
import icon2 from "../../assets/store.svg";

export const FooterTop = () => {
  return (
    <div className={style.footertop}>
      <div className="container">
        <div className={style.wrap}>
          <ul className={style.main_list}>
            <li className={style.main_item}>
              <ul className={style.list_1}>
                <li className={style.item}>
                  <h2 className={style.title}>Платформа хақида</h2>
                </li>
                <li className={style.item}>
                  <a className={style.link} href="#">
                    Liber ўзи нима?
                  </a>
                </li>
                <li className={style.item}>
                  <a className={style.link} href="#">
                    Фойдаланиш шартлари
                  </a>
                </li>
                <li className={style.item}>
                  <a className={style.link} href="#">
                    Ёрдам
                  </a>
                </li>
              </ul>
            </li>
            <li className={style.main_item}>
              <ul className={style.list_2}>
                <li className={style.item}>
                  <h2 className={style.title}>Обуна хақида</h2>
                </li>
                <li className={style.item}>
                  <a className={style.link} href="#">
                    Обуна бўлиш
                  </a>
                </li>
                <li className={style.item}>
                  <a className={style.link} href="#">
                    Қандай тўлаш
                  </a>
                </li>
              </ul>
            </li>
            <li className={style.main_item}>
              <ul className={style.list_1}>
                <li className={style.item}>
                  <h2 className={style.title}>Китоблар</h2>
                </li>
                <li className={style.item}>
                  <a className={style.link} href="#">
                    Аудио китоблар
                  </a>
                </li>
                <li className={style.item}>
                  <a className={style.link} href="#">
                    Электрон китоблар
                  </a>
                </li>
                <li className={style.item}>
                  <a className={style.link} href="#">
                    Китоблар
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className={style.box}>
            <h2 className={style.title}>Мобил илова</h2>
            <a className={style.iconP} href="#">
              <img src={icon1} alt="icon" />
            </a>
            <a className={style.iconA} href="#">
              <img src={icon2} alt="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
