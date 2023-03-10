import React from 'react'
import Avatar from './Avatar'
export default function About() {
  return (
    <div className='-z-50'>
      <Avatar
        alt="Default avatar with alt text"
        img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        rounded={true}
      />
      <div className="w-full">
        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <div className="mb-12 flex flex-wrap -mx-4 justify-start">
                <div className="px-4 relative w-full lg:w-8/12 text-left">
                  <h6 className="mb-2 text-lg font-bold uppercase text-pink-500">About streets</h6>
                  <h2 className="text-4xl font-bold mt-0 mb-1 text-blueGray-700">You have to love your streets</h2>
                  <p className="mt-2 mb-4 text-xl leading-relaxed text-blueGray-400">About streets, about the streets, it's clear that people will start speaking about the streets again. You have a street life, you need to live it like so. Let me tell you the base rule of living on the streets, you need to respect them.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="px-4 relative  lg:w-4/12 w-full md:w-6/12">
                <div className=" relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded-lg">
                  <a href="#">
                    <img alt="..." className="shadow-lg rounded-lg w-full flex-shrink-0" src="https://demos.creative-tim.com/notus-pro-react/static/media/castle-1.180e8ed5.jpg" />
                    <h3 className="text-2xl font-bold leading-tight ml-1 mt-6">That’s One Way To Ditch Your Castle</h3>
                  </a>
                  <p className="mt-3 leading-relaxed text-blueGray-500 ml-1">Finding temporary housing should be as easy as renting an Airbnb. That’s the idea behind Portofino, which raised $65 million to expand its pet sitting businesses. This come as the right move for the investment while the planet is moving on work from home...</p>
                  <div className="mt-6 flex items-center flex-col">
                    <img alt="..." src="https://demos.creative-tim.com/notus-pro-react/static/media/team-4.639c2559.jpg" className="rounded-full mr-3 max-w-40-px" />
                    <div className="flex-1">
                      <div className="justify-between items-center">
                        <h6 className="font-bold mt-0 mb-0">Tania Hanks<small className="text-sm text-blueGray-500 float-right"><i className="fas fa-heart opacity-75 text-red-500 mr-1"></i> 2.3K</small></h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 relative  lg:w-4/12 w-full md:w-6/12">
                <div className=" relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded-lg">
                  <a href="#">
                    <img alt="..." className="shadow-lg rounded-lg w-full flex-shrink-0" src="https://demos.creative-tim.com/notus-pro-react/static/media/pawel-nolbert.6876e1e9.jpg" />
                    <h3 className="text-2xl font-bold leading-tight ml-1 mt-6">Society of yesterday, today and tomorrow</h3>
                  </a>
                  <p className="mt-3 leading-relaxed text-blueGray-500 ml-1">Society has put up so many boundaries, so many limitations on what’s right and wrong that it’s almost nice. Let me tell you the base rule of living on the streets, you need to respect them.</p>
                  <div className="mt-6 flex items-center flex-col">
                    <img alt="..." src="https://demos.creative-tim.com/notus-pro-react/static/media/team-1.26905a67.jpg" className="rounded-full mr-3 max-w-40-px" />
                    <div className="flex-1">
                      <div className="justify-between items-center">
                        <h6 className="font-bold mt-0 mb-0">Jasmine Tailor<small className="text-sm text-blueGray-500 float-right"><i className="fas fa-heart opacity-75 text-red-500 mr-1"></i> 2.3K</small></h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 relative  lg:w-4/12 w-full md:w-6/12">
                <div className=" relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded-lg">
                  <a href="#">
                    <img alt="..." className="shadow-lg rounded-lg w-full flex-shrink-0" src="https://demos.creative-tim.com/notus-pro-react/static/media/twk-tt.cff2e507.jpg" />
                    <h3 className="text-2xl font-bold leading-tight ml-1 mt-6">New machine learning models for IFTTT</h3>
                  </a>
                  <p className="mt-3 leading-relaxed text-blueGray-500 ml-1">Let me tell you the base rule of living on the streets, you need to respect them. If you’ve ever wanted to train a machine learning model and integrate it with IFTTT. You have a street life, you need to live it like so.</p>
                  <div className="mt-6 flex flex-col  items-center">
                    <img alt="..." src="https://demos.creative-tim.com/notus-pro-react/static/media/michael.660d3e04.jpg" className="rounded-full mr-3 max-w-40-px" />
                    <div className="flex-1">
                      <div className="justify-between items-center">
                        <h6 className="font-bold mt-0 mb-0">Paul Smith<small className="text-sm text-blueGray-500 float-right"><i className="fas fa-heart opacity-75 text-red-500 mr-1"></i> 2.3K</small></h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
