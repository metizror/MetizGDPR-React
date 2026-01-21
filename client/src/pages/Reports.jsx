import React from 'react';
import { Page, BlockStack } from '@shopify/polaris';
import ReportsGrid from '../components/reports/ReportsGrid';
import ReportsFooter from '../components/reports/ReportsFooter';

const Reports = () => {
    return (
        <Page
            title="Reports"
            backAction={{ content: 'Dashboard', url: '/' }}
        >
            <BlockStack gap="500">
                <ReportsGrid />
                <ReportsFooter />
            </BlockStack>
        </Page>
    );
};

export default Reports;
