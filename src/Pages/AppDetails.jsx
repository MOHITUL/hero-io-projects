import React from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import { FaClock, FaComment, FaCommentDots, FaDownload, FaStar } from 'react-icons/fa';

const AppDetails = () => {
    const {id} = useParams()
    const {apps, loading} = useApps()
    const app = apps .find(p => String(p.id) === id)
    
    if(loading) return <p>Loading...</p>

    const {image, title, companyName, downloads, ratingAvg, reviews, size} = app

    return (
       <div className=" rounded-sm shadow-sm p-8 flex flex-col md:flex-row items-center gap-12 md:gap-30 mt-10 mx-auto max-w-7xl">

      
      <img
        src={image}
        alt="App Logo"
        className="w-50 h-50 object-contain"
      />

      {/* App Info Section */}
      <div className="flex-1 space-y-4 w-full">

        <h2 className="text-2xl md:text-5xl font-semibold text-gray-800">
          {title}
        </h2>

        <p className="text-gray-500 text-sm md:text-base">
          Developed by{" "}
          <span className="text-purple-600 font-medium">
            {companyName}
          </span>
        </p>

        <div className="border-t border-gray-200 my-5" />

        <div className="flex flex-wrap justify-between md:justify-start md:gap-20 text-center text-gray-700">
          {/* Downloads */}
          <div className="flex flex-col items-center">
            <FaDownload className="text-green-500 text-3xl mb-2" />
            <p className="text-sm">Downloads</p>
            <h3 className="text-2xl font-bold">{downloads}</h3>
          </div>

          <div className="flex flex-col items-center">
            <FaStar className="text-yellow-500 text-3xl mb-2" />
            <p className="text-sm">Average Ratings</p>
            <h3 className="text-2xl font-bold">{ratingAvg}</h3>
          </div>

          {/* Reviews */}
          <div className="flex flex-col items-center">
            <FaCommentDots className="text-purple-500 text-3xl mb-2" />
            <p className="text-sm">Total Reviews</p>
            <h3 className="text-2xl font-bold">{reviews}</h3>
          </div>
        </div>

        <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-2 rounded-md shadow-sm my-3 cursor-pointer">
          Install Now ({size} MB)
        </button>
        <div className="border-b border-gray-200 my-4" />
      </div>
    </div>
    );
};

export default AppDetails;