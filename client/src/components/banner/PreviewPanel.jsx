import React, { useState, useCallback } from 'react';
import { Card, BlockStack, LegacyCard } from '@shopify/polaris';
import { Cookie, X } from 'lucide-react';

const PreviewPanel = ({ settings }) => {
    const [viewMode, setViewMode] = useState('mobile'); // 'mobile' | 'desktop'

    const handleViewModeChange = useCallback(
        (value) => setViewMode(value),
        [],
    );

    const renderButtons = () => {
        const type = settings.bannerType;

        if (type === 'informative') {
            return (
                <button className="w-full py-2 px-4 border border-black text-black font-semibold rounded hover:bg-gray-50 uppercase text-xs tracking-wider">
                    Got it
                </button>
            );
        }

        if (type === 'opt-out') { // Decline only
            return (
                <button className="w-full py-2 px-4 border border-black text-black font-semibold rounded hover:bg-gray-50">
                    Decline
                </button>
            );
        }

        if (type === 'opt-in') { // Accept only
            return (
                <button className="w-full py-2 px-4 border-2 border-black bg-white text-black font-bold rounded hover:bg-gray-50">
                    Accept
                </button>
            );
        }

        if (type === 'opt-in-out') { // Accept/Decline
            return (
                <div className="flex flex-col gap-2 w-full">
                    <button className="w-full py-2 px-4 border-2 border-black text-black font-bold rounded hover:bg-gray-50">
                        Accept
                    </button>
                    <button className="w-full py-2 px-4 border border-black text-black font-semibold rounded hover:bg-gray-50">
                        Decline
                    </button>
                </div>
            );
        }

        if (type === 'preferences') {
            return (
                <div className="flex flex-col gap-2 w-full">
                    <button className="w-full py-2 px-4 bg-black text-white font-bold rounded hover:bg-gray-800">
                        Accept all
                    </button>
                    <button className="w-full py-2 px-4 border border-gray-300 text-gray-700 font-semibold rounded hover:bg-gray-50">
                        Preferences
                    </button>
                </div>
            );
        }

        return null; // Fallback
    };

    return (
        <LegacyCard>
            <LegacyCard.Section>
                <div className="bg-gray-100 rounded-lg flex text-sm self-start mb-4">
                    <button
                        className={`px-3 py-1.5 rounded-md transition-all ${viewMode === 'mobile' ? 'bg-white shadow-sm text-black font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                        onClick={() => setViewMode('mobile')}
                    >
                        Mobile preview
                    </button>
                    <button
                        className={`px-3 py-1.5 rounded-md transition-all ${viewMode === 'desktop' ? 'bg-white shadow-sm text-black font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                        onClick={() => setViewMode('desktop')}
                    >
                        Desktop preview
                    </button>
                </div>

                <div className="bg-gray-100 flex justify-center items-start rounded-lg min-h-[600px] overflow-hidden">
                    <div
                        className={`
                            bg-white shadow-xl rounded-3xl overflow-hidden relative transition-all duration-300
                            ${viewMode === 'mobile' ? 'w-[320px] min-h-[600px]' : 'w-full max-w-[800px] h-[500px] rounded-lg'}
                        `}
                    >
                        {/* Mock Page Content */}
                        <div className="w-full h-full bg-gray-50 flex flex-col items-center pt-20 gap-4 opacity-50 pointer-events-none">
                            <div className="w-3/4 h-8 bg-gray-200 rounded"></div>
                            <div className="w-5/6 h-32 bg-gray-200 rounded"></div>
                            <div className="w-3/4 h-20 bg-gray-200 rounded"></div>
                        </div>

                        {/* Banner Overlay */}
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4">
                            <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl relative animate-in fade-in zoom-in duration-300">
                                <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
                                    <X size={16} />
                                </button>

                                <div className="flex flex-col items-center text-center gap-4">
                                    <div className="mb-2">
                                        <Cookie size={40} className="text-black fill-white" />
                                    </div>

                                    <h3 className="text-lg font-bold sr-only">Cookie Consent</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        This website uses cookies to ensure you get the best experience. <br />
                                        <a href="#" className="underline text-gray-800 hover:text-black">Learn more</a>
                                    </p>

                                    <div className="w-full mt-2">
                                        {renderButtons()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LegacyCard.Section>
        </LegacyCard>
    );
};

export default PreviewPanel;
