import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import AppCard from '../Components/AppCard';

const Apps = () => {
    const { apps } = useApps()
    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term? apps.filter(app => app.title.toLocaleLowerCase().includes(term)) : apps
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

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    searchedApps.map(app => (<AppCard key={app.id} app={app} />))
                }
            </div>
        </div>
    );
};

export default Apps;