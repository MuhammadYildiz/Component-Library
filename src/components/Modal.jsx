import React from 'react'
import Badges from './Badges'
import { FcLike } from 'react-icons/fc';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';
const style = {
    color: {
        modalColor: "bg-zinc-500 text-neutral-100 hover:bg-zinc-600  shadow-slate-700 shadow-xl",
        headerColor: "bg-zinc-600 text-neutral-100 hover:bg-zinc-500 ",
        bodyColor: "bg-zinc-600 hover:text-neutral-200 ",
        footerColor: "bg-zinc-600 text-neutral-100",
    },
    size: {
        modalSize: "flex flex-col p-3 m-[10px] sm:mx-[100px] p-5  mt-10 rounded-3xl text-xl min-h-[60vh]",
        headerSize: "p-5 text-center border border-b-gray-800 text-3xl",
        bodySize: "p-5 text-start border border-gray-800 text-xl my-4",
        footerSize: "p-5 text-center border border-t-gray-800 text-2xl"
    }
}
export default function Modal(props) {
    const { color, size, children } = props
    const colorClass = style.color[color]
    const sizeClass = style.size[size]

    return (
        <div className={`${colorClass} ${sizeClass}`}>
            {children}
        </div>
    )
}

function Header(props) {
    const { title, color, size } = props
    const colorClass = style.color[color]
    const sizeClass = style.size[size]
    return (
        <div className={`${colorClass} ${sizeClass}`}>
            {title}
        </div>
    )
}
Modal.Header = Header

function Body(props) {
    const { title, color, size } = props
    const colorClass = style.color[color]
    const sizeClass = style.size[size]
    return (
        <div className={`${colorClass} ${sizeClass}`}>
            {title}
        </div>
    )
}
Modal.Body = Body

function Footer(props) {
    const { color, size } = props
    const colorClass = style.color[color]
    const sizeClass = style.size[size]
    return (
        <div className={`${colorClass} ${sizeClass}`}>
            <Badges color="badgeColor" size="badgeSize" 
            icon1={<AiOutlineDislike/>}
            icon2={<AiOutlineLike/>}
            icon3={<FcLike/>}
             />
        </div>
    )
}
Modal.Footer = Footer



