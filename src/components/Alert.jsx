import React from 'react'
import { GrClose } from 'react-icons/gr';

const style = {
    color: {
        alertColor: "bg-yellow-400 text-red-700 hover:bg-yellow-700 hover:text-white  flex flex-col ",
        kepSeeColor: "text-black bg-cyan-100  hover:text-white hover:bg-cyan-600  ",
    },
    size: {
        alertSize: "flex p-3  mx-[10px] sm:mx-[100px]  text-xl rounded-b-3xl  mt-[-104px] top-0 sticky z-50",
        kepSeeSize: "text-black bg-cyan-100  mx-5 p-2 rounded-xl text-sm w-[100px] font-bold"
    }
}
export default function Alert(props) {
    const { color, size, title, onDismiss, children } = props;
    const colorClass = style.color[color]
    const sizeClass = style.size[size]
    return (
        <div className={`${colorClass} ${sizeClass}`}>
            <div className=' text-center'>{title}</div>
            <div className='flex justify-center mt-4 '>
                <div>{children}</div>
                <button className=" bg-cyan-100 hover:bg-yellow-100 mx-5 rounded-[50%]  text-center p-2 font-bold " onClick={onDismiss} >
                    <GrClose />
                </button>
            </div>
        </div>
    )
}

function KepToSee(props) {
    const { title, color, size, onClick } = props
    const colorClass = style.color[color]
    const sizeClass = style.size[size]
    return (
        <div className={`${colorClass} ${sizeClass}`}>
            <button onClick={onClick}> {title}</button>
        </div>
    )
}
Alert.KepToSee = KepToSee



