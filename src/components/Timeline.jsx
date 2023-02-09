import React from 'react'

export default function Timeline({ children }) {
    return (
        <div className='w-[98%] sm:w-[85%] m-auto p-2 sm:p-10 rounded-3xl shadow-2xl bg-zinc-600 my-10 text-white '>
            <h1 className='text-3xl text-center'>Default timeline</h1>
            {children}
        </div>
    )
}

function Item({ children }) {
    return (
        <div className='border border-white rounded-2xl p-5 my-3'>
            {children}
        </div>
    )
}
Timeline.Item = Item

function Point({ children }) {
    return (
        <div>
            {children}
        </div>
    )
}
Timeline.Point = Point

function Content({ children }) {
    return (
        <div className="font-light ">
            {children}
        </div>
    )
}
Timeline.Content = Content

function Time({ children }) {
    return (
        <div className='text-zinc-300'>{children}</div>
    )
}
Timeline.Time = Time

function Title({ children }) {
    return (
        <div className='text-2xl text-white my-2'>{children}</div>
    )
}
Timeline.Title = Title

function Body({ children }) {
    return (
        <div className='text-lg'>{children}</div>
    )
}
Timeline.Body = Body

function Button({ children }) {
    return (
        <div className='flex border border-zinc-300 w-[65%] sm:w-[35%] lg:w-[20%] px-4 py-3 justify-center rounded-2xl mt-4 items-center'>{children}</div>
    )
}
Timeline.Button = Button

