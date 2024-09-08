import React from 'react'

const DashboardCard = ({ title, point, description }) => {
    return (
        <div className="bg-white shadow-md p-4 rounded-lg border-[0.1px] border-black border-opacity-60">
            <h3 className="text-gray-700 text-sm font-semibold">{title}</h3>
            <p className="text-2xl font-bold">{point}</p>
            <span className="text-gray-500 text-xs">{description}</span>
        </div>
    );
};

export default DashboardCard
