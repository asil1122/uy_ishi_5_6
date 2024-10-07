import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const ProfileLayout = () => {
    return (
        <div className='layout'>
            <div className='container'>
                <div className='profile_wrap'>
                    <div className='profile_category_block'>
                        <div>
                            <Link to={`/profile`}>
                                <h2 className='link'>Обуна бўлиш</h2>
                            </Link>
                        </div>
                        <div>
                            <Link to={`/profile/xisob`}>
                                <h2 className='link'>Э-Хисоб</h2>
                            </Link>
                        </div>
                        <div>
                            <Link to={`/profile/books`}>
                                <h2 className='link'>Китобларим</h2>
                            </Link>
                        </div>
                    </div>
                    <div className='profile_info_block'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
