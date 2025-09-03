import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Header = () => {

  const {removeBg}=useContext(AppContext);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center mb-16">

        {/*Left side: vedio banner */ }

        <div className="order-2 md:order-1 flex justify-center">
            <div className="shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] rounded-3xl overflow-hidden">
                <video src={assets.video_banner} autoPlay loop muted className="w-full max-w-[400px] h-auto object-cover rounded-4xl"/>
            </div>
         </div>

        {/*right side : text content */ }


        <div className="order-1 md:order-2">
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight lg:whitespace-nowrap'>
            Remove backgrounds <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">in a flash.
                              </span><br/> Clean. Fast. <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Free.</span>
          </h1>
          <p className="text-left text-gray-600 mb-8 text-lg leading-relaxed">
            Instantly remove backgrounds from your images with smart AI technology. 
            Get clean, professional results in seconds—perfect for online stores, content 
            creators, or personal projects. No editing skills needed—just upload your image 
            and watch the magic happen.
          </p>
          <div>
            <input type="file" accept='image/*' id='upload1' hidden onChange={(e)=>removeBg(e.target.files[0])}/>
            <label
                 htmlFor="upload1"
                           className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 text-lg cursor-pointer">
                                                                                                                                                                                                                                          
                    Upload & Erase Instantly
                  </label>
          </div>

        </div>






    </div>
  )
}

export default Header
