import React from 'react'

export default function Footer(props) {
    const {children} = props
    return (
        <div className='bg-black text-white flex flex-col sm:flex-row justify-between p-5 items-center bottom-0 sticky'>
            {children}
        </div>
    )
}

function Brand(props) {
    const {href,src,alt,name,target } = props
    return (
        <div>
            <a href={href } target={target} className='flex items-center w-36 p-2 justify-around'>
                <img src={src} alt={alt } />
                <span className='text-2xl ml-3'>{name}</span>
            </a>
        </div>
    )
}
Footer.Brand = Brand


function LinkGroup(props) {
    const { children } = props
    return (
        <div className='flex w-96 p-3 justify-between '>
            {children}
        </div>
    )
}
Footer.LinkGroup = LinkGroup

function Link(props) {
    const {children}= props
    return (
        <div className='hover:text-red-400 font-bold'>
            {children}
        </div>
    )
}
Footer.Link = Link


