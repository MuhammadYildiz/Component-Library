import React from 'react'

export default function Contact() {
    return (
        <div className=' p-[10px] sm:px-[100px] min-h-[76vh]  '>
            <div className='bg-cyan-400 mt-20 items-center flex flex-col lg:flex-row  justify-around rounded-2xl '>
                <form className="flex flex-col w-[90%] md:w-1/2 bg-zinc-500 m-6 p-4 text-white items-center ">
                    <div className='w-full text-center'>
                        <div className="mb-2 text-left ml-10 lg:ml-24 text-xl block">
                            <label htmlFor="email">
                                <h4>Your email:</h4>
                            </label>
                        </div>
                        <input
                            className='w-full md:w-[70%] p-2 mb-3'
                            id="email2"
                            type="email"
                            placeholder="name@flowbite.com"
                        />
                    </div>
                    <div className='w-full text-center'>
                        <div className="mb-2 text-left ml-10 lg:ml-24 text-xl block">
                            <label htmlFor="password2">
                                Your password:
                            </label>
                        </div>
                        <input
                            className='w-full md:w-[70%] p-2 mb-3'
                            id="password"
                            type="password"
                            autoComplete='false'
                            required={true}
                        />
                    </div>
                    <div className='w-full text-center'>
                        <div className="mb-2 text-left ml-10 lg:ml-24 text-xl block">
                            <label htmlFor="repeat-password">
                                Repeat password:
                            </label>
                        </div>
                        <input
                            className='w-full md:w-[70%] p-2 mb-3'
                            id="repeat-password"
                            type="password"
                            autoComplete='false'
                            required={true}
                        />
                    </div>
                    <div className="flex items-center gap-2 text-xl">
                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="agree">
                            I agree with the{' '}
                            <a
                                href="/forms"
                                className="text-blue-600 hover:underline dark:text-blue-500"
                            >
                                terms and conditions
                            </a>
                        </label>
                    </div>
                    <button type="submit" className='bg-blue-600 px-10 py-2 text-xl font-bold mt-3 hover:bg-black'>
                        Submit
                    </button>
                </form>


                <div id="textarea" className=' className="flex flex-col w-[90%] md:w-1/2 bg-zinc-500 m-6 p-4 text-white items-center"'>
                    <div className="mb-2 block">
                        <label htmlFor="comment">
                            <h3 className='text-xl px-2 '>Your message:</h3>
                        </label>
                    </div>
                    <textarea
                        id="comment"
                        placeholder="Leave a comment..."
                        required={true}
                        rows={12}
                        className="m-auto w-full p-3  outline-none"
                    >
                    </textarea>
                </div>
            </div>
        </div>
    )
}
