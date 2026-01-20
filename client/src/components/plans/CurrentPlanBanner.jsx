import React from 'react';

const CurrentPlanBanner = ({ planName = "Basic" }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
                <h2 className="text-xl font-bold text-gray-900 leading-none">{planName}</h2>
                <span className="bg-blue-100 text-blue-700 text-[11px] px-2 py-0.5 rounded-full font-bold">Current plan</span>
            </div>
            <p className="text-gray-500 text-sm">
                This plan will always be free of charge. Development stores may upgrade to any plan free of charge.
            </p>
        </div>
    );
};

export default CurrentPlanBanner;
