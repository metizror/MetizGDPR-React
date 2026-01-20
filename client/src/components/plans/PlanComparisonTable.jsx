import React from 'react';
import { Check, X } from 'lucide-react';

const PlanComparisonTable = () => {
    return (
        <div className="mt-16 mb-20 overflow-hidden">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Compare all plans</h2>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-gray-200">
                            <th className="p-6 w-1/3"></th>
                            <th className="p-6 text-center font-bold text-gray-900 border-x border-gray-100 bg-white">Basic</th>
                            <th className="p-6 text-center font-bold text-gray-900 border-x border-gray-100 bg-white">Plus</th>
                            <th className="p-6 text-center font-bold text-gray-900 border-x border-blue-50 bg-blue-50/50">Premium</th>
                            <th className="p-6 text-center font-bold text-gray-900 border-x border-gray-100 bg-white">Enterprise</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Section: Cookie Consent Banner */}
                        <tr className="bg-gray-50/50">
                            <td colSpan="5" className="p-4 px-6 text-sm font-bold text-gray-900">Cookie Consent Banner</td>
                        </tr>
                        {[
                            { name: 'GDPR, CCPA and other regional laws', values: [true, true, true, true] },
                            { name: 'Preview changes without saving', values: [true, true, true, true] },
                            { name: 'Tailored branding & styling', values: [true, true, true, true] },
                            { name: 'Logo gallery', values: [true, true, true, true] },
                            { name: 'Basic banner types & consent mode', values: [true, true, true, true] },
                            { name: 'Configurable Privacy policy & Impressum links', values: [true, true, true, true] },
                            { name: 'Reopen banner button', values: [true, true, true, true] },
                            { name: 'Preferences popup', values: [false, true, true, true] },
                            { name: 'Reset consent button', values: [false, true, true, true] },
                            { name: 'Custom styling (CSS)', values: [false, true, true, true] },
                            { name: 'Custom logo', values: [false, false, true, true] },
                            { name: 'Implied consent support (timeout/scroll)', values: [false, false, true, true] },
                            { name: 'Admin mode', values: [false, false, true, true] },
                            { name: 'Reopen/revoke consent link on menu', values: [false, false, true, true] },
                            { name: 'Banner only on homepage', values: [false, false, true, true] },
                        ].map((feature, i) => (
                            <tr key={i} className="border-b border-gray-100 hover:bg-gray-50/30 transition-colors">
                                <td className="p-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{feature.name}</td>
                                {feature.values.map((v, idx) => (
                                    <td key={idx} className={`p-4 text-center border-r border-gray-50 last:border-r-0`}>
                                        {v ? (
                                            <Check size={18} className="mx-auto text-green-500" />
                                        ) : (
                                            <X size={16} className="mx-auto text-gray-300" />
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}

                        {/* Section: Store scanner */}
                        <tr className="bg-gray-50/50">
                            <td colSpan="5" className="p-4 px-6 text-sm font-bold text-gray-900 border-t border-gray-200">Store scanner</td>
                        </tr>
                        {[
                            { name: 'Auto detection of cookies with installation', values: [true, true, true, true] },
                            { name: 'Cookie information and auto categorization', values: [true, true, true, true] },
                            { name: 'Scan on demand', values: [false, true, true, true] },
                            { name: 'Scan history', values: [false, true, true, true] },
                            { name: 'Cookies editor', values: [false, true, true, true] },
                            { name: 'Cookies declaration page', values: [false, true, true, true] },
                            { name: 'User-Tracking Pixels & HTML Storage', values: [false, false, true, true] },
                            { name: 'Embedded videos (iframes)', values: [false, false, true, true] },
                            { name: 'Scan behind password', values: [false, false, false, true] },
                            { name: 'Recommendations', values: [false, false, false, true] },
                        ].map((feature, i) => (
                            <tr key={i} className="border-b border-gray-100 hover:bg-gray-50/30 transition-colors">
                                <td className="p-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{feature.name}</td>
                                {feature.values.map((v, idx) => (
                                    <td key={idx} className={`p-4 text-center border-r border-gray-50 last:border-r-0 ${idx === 2 ? 'bg-blue-50/30 border-x-blue-50' : ''}`}>
                                        {v ? (
                                            <Check size={18} className="mx-auto text-green-500" />
                                        ) : (
                                            <X size={16} className="mx-auto text-gray-300" />
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}

                        {/* Section: Integrations & Auto-blocker */}
                        <tr className="bg-gray-50/50">
                            <td colSpan="5" className="p-4 px-6 text-sm font-bold text-gray-900 border-t border-gray-200">Integrations & Auto-blocker</td>
                        </tr>
                        {[
                            { name: 'Shopify customer privacy', values: [true, true, true, true] },
                            { name: 'Global Privacy Control', values: [true, true, true, true] },
                            { name: 'Pandectes Consent Event', values: [false, true, true, true] },
                            { name: 'Google consent mode (GCM v2)', values: [false, true, true, true] },
                        ].map((feature, i) => (
                            <tr key={i} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/30 transition-colors">
                                <td className="p-4 px-6 text-[13px] text-gray-600 border-r border-gray-50">{feature.name}</td>
                                {feature.values.map((v, idx) => (
                                    <td key={idx} className={`p-4 text-center border-r border-gray-50 last:border-r-0 ${idx === 2 ? 'bg-blue-50/30 border-x-blue-50' : ''}`}>
                                        {v ? (
                                            <Check size={18} className="mx-auto text-green-500" />
                                        ) : (
                                            <X size={16} className="mx-auto text-gray-300" />
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PlanComparisonTable;
