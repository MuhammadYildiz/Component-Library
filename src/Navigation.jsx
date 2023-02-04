import React from 'react'
import { NavLink } from "react-router-dom";

export default function Navigation() {
	return (
		<ul className='bg-emerald-900 p-7 top-0 sticky z-40 shadow-slate-900 flex-wrap shadow-sm flex justify-around  font-bold text-lg'>
			<NavLink to={'/'}><li className='bg-white px-6 py-1 rounded-sm hover:bg-blue-500  hover:text-white min-w-[140px] text-center m-1 '>
				Home
			</li></NavLink>
			<NavLink to={'projects'}><li className='bg-white px-6 py-1 rounded-sm hover:bg-blue-500  hover:text-white min-w-[140px] text-center m-1 '>
			Projects
			</li></NavLink>
			<NavLink to={'about'}><li className='bg-white px-6 py-1 rounded-sm m-1 hover:bg-blue-500  hover:text-white min-w-[140px] text-center'>
				About
			</li></NavLink>
			<NavLink to="/card" ><li className='bg-white px-6 py-1 rounded-sm m-1 hover:bg-blue-500  hover:text-white min-w-[140px] text-center'>
				Card
			</li></NavLink>
			<NavLink to="/contact" ><li className='bg-white px-6 py-1 rounded-sm m-1 hover:bg-blue-500  hover:text-white min-w-[140px] text-center'>
				Contact
			</li></NavLink>

		</ul>
	)
}
