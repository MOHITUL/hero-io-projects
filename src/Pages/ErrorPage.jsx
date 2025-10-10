import React from 'react';
import { Link } from 'react-router';
import errImg from '../assets/error-404.png'
import { FaHome } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center '>

            <img src={errImg} alt="" className=' mb-10 ' />

            <h2 className='text-4xl font-semibold text-gray-800'> Oops ! Page Not Found. </h2>

            <p className='text-gray-500 mt-4 mb-6'> The page ypu're looking for doesn't exist </p>

            <Link to='/' className='flex items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-5 py-3 rounded-lg'> <FaHome/> Back to Home </Link>
        </div>
    );
};

export default ErrorPage;