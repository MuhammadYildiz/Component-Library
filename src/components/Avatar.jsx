import React from 'react'
export default function Avatar({alt,img}) {
    return(
        <div className='m-auto w-[80%] my-5 flex justify-center'>
            <img src={img} alt={alt} className="rounded-full"/>
        </div>
    )
}