import React, { useEffect, useState } from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';

const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);

    useEffect(() => {
        const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
        setInstalledApps(apps);
    },[]);

    const handleUninstall = (id) =>{
        const updated = installedApps.filter(app => app.id !== id);
        setInstalledApps(updated);
        localStorage.setItem("installedApps", JSON.stringify(updated));
    };
    return (
        <div className='max-w-7xl mx-auto p-5'>
            <h1 className='text-4xl font-bold text-center mt-8 mb-5' >Your Installed Apps</h1>
            <p className='text-gray-500 text-center mb-15'>Explore All Trending Apps on the Market Developed by US</p>

            <p className='mb-10 text-gray-900 font-semibold  text-2xl'>{installedApps.length} Apps Found</p>

            <div className='space-y-5'>
                {
                    installedApps.length === 0 ? (
                        <p className='text-gray-500 text-center'> No Apps Installed Yet </p>
                    ) : (
                        installedApps.map(app => (
                            <div key={app.id} className='flex justify-between items-center p-5 rounded-md shadow bg-white'>
                                <div className='flex items-center gap-4'>
                                    <img src={app.image} className='w-16 h-16 rounded object-cover'/>
                                    <div>
                                        <h2 className='font-semibold text-lg'>{app.title}</h2>
                                        <div className='flex items-center gap-3 text-gray-500 text-sm'>
                                            <span className='flex items-center gap-1 text-green-600'> <FaDownload/> {app.downloads} </span>
                                            <span className='flex items-center gap-1 text-yellow-500'> <FaStar/>{app.ratingAvg}  </span>
                                            <span>{app.size} MB</span>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => handleUninstall(app.id)} className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium cursor-pointer'>
                                    Uninstall
                                </button>
                            </div>
                        ))
                    )
                }

            </div>
        </div>
    );
};

export default Installation;