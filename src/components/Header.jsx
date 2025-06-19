import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-50 items-center mb-16">

        {/*Left side: vedio banner */ }

        <div className="order-2 md:order-1 flex justify-center">
            <div class="mt-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] rounded-3xl overflow-hidden">
                <video src={assets.video_banner} autoPlay loop muted className='w-full max-w-[400px] h-auto object-cover' />
            </div>
         </div>

         {/*right side : text content */ }
    </div>
  )
}

export default Header
