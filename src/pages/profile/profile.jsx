import React from 'react'
import style from "./profile.module.scss"
import { Link } from 'react-router-dom'

export const Profile = () => {
  return (
    <div className={style.profile}>
        <div className='container'>
            <div className={style.profile_block}>
                <div className={style.category_block}>
                </div>
                <div className={style.info_block}>
                </div>
            </div>
        </div>
    </div>
  )
}
