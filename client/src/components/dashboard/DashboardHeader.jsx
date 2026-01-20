import React from 'react';
import { Link } from 'react-router-dom';

const DashboardHeader = () => {
    return (
        <div className="flex justify-end">
            <Link to="/plans" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors shadow-sm">
                View Plans
            </Link>
        </div>
    );
};

export default DashboardHeader;
