import React from 'react';
import useApps from '../Hooks/useApps';
import AppCard from '../Components/AppCard';

const Apps = () => {
    const {apps} = useApps()
    return (
        <div>
            <div className='text-center m-10'>
                <h1 className='text-5xl font-bold mb-3'>Our All Applications</h1>
                <p className=' text-gray-400'>Explore All Apps on the Market Developed by us. We code for Millions</p>
            </div>

            {/* apps section */}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    apps.map(app => (<AppCard key={app.id} app={app}/>))
                }
            </div>
        </div>
    );
};

export default Apps;