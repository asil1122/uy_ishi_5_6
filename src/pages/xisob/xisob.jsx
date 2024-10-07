import React from 'react'
import style from "./xisob.module.scss"
import img1 from "../../assets/payme.svg"
import img2 from "../../assets/click.svg"

export const Xisob = () => {
  return (
    <div className='container'>
        <div className={style.block}>
            <h2 className={style.title}>Э-Хисоб</h2>
            <div className={style.balans_block}>
                <p className={style.balans}>Баланс</p>
                <p className={style.summa}>45 000 сўм</p>
            </div>
            <ul className={style.ul}>
                <li className={style.li}>
                    <button className={style.btn}>
                        <img src={img1} alt="payme" />
                    </button>
                </li>
                <li className={style.li}>
                    <button className={style.btn}>
                        <img src={img2} alt="click" />
                    </button>
                </li>
            </ul>
        </div>
    </div>
  )
}
