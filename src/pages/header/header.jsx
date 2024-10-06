import React from "react";
import style from "./header.module.scss";
import { HeaderSearch } from "../../components/header-search/header-search";
import { HeaderLogin } from "../../components/header-login/header-login";
import { HeaderBottom } from "../../components/header_bottom/header_bottom";

export const Header = () => {
  return (
    <div>
      <div className={style.header}>
        <div className="container">
          <div className={style.wrap}>
            <HeaderSearch />
            <HeaderLogin />
          </div>
        </div>
      </div>
      <HeaderBottom />
    </div>
  );
};
