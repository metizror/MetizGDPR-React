import React from 'react';
import { Link } from 'react-router-dom';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import ConsentsTracking from '../components/dashboard/ConsentsTracking';
import CustomerDataRequest from '../components/dashboard/CustomerDataRequest';
import GoogleConsentMode from '../components/dashboard/GoogleConsentMode';
import SupportChannel from '../components/dashboard/SupportChannel';

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-6 p-6 max-w-[1200px] mx-auto bg-gray-50 min-h-screen font-sans">
            <DashboardHeader />
            <ConsentsTracking />
            <CustomerDataRequest />
            <GoogleConsentMode />
            <SupportChannel />
        </div>
    );
};

export default Dashboard;
