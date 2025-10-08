import React from 'react';
import { Link, NavLink } from 'react-router';
import lgImg from '../assets/logo.png'
import gitImg from '../assets/Github-Logo-PNG.png'

const Navbar = () => {
    return (
        
        <div className="navbar bg-base-100 shadow-sm">
            
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li className='font-semibold text-xl'>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li className='font-semibold text-xl'>
                            <NavLink to='/apps'>Apps</NavLink>
                        </li>
                        <li className='font-semibold text-xl'>
                            <NavLink to='/installation'>Installation</NavLink>
                        </li>

                    </ul>
                </div>
                
                <div className='flex justify-center items-center btn-ghost mx-10'>
                    <img className='h-12 w-12' src={lgImg} alt="" />
                    <Link to='/' className="text-xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ">HERO.IO</Link>
                </div>
            </div>


            {/* 2 */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-semibold text-xl'>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li className='font-semibold text-xl'>
                        <NavLink to='/apps'>Apps</NavLink>
                    </li>
                    <li className='font-semibold text-xl'>
                        <NavLink to='/installation'>Installation</NavLink>
                    </li>
                </ul>
            </div>

            {/* 3 */}
            <div className="navbar-end">
                <div className='flex justify-center items-center btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-lg mx-10'>
                    <img className='h-10 w-10' src={gitImg} alt="" />
                <NavLink to="https://github.com/MOHITUL" className="font-bold text-white text-sm">Contribute</NavLink>
                </div>
            </div>
            
        </div>
        
    );
};

export default Navbar;