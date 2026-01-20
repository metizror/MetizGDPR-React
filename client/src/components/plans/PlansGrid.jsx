import React from 'react';
import { Check } from 'lucide-react';

const PlansGrid = ({ plans, billingCycle }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {plans.map((plan, index) => (
                <div
                    key={index}
                    className={`relative bg-white border rounded-2xl p-6 flex flex-col transition-all duration-300 ${plan.highlight ? 'border-green-300 ring-4 ring-green-100' : 'border-gray-200'}`}
                >
                    {plan.badge && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-200 text-green-700 text-[11px] font-bold px-4 py-1.5 rounded-lg shadow-sm whitespace-nowrap">
                            {plan.badge}
                        </div>
                    )}

                    <div className="flex flex-col h-full">
                        <div className="h-full">
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                                <p className="text-xs text-gray-500">{plan.tagline}</p>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                    <span className="text-sm text-gray-500">{plan.priceDetail}</span>
                                </div>
                                {billingCycle === 'yearly' && plan.priceYearly && (
                                    <p className="text-xs text-gray-500 mt-1">{plan.priceYearly}</p>
                                )}
                                {plan.trial && (
                                    <span className="inline-block mt-2 bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-1 rounded border border-blue-100 uppercase tracking-tighter">
                                        {plan.trial}
                                    </span>
                                )}
                            </div>
                        </div>

                        <button className="w-full py-2.5 bg-gray-800 text-white rounded-lg text-sm font-bold hover:bg-gray-700 transition-colors mb-8">
                            {plan.buttonText}
                        </button>
                    </div>

                    <ul className="flex flex-col gap-3 mt-auto border-t border-gray-100 pt-6">
                        {plan.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start gap-2 text-xs text-gray-600">
                                <Check size={14} className="text-gray-400 mt-0.5 shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default PlansGrid;
