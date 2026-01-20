import React from 'react';
import ReportsHeader from '../components/reports/ReportsHeader';
import ReportsGrid from '../components/reports/ReportsGrid';
import ReportsFooter from '../components/reports/ReportsFooter';

const Reports = () => {
    return (
        <div className="flex flex-col p-6 max-w-[1200px] mx-auto bg-gray-50 min-h-screen font-sans">
            <ReportsHeader />
            <ReportsGrid />
            <ReportsFooter />
        </div>
    );
};

export default Reports;
