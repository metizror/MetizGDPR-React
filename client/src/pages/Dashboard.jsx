import React from 'react';
import { Page, Layout } from '@shopify/polaris';
import { useNavigate } from 'react-router-dom';
import ConsentsTracking from '../components/dashboard/ConsentsTracking';
import CustomerDataRequest from '../components/dashboard/CustomerDataRequest';
import GoogleConsentMode from '../components/dashboard/GoogleConsentMode';
import SupportChannel from '../components/dashboard/SupportChannel';

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <Page
            title="Dashboard"
            primaryAction={{
                content: 'View Plans',
                onAction: () => navigate('/plans'),
            }}
        >
            <Layout>
                <Layout.Section>
                    <ConsentsTracking />
                </Layout.Section>
                <Layout.Section>
                    <CustomerDataRequest />
                </Layout.Section>
                <Layout.Section>
                    <GoogleConsentMode />
                </Layout.Section>
                <Layout.Section>
                    <SupportChannel />
                </Layout.Section>
            </Layout>
        </Page>
    );
};

export default Dashboard;
