import React from "react";
import style from "./footer.module.scss";
import insta from "../../assets/insta.svg";
import facebook from "../../assets/facebook.svg";
import tg from "../../assets/tg.svg";
import yt from "../../assets/yt.svg";
import tok from "../../assets/tok.svg";
import cards1 from "../../assets/cards1.svg";
import cards2 from "../../assets/cards2.svg";
import cards3 from "../../assets/cards3.svg";

export const FooterBottom = () => {
  return (
    <div className={style.footer}>
      <div className="container">
        <div className={style.wrap}>
          <ul className={style.main_list}>
            <li>
              <ul className={style.list}>
                <li>
                  <h3 className={style.title}>Ижтимоий тармоқлар</h3>
                </li>
                <li>
                  <ul className={style.mes_list}>
                    <li>
                      <a href="#">
                        <img src={facebook} alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={yt} alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={tok} alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={tg} alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={insta} alt="icon" />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <h3 className={style.title}>Боғланиш</h3>
              <div className={style.link_wrap}>
                <a className={style.link} href="#">
                  +998 90 253 77 53
                </a>
                <a className={style.link} href="#">
                  support@liber.uz
                </a>
              </div>
            </li>
          </ul>
          <div>
            <h3 className={style.title}>Биз қабул қиламиз</h3>
            <ul className={style.pay_list}>
              <li>
                <a href="#">
                  <img src={cards1} alt="icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={cards2} alt="icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={cards3} alt="icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
