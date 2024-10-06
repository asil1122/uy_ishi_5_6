import React from "react";
import style from "./header-login.module.scss";

export const HeaderLogin = () => {
  return (
    <div className={style.wrap}>
      <div className={style.select_box}>
        <p className={style.select_text}>Ўз</p>
      </div>
      <button className={style.btn}>Кириш</button>
    </div>
  );
};
