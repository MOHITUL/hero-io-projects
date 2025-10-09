import React from 'react';
import errorImg from '../assets/App-Error.png'
const ErrorApp = () => {
    return (
        <div className='flex justify-center items-center'>
            <img src={errorImg} alt="" />
            <h1>OPPS!! APP NOT FOUND</h1>
            <p>The App you are requesting is not found on our system.please try another apps</p>
        </div>
    );
};

export default ErrorApp;