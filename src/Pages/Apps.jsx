import React, { useEffect, useState } from 'react';
import useApps from '../Hooks/useApps';
import AppCard from '../Components/AppCard';
import appErrorImg from '../assets/App-Error.png'
import { BarLoader } from 'react-spinners';

const Apps = () => {
    const { apps } = useApps();
    const [search, setSearch] = useState('');
    const [loading, setLoading] =useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        },2000);
        return () => clearTimeout(timer);
    },[]);

    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term? apps.filter(app => app.title.toLocaleLowerCase().includes(term)) : apps;


    if(loading) {
        return (
            <div className='flex flex-col justify-center items-center h-screen '>
                <BarLoader color='#6D28D9'  />
                <p className='mt-5 text-gray-600 text-lg font-medium'>Loading Apps...</p>
            </div>
        )
    }


    return (
        <div>
            <div className='text-center m-10'>
                <h1 className='text-5xl font-bold mb-3'>Our All Applications</h1>
                <p className=' text-gray-400'>Explore All Apps on the Market Developed by us. We code for Millions</p>
            </div>

            <div className='flex justify-between items-center mx-10 py-5'>
                <h1 className='font-bold text-xl'>({searchedApps.length}) Apps Found</h1>

                <label className="input">
                    
                    <input
                    value={search}
                    onChange={e => setSearch(e.target.value)} type="search" placeholder="search app"  />
                </label>
            </div>

            {/* apps section */}

            {
                searchedApps.length > 0 ? (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    searchedApps.map(app => (<AppCard key={app.id} app={app} />))
                }
            </div>) : <div className='flex flex-col items-center justify-center py-5 text-center'>
                <img src={appErrorImg} className='mb-5 h-70'/>
                <h2 className='text-3xl font-bold text-gray-800 mb-2'> OPPS!! APP NOT FOUND </h2>
                <p className='text-gray-500'> The App you are requesting is not found on our system. please try another apps </p>
                 
                </div>
            }
        </div>
    );
};

export default Apps;