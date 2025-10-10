import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import { FaClock, FaComment, FaCommentDots, FaDownload, FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AppDetails = () => {
    const { id } = useParams()
    const { apps, loading } = useApps()
    const app = apps.find(p => String(p.id) === id);


    const [installed, setInstalled] = useState(false);

    useEffect(() => {
        const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
        const isAlreadyInstalled = installedApps.some(a => a.id == app?.id);
        setInstalled(isAlreadyInstalled);
    },[app])

    if (loading) return <p>Loading...</p>
    if(!app) return <p>App not found.</p>

    const { image, title, companyName, downloads, ratingAvg, reviews, size, ratings,description} = app;

    const handleInstall = () => {
        const installedApps =JSON.parse(localStorage.getItem("installedApps")) || [];
        if(!installedApps.some(a => a.id == app.id)){
            installedApps.push(app);
            localStorage.setItem("installedApps",JSON.stringify(installedApps));
             setInstalled(true);
        toast.success(`${title} installed successfully!`,{position: "top-center"});
        }
;
    }

    return (
        <div>
            <div className=" rounded-sm shadow-sm p-8 flex flex-col md:flex-row items-center gap-12 md:gap-30 mt-10 mx-15 max-w-8xl">

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

                    <div className="flex flex-col items-center">
                        <FaCommentDots className="text-purple-500 text-3xl mb-2" />
                        <p className="text-sm">Total Reviews</p>
                        <h3 className="text-2xl font-bold">{reviews}</h3>
                    </div>
                </div>

                <button onClick={handleInstall}
                    disabled={installed}
                    className={`${installed
                            ? 'bg-green-300 cursor-not-allowed'
                            : 'bg-green-500 hover:bg-green-600'
                        } text-white font-medium px-6 py-2 rounded-md shadow-sm transition cursor-pointer`}
                >
                    {installed ? 'Installed' : `Install Now (${size}MB)`}
                </button>
                <div className="border-b border-gray-200 my-4" />
            </div>
            
        </div>

        {/* chart */}
        <div className='mt-15 mb-10 font-bold mx-15 text-4xl'>
            Ratings
        </div>

         <div >
          
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={ratings}
              layout="vertical" 
              margin={{ top: 5, right: 50, left: 30, bottom: 10 }}
            >
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={100} />
              <Tooltip />
              <Bar dataKey="count" fill="#f97316" barSize={25} radius={[5, 5, 5, 5]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div>
            <h1 className='font-bold text-4xl mt-10 mb-10 mx-15'>Description</h1>
            <p className='mx-15 text-lg text-justify text-gray-800 mb-15  '>{description}</p>
        </div>

        <ToastContainer />
        </div>
    );
};

export default AppDetails;