import React from 'react';
import { ExternalLink } from 'lucide-react';

const SettingsFooter = () => {
    return (
        <div className="mt-20 flex flex-col items-center gap-2">
            <a href="#" className="flex items-center gap-1.5 text-blue-600 text-[13px] font-bold hover:underline">
                Learn more in the <ExternalLink size={14} /> Knowledge base
            </a>
            <span className="text-[11px] text-gray-400">Version: v4.2.0</span>
        </div>
    );
};

export default SettingsFooter;
