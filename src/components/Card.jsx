import React from 'react'
import { BsLink45Deg } from 'react-icons/bs';
import { BsShare } from 'react-icons/bs';

const style = {
    color: {
        cardStayle: "bg-cyan-500 mx-[10px] sm:mx-[100px] mb-5 pb-1 rounded-3xl shadow-slate-700 shadow-xl "
    }
}
export default function Card(props) {
    const { color, href, src, alt } = props
    return (
        <div className={`${style.color[color]}`}>
            <img className='rounded-t-3xl' src={src} alt={alt} />
            <div className=' bg-zinc-600 rounded-md m-5 sm:m-20 pb-5 '>
                <h1 className=' text-2xl text-white p-5 sm:p-10' >Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                <p className='text-white px-5 sm:px-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, nemo! Possimus nisi quisquam nihil laboriosam minima excepturi quasi vel. Omnis temporibus ipsa eos voluptas hic voluptatibus? Quis, ipsa aliquid! Quam nam quisquam veritatis possimus facilis sed cum eum tempora dignissimos suscipit, dolores optio necessitatibus numquam rerum voluptatibus fuga iure repellat!</p>
                <div className=' mt-5 flex justify-around'>
                    <button>
                        <a className='flex justify-center items-center px-3 p-2 text-white bg-blue-900 hover:bg-blue-600' href={href} target="_blank">
                            TailwindCSS <BsLink45Deg className='text-2xl ml-2' />
                        </a>
                    </button>
                    <button className='flex justify-center items-center px-3 p-2 text-white bg-blue-900 hover:bg-blue-600' >
                        Share <BsShare className='text-2xl ml-2' /></button>
                </div>
            </div>

            <div className=''>
                <div className="w-full">
                    <div className="mt-12 relative">
                        <div className="relative w-full overflow-hidden">
                            <div>
                                <div className="p-6 transform duration-300 transition-all ease-in-out mx-auto block">
                                    <div className="container mx-auto px-4">
                                        <div className="flex flex-wrap -mx-4">
                                            <div className="px-4 relative w-full md:w-6/12 flex items-center mx-auto">
                                                <div className="p-2">
                                                    <h2 className="text-4xl font-bold leading-tight mt-0 mb-2">Sarah Smith</h2>
                                                    <p className="mt-4 mb-12 text-blueGray-500 text-lg leading-relaxed">Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success. A single rose can be my garden... a single friend, my world.</p>
                                                    <button className="inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-white bg-indigo-500 border-indigo-500 active:bg-indigo-600 active:border-indigo-600 text-sm px-6 py-2 shadow hover:shadow-lg rounded-md">read more</button>
                                                </div>
                                            </div>
                                            <div className="px-12 py-12 relative w-full md:w-5/12">
                                                <div className="p-6"><img className="w-full rounded-lg shadow-xl" src="https://demos.creative-tim.com/notus-pro-react/static/media/brooke-cagle.940d1a99.jpg" alt="..."/></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 transform duration-300 transition-all ease-in-out mx-auto hidden">
                                    <div className="container mx-auto px-4">
                                        <div className="flex flex-wrap -mx-4">
                                            <div className="px-4 relative w-full md:w-6/12 flex items-center mx-auto">
                                                <div className="p-2">
                                                    <h2 className="text-4xl font-bold leading-tight mt-0 mb-2">Isaac Hunter</h2>
                                                    <p className="mt-4 mb-12 text-blueGray-500 text-lg leading-relaxed">Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success. A single rose can be my garden... a single friend, my world.</p>
                                                    <button className="inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-white bg-teal-500 border-teal-500 active:bg-teal-600 active:border-teal-600 text-sm px-6 py-2 shadow hover:shadow-lg rounded-md">read more</button>
                                                </div>
                                            </div>
                                            <div className="px-12 py-12 relative w-full md:w-5/12">
                                                <div className="p-6"><img className="w-full rounded-lg shadow-xl" src="https://demos.creative-tim.com/notus-pro-react/static/media/fezbot.106ba6c3.jpg" alt="..."/></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center mb-12"><a href="#" className="text-white text-center opacity-50 hover:opacity-100 transition-opacity duration-150 ease-linear w-12 text-xl"><i className="text-lightBlue-500 fas fa-chevron-left"></i><span className="sr-only">Previous</span></a><a href="#" className="text-white text-center opacity-50 hover:opacity-100 transition-opacity duration-150 ease-linear w-12 text-xl"><i className="text-lightBlue-500 fas fa-chevron-right"></i><span className="sr-only">Next</span></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
