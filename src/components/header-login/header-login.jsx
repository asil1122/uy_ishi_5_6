import React from "react";
import style from "./header-login.module.scss";
import { Link } from "react-router-dom";
export const HeaderLogin = () => {
  return (
    <div className={style.wrap}>
      <div className={style.select_box}>
        <p className={style.select_text}>Ўз</p>
      </div>
      <Link to={`/profile`}>
        <button className={style.btn}>Кириш</button>
      </Link>
    </div>
  );
};
