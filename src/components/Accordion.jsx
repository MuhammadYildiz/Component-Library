import React from 'react'

export default function Accordion({ children,className }) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}
function Panel({children}) {
    return (
        <div>
            {children}
        </div>
    )
}
Accordion.Panel = Panel

function Title({children}) {
    return (
        <div>
            {children}
        </div>
    )
}
Accordion.Title = Title

function Content({children}) {
    return (
        <div className="border border-cyan-300 p-3 text-xl bg-white rounded-lg rounded-t-3xl mb-3">
            {children}
        </div>
    )
}
Accordion.Content = Content
