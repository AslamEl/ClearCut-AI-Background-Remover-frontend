import React from 'react'
import Header from '../components/Header';
import BgRemovalSteps from '../components/BgRemovalSteps';
import BgSlider from '../components/BgSlider';
import Pricing from '../components/Pricing';


const Home = () =>{
    return(
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-[Outfit]'>

            {/* hero section */}
                <Header/>


            {/* background removal step section */}
                <BgRemovalSteps/>

            {/* Background removal slider section */}
                <BgSlider/>

            {/* Buy credits plan section */}
                <Pricing/>


            {/* user testimonials components  */}


            {/* try now section */}





           </div>
    )

}

export default Home;