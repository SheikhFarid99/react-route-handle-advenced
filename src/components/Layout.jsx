import React from 'react';
import { Outlet, NavLink } from 'react-router-dom'
import { navItem } from './Nav/NavItem'
import { user } from '../Route/utils'
const Layout = () => {
    return (
        <div className='h-screen w-screen'>
            <nav className='p-2 bg-slate-800 fixed w-full'>
                <div className='w-11/12 h-11 m-auto flex justify-between items-center text-slate-200'>
                    <h3>Left</h3>
                    <h3>Right</h3>
                </div>
            </nav>
            <div className='bg-slate-500 w-64 h-screen fixed top-16'>
                <ul className='w-full'>
                    <li className='w-full p-2'>
                        {
                            navItem.map((n, i) => n.role === user.role && <NavLink className={(navInfo) => navInfo.isActive ? 'mb-1 p-2 w-full bg-blue-500 text-white block rounded-lg' : 'mb-1 p-2 w-full hover:bg-blue-500 text-white block rounded-lg'} key={i} to={n.link} >{n.title}</NavLink>)
                        }
                    </li>
                </ul>
            </div>
            <div className='bg-slate-200 min-h-screen'>
                <div className='ml-64 pt-20 pl-4'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout