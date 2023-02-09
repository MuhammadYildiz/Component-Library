import React from 'react'
import { useState } from 'react'
import Timeline from './Timeline'
import { HiArrowNarrowRight } from 'react-icons/hi';
export default function Contact() {
    const [showAll, setShowAll] = useState(false)
    const [singUpContent, setsingUpContent] = useState(false)
    const [singInContent, setsingInContent] = useState(false)
    const [textArea, setTextArea] = useState(false)
    const [singUpBtn, setsingUpBtn] = useState(true)
    const [singInBtn, setsingInBtn] = useState(true)
    const [textAreaBtn, settextAreaBtn] = useState(true)
    const showSingUp = () => {
        setShowAll(!showAll)
        setsingUpContent(!singUpContent)
        setsingInBtn(!singInBtn)
        settextAreaBtn(!textAreaBtn)
    }
    const showSingIn = () => {
        setShowAll(!showAll)
        setsingInContent(!singInContent)
        setsingUpBtn(!singUpBtn)
        settextAreaBtn(!textAreaBtn)
    }
    const showTextArea = () => {
        setShowAll(!showAll)
        setTextArea(!textArea)
        setsingInBtn(!singInBtn)
        setsingUpBtn(!singUpBtn)
    }
    return (
        <div>
            <div className='bg-zinc-900 text-white py-6 flex-wrap sm:flex-nowrap  sm:p-6 flex justify-around m-auto w-[98%] sm:w-[85%] rounded-2xl shadow-2xl '>
                {singUpBtn && <button type='button' className=' bg-cyan-400 text-xl m-2 px-5 sm:px-10 py-2 rounded-3xl hover:bg-white hover:text-black w-[150px] sm:w-[200px] '
                    onClick={showSingUp}>
                    Sing Up
                </button>}
                {singInBtn && <button type='button' className='bg-cyan-400 text-xl m-2   px-5 sm:px-10 py-2 rounded-3xl hover:bg-white hover:text-black w-[150px] sm:w-[200px]  '
                    onClick={showSingIn}>
                    Sing In
                </button>}
                {textAreaBtn && <button type='button' className='bg-cyan-400 text-xl m-2  px-5 sm:px-10 py-2 rounded-3xl hover:bg-white hover:text-black w-[150px] sm:w-[200px]  '
                    onClick={showTextArea}>
                    Text Area
                </button>}

            </div>
            {showAll && <div className="bg-cyan-600  p-2 sm:p-10 flex flex-col  justify-around items-center w-[98%] sm:w-[85%] rounded-3xl mt-5  m-auto  min-h-[63vh]">
                {singUpContent && <div className=' flex flex-col bg-white p-3 sm:p-10 rounded-3xl m-5 w-[100%]  sm:w-[80%] xl:w-1/2'>
                    <h1 className='text-2xl text-cyan-600 text-center mb-3'>Sing Up</h1>
                    <form className=' flex flex-col border border-cyan-600 p-2 sm:p-5 rounded-3xl'>
                        <label className='flex flex-col sm:flex-row  justify-between items-center m-2' htmlFor="email" >
                            <span className='mr-3 text-lg'>Enter Your Email</span>
                            <input className=' border border-cyan-600 outline-none p-1 px-2 rounded-xl'
                                type="email" id='email' placeholder='fristnamelastname@gmail.com' />
                        </label>
                        <label className='flex flex-col sm:flex-row justify-between items-center m-2' htmlFor="fristPassword">
                            <span className='mr-3 text-lg'>Enter Your Password</span>
                            <input className=' border border-cyan-600 outline-none p-1 px-2 rounded-xl' type="password" name="password" id="fristPassword" placeholder='******' />
                        </label>
                        <label className='flex flex-col sm:flex-row justify-between items-center m-2' htmlFor="secondPassword">
                            <span className='mr-3 text-lg'>Repeat Password</span>
                            <input className=' border border-cyan-600 outline-none p-1 px-2 rounded-xl' type="password" name="password" id="secondPassword" placeholder='******' />
                        </label>
                        <button className='bg-cyan-600 text-white w-[150px] m-auto mt-3 py-2 font-bold rounded-3xl hover:bg-black px-2' id='singUp' type='submit'>Sing Up</button>
                    </form>
                </div>}
                {singInContent && <div className='flex flex-col bg-white p-3 sm:p-10 rounded-3xl m-5 w-[100%] sm:w-[80%] xl:w-1/2'>
                    <h1 className='text-2xl text-cyan-600 text-center mb-3'>Sing In</h1>
                    <form className='flex flex-col border border-cyan-600 p-2 sm:p-5 rounded-3xl '>
                        <label className='flex flex-col sm:flex-row justify-between items-center m-2' htmlFor="email" >
                            <span className='mr-3 text-lg'>Enter Your Email</span>
                            <input className=' border border-cyan-600 outline-none p-1 px-2 rounded-xl' type="email"
                                placeholder='fristnamelastname@gmail.com' />
                        </label>
                        <label className='flex flex-col sm:flex-row justify-between items-center m-2' htmlFor="singPassword">
                            <span className='mr-3 text-lg'>Enter Your Password</span>
                            <input className=' border border-cyan-600 outline-none p-1 px-2 rounded-xl' type="password" name="password" id="singPassword" placeholder='******' />
                        </label>
                        <div className='flex flex-col sm:flex-row justify-between items-center'>
                            <button className='border border-cyan-600 mx-1 w-[195px]  mt-1 py-2 font-bold rounded-2xl text-black hover:bg-black  hover:text-white'>Forget password ?</button>
                            <button className='border border-cyan-600 mx-1 w-[195px]  mt-1 py-2 font-bold rounded-2xl text-black hover:bg-black  hover:text-white'>Show Password</button>
                        </div>
                        <button className='bg-cyan-600 text-white w-[150px] m-auto mt-4 py-2 font-bold rounded-3xl hover:bg-black px-2' id='singIn' type='submit'>Sing In</button>
                    </form>
                </div>}
                {textArea && <div className='flex flex-col bg-white p-3 sm:p-10 rounded-3xl m-5 w-[100%] sm:w-[80%] xl:w-1/2'>
                    <form action="">
                        <label className='flex flex-col border border-cyan-600 p-2 sm:p-5 rounded-3xl '>
                            <span className='text-lg mb-3'>Write Your Post</span>
                            <textarea name="postContent" placeholder='Write Your Post' rows={6} cols={40} className="bg-cyan-600 outline-none p-3 text-white rounded-2xl" />
                            <button className='bg-cyan-600 text-white w-[150px] m-auto mt-3 py-2 font-bold rounded-3xl hover:bg-black px-2' id='singUp' type='submit' >
                                Submit
                            </button>
                        </label>
                    </form>
                </div>}
            </div>}
            <div>
                <Timeline>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time>
                                February 2022
                            </Timeline.Time>
                            <Timeline.Title>
                                Application UI code in Tailwind CSS
                            </Timeline.Title>
                            <Timeline.Body>
                                Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
                            </Timeline.Body>
                            <Timeline.Button className="text-gray-300">
                                Learn More
                                <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                            </Timeline.Button>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time>
                                March 2022
                            </Timeline.Time>
                            <Timeline.Title>
                                Marketing UI design in Figma
                            </Timeline.Title>
                            <Timeline.Body>
                                All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time>
                                April 2022
                            </Timeline.Time>
                            <Timeline.Title>
                                E-Commerce UI code in Tailwind CSS
                            </Timeline.Title>
                            <Timeline.Body>
                                Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                </Timeline>
            </div>
        </div>
    )
}
