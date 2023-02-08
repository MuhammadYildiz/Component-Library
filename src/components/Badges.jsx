import React from 'react'

const style = {
    color: {
        badgeColor: "bg-zinc-600  hover:bg-cyan-900 text-neutral-100  shadow-slate-700 shadow-xl",

    },
    size: {
        badgeSize: "p-2 flex justify-around border-t-gray-800 text-2xl text-black",
    }
}
export default function Badges(props) {
    const { color, size,icon1, icon2,icon3 } = props
    const colorClass = style.color[color]
    const sizeClass = style.size[size]
    return (
        <div className={`${colorClass} ${sizeClass}`}>
            <button className=' flex flex-col justify-center items-center text-center'>
                {icon1} <span className='text-sm mt-1'>Dislike</span>
            </button>
            <button className=' flex flex-col justify-center items-center text-center'> 
               {icon2}<span className='text-sm mt-1'>Like</span>
            </button>
            <button className=' flex flex-col justify-center items-center text-center'>
                {icon3} <span className='text-sm mt-1'>Favorite</span>
            </button>
        </div>
    )
}
