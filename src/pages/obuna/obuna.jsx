import React from 'react'
import style from "./obuna.module.scss"

export const Obuna = () => {
    return (
        <div className='container'>
            <div className={style.block}>
                <div className={style.obuna_block}>
                    <h2 className={style.title}>Узингиз севган булимга
                        обуна бўлинг
                    </h2>
                </div>
                <div className={style.bottom_block}>
                    <h2 className={style.bottom_title}>Обуна</h2>
                    <div className={style.bottom_obuna_block}> 
                        <div className={style.bottom_form_block}>
                            <div className={style.input_block}>
                                <h2 className={style.input_title}>Обуна давом этиш вакти</h2>
                                <input className={style.input} type="text" placeholder='кун'/>
                                <h2 className={style.input_title}>Булимни танланг</h2>
                                <input className={style.input} type="text" placeholder='Фантастика'/>
                            </div>

                            <h2 className={style.obuna_text}>Обуна 30 кун давом этади</h2>
                        </div>
                        <div className={style.bottom_price_block}>
                            <ul className={style.ul}>
                                <li className={style.li}>
                                    <p className={style.des}>Бошланиш вакти</p>
                                    <p className={style.date}>12/09/2021</p>
                                </li>
                                <li className={style.li}>
                                    <p className={style.des}>Якунланиш вакти</p>
                                    <p className={style.date}>12/10/2021</p>
                                </li>
                                <li className={style.li}>
                                    <p className={style.des}>Обуна нархи</p>
                                    <p className={style.price}>12 000 сум</p>
                                </li>
                            </ul>
                            <button className={style.button}>Обуна булиш</button>
                        </div>                       
                    </div>
                </div>
            </div>
        </div>
    )
}
