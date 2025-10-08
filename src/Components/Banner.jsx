import React from 'react';
import { FaApple, FaGooglePay, FaGooglePlay } from 'react-icons/fa';
import mkImg from '../assets/hero.png'
const Banner = () => {
    return (
        <div className='bg-white text-center py-20'>
            {/* title */}
            <h1 className='text-4xl md:text-5xl font-bold mb-5 pb-5'> We Build
                <br />
                <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'> Productive </span> Apps
            </h1>
            <p className='text-gray-500 max-w-3xl mx-auto mb-8'>
                At  HERO.IO , we craft innovative apps designed  to make everyday life simpler, smarter, and more exciting.

                Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>

            {/* Button */}

            <div className='flex justify-center gap-4 mb-12'>
                <button onClick={() => window.open("https://play.google.com/store/games?hl=en", "_blank")} className='flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition text-xl font-bold cursor-pointer'>
                    <FaGooglePlay className='text-green-500 text-3xl' />
                    Google Play
                </button>

                <button onClick={() => window.open("https://www.apple.com/app-store/", "_blank")} className='flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition text-xl font-bold cursor-pointer'>
                    <FaApple className='text-black text-3xl ' />
                    App Store
                </button>
            </div>

            {/* Mockup Image */}
            <div className='flex justify-center '>
                <img src={mkImg} className='w-90 md:w-200' alt="" />
            </div>

            {/* status */}
            <div className='bg-gradient-to-r from-purple-600 to-indigo-500 text-white p-10'>
                <h2 className='text-3xl md:text-5xl font-semibold mb-10'>Trusted By Millions, Built For You</h2>
                <div className='flex flex-col md:flex-row justify-center gap-25'>
                    {/* 1 */}
                    <div>

                        <p className='text-sm text-purple-200 mb-2'>Total Downloads</p>
                        <h3 className='text-5xl font-bold mb-2'>29.6M</h3>

                        <p className='text-xs text-purple-300'>21% More Than Last Month</p>
                    </div>
                    {/* 2 */}
                    <div>

                        <p className='text-sm text-purple-200 mb-2'>Total Reviews</p>
                        <h3 className='text-5xl font-bold mb-2'>906K</h3>

                        <p className='text-xs text-purple-300'>46% More Than Last Month</p>
                    </div>
                    {/* 3 */}
                    <div>

                        <p className='text-sm text-purple-200 mb-2'>Active Apps</p>
                        <h3 className='text-5xl font-bold mb-2'>132+</h3>

                        <p className='text-xs text-purple-300'>31 More Launch</p>
                    </div>
                </div>
            </div>

            {/* Trending Apps */}
            <div className='text-center mt-15'>
                <h1 className='font-bold text-4xl'>Trending Apps</h1>
                <p className='text-xl mt-3 text-gray-300'>Explore All Trending Apps on Market Developed by Us</p>
            </div>
        </div>
    );
};

export default Banner;