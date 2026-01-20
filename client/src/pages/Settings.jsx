import React from 'react';
import SettingsHeader from '../components/settings/SettingsHeader';
import SettingsGrid from '../components/settings/SettingsGrid';
import SettingsFooter from '../components/settings/SettingsFooter';

const Settings = () => {
    return (
        <div className="flex flex-col p-6 max-w-[1200px] mx-auto bg-gray-50 min-h-screen font-sans">
            <SettingsHeader />
            <SettingsGrid />
            <SettingsFooter />
        </div>
    );
};

export default Settings;
