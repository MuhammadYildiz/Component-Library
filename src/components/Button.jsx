import React from 'react'
const style = {
    color: {
        buttonColor: "bg-blue-900 text-white hover:bg-blue-700",
    },
    size: {
        buttonSize: "flex flex-col px-10 p-3  m-auto  w-[200px]  text-xl rounded-3xl mt-10 mb-10 shadow-slate-600 shadow-lg ",
    }
}
export default function Button(props) {
    const { title, color, size, onClick, disabled } = props
    const colorClass = style.color[color]
    const sizeClass = style.size[size]
    return (
        <div>
            <button className={`${colorClass} ${sizeClass}`}
                type='button'
                onClick={onClick}
                disabled={disabled}
            >
                {title}
            </button>

        </div>
    )
}


function CloseButton(props) {
    const { title, color, size, onClick } = props
    const colorClass = style.color[color]
    const sizeClass = style.size[size]
    return (
        <div>
            <button className={`${colorClass} ${sizeClass}`}
                onClick={onClick}
            >
                {title}
            </button>
        </div>
    )
}
Button.CloseButton = CloseButton
