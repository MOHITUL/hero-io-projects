import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { RiDownloadLine } from 'react-icons/ri';
import { Link, NavLink } from 'react-router';

const AppCard = ({ app }) => {
    const { image, title, downloads, ratingAvg } = app

    const formatDownloads = (num) => {
        if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
        return num;
    }
    return (
        <div className="card bg-base-100 m-8 shadow-xl hover:scale-105 transition ease-in-out">
            <figure className=" h-100 overflow-hidden">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl   object-cover shadow-lg " />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions flex justify-center gap-50">
                    <NavLink className="flex items-center gap-2 text-green-500 font-semibold"> <RiDownloadLine />
                        {formatDownloads(downloads)}</NavLink>

                    <button className="flex items-center gap-2 text-yellow-400 font-semibold"> <FaRegStar />
                        {ratingAvg} / 5</button>
                </div>
            </div>
        </div>

        
    );
};

export default AppCard;