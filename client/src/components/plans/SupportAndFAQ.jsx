import React from 'react';

const SupportAndFAQ = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div className="flex flex-col gap-6">
                {/* Live chat & email */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex items-start justify-between">
                    <div className="max-w-[65%]">
                        <h3 className="text-base font-bold text-gray-900 mb-3">Live chat & email</h3>
                        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                            All our plans come with email and live chat support to offer help whenever you need it.
                        </p>
                        <div className="flex items-center gap-4">
                            <button className="px-5 py-1.5 border border-gray-300 rounded-lg text-sm font-bold hover:bg-gray-50 transition-colors shadow-sm">
                                Chat now
                            </button>
                            <button className="text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors">
                                Contact
                            </button>
                        </div>
                    </div>
                    <div className="w-24 h-24 flex-shrink-0">
                        {/* Simple illustration placeholder */}
                        <svg viewBox="0 0 100 100" className="w-full h-full text-blue-100 fill-current opacity-80">
                            <circle cx="50" cy="40" r="15" />
                            <path d="M50 60c-20 0-30 10-30 20v5h60v-5c0-10-10-20-30-20z" />
                            <rect x="70" y="20" width="20" height="15" rx="2" className="text-blue-400" />
                        </svg>
                    </div>
                </div>

                {/* Help center */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex items-start justify-between">
                    <div className="max-w-[65%]">
                        <h3 className="text-base font-bold text-gray-900 mb-3">Help center</h3>
                        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                            You may visit our knowledge base to learn more about our services.
                        </p>
                        <button className="px-5 py-1.5 border border-gray-300 rounded-lg text-sm font-bold hover:bg-gray-50 transition-colors shadow-sm">
                            Learn more
                        </button>
                    </div>
                    <div className="w-24 h-24 flex-shrink-0">
                        {/* Simple illustration placeholder */}
                        <svg viewBox="0 0 100 100" className="w-full h-full text-blue-100 fill-current opacity-80">
                            <rect x="30" y="30" width="40" height="50" rx="3" />
                            <line x1="40" y1="45" x2="60" y2="45" className="stroke-white stroke-[3]" />
                            <line x1="40" y1="55" x2="60" y2="55" className="stroke-white stroke-[3]" />
                            <line x1="40" y1="65" x2="55" y2="65" className="stroke-white stroke-[3]" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-base font-bold text-gray-900 mb-6">FAQ</h3>
                <ul className="flex flex-col gap-4">
                    {[
                        'How billing works on the app?',
                        'What happens after my trial ends?',
                        'Can I upgrade or downgrade plans at any time?',
                        'Does my free trial limit my access to features?',
                        'What is the refund policy?',
                        'Why to subscribe for a paid plan?',
                    ].map((q, i) => (
                        <li key={i}>
                            <a href="#" className="text-sm text-blue-600 font-medium hover:underline flex items-center gap-1">
                                {q}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SupportAndFAQ;
