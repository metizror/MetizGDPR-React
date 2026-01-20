import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ReportsHeader = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center gap-4 mb-8">
            <button
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="Go back"
            >
                <ArrowLeft size={20} className="text-gray-700" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
        </div>
    );
};

export default ReportsHeader;
