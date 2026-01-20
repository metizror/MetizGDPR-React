import React from 'react';
import { ArrowLeft, MessageSquare, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlansHeader = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
                <Link to="/" className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                    <ArrowLeft size={20} className="text-gray-700" />
                </Link>
                <h1 className="text-2xl font-bold text-gray-900">Plans</h1>
            </div>
            <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors">
                    <MessageSquare size={16} />
                    Get support
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors">
                    <Ticket size={16} />
                    Apply coupon
                </button>
            </div>
        </div>
    );
};

export default PlansHeader;
