import React from 'react';
import Banner from '../Components/Banner';
import useApps from '../Hooks/useApps';
import AppCard from '../Components/AppCard';
import { Link } from 'react-router';

const Home = () => {
    const {apps} = useApps()
    const featuredApps = apps.slice(0,8)
    return (
        <div>
            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2' >
                {
                    featuredApps.map(app => (<AppCard key={app.id} app={app} />) )
                }
            </div>

            <div className='text-center py-5'>
                <Link className='btn  text-2xl text-white p-5  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-lg mx-10' to='/apps' > Show All</Link>
            </div>
        </div>
    );
};

export default Home;