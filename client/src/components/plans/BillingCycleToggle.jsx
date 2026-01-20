import React from 'react';

const BillingCycleToggle = ({ billingCycle, setBillingCycle }) => {
    return (
        <div className="flex justify-center mt-2">
            <div className="bg-white p-1 rounded-xl border border-gray-100 flex shadow-sm">
                <button
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${billingCycle === 'monthly' ? 'bg-gray-800 text-white' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    Pay monthly
                </button>
                <button
                    onClick={() => setBillingCycle('yearly')}
                    className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${billingCycle === 'yearly' ? 'bg-gray-800 text-white' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    Pay yearly <span className="text-[10px] opacity-80">(Save 2 months)</span>
                </button>
            </div>
        </div>
    );
};

export default BillingCycleToggle;
