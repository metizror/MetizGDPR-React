import React, { useState } from 'react';
import { Page, Layout, BlockStack } from '@shopify/polaris';
import PlansHeader from '../components/plans/PlansHeader';
import CurrentPlanBanner from '../components/plans/CurrentPlanBanner';
import BillingCycleToggle from '../components/plans/BillingCycleToggle';
import PlansGrid from '../components/plans/PlansGrid';
import PlanComparisonTable from '../components/plans/PlanComparisonTable';
import SupportAndFAQ from '../components/plans/SupportAndFAQ';
import PlansFooter from '../components/plans/PlansFooter';

const Plans = () => {
    const [billingCycle, setBillingCycle] = useState('yearly'); // 'monthly' or 'yearly'

    const plans = [
        {
            name: 'Basic',
            tagline: 'Essential tools, simplified',
            price: 'Free',
            priceDetail: '',
            trial: '',
            buttonText: 'Select plan',
            features: [
                'Customizable banner',
                'Customer data requests',
                'GDPR/CCPA/LGPD',
                'EU languages presets',
                'Consent tracking',
                'Free store scan'
            ],
            highlight: false
        },
        {
            name: 'Plus',
            tagline: 'Boost your capabilities',
            price: '$7.5',
            priceDetail: '/ Month',
            priceYearly: '$90 billed once a year',
            trial: '7-days trial',
            buttonText: 'Select plan',
            features: [
                'Preferences popup',
                'On-demand scans',
                'Cookies declaration',
                'Multiple languages',
                'Advanced styling',
                'Email notifications'
            ],
            highlight: false
        },
        {
            name: 'Premium',
            tagline: 'Powerful features unlocked',
            price: '$20.83',
            priceDetail: '/ Month',
            priceYearly: '$250 billed once a year',
            trial: '7-days trial',
            buttonText: 'Select plan',
            features: [
                'Auto blocker',
                'Implied consent',
                'Reset user consents',
                'Admin mode',
                'Priority support',
                'Checkout block'
            ],
            highlight: true,
            badge: 'Most popular'
        },
        {
            name: 'Enterprise',
            tagline: 'Tailored for your scale',
            price: '$37.5',
            priceDetail: '/ Month',
            priceYearly: '$450 billed once a year',
            trial: '7-days trial',
            buttonText: 'Select plan',
            features: [
                'Scan behind passord',
                'Bots/crawlers blocking',
                'Custom storefront',
                'Google translate',
                'Javascript API',
                'TCF/IAB v2.2 Banner'
            ],
            highlight: false
        }
    ];

    return (
        <Page
            title="Plans"
            backAction={{ content: 'Dashboard', url: '/' }}
        >
            <BlockStack gap="500">
                <PlansHeader />
                <CurrentPlanBanner planName="Basic" />
                <BillingCycleToggle billingCycle={billingCycle} setBillingCycle={setBillingCycle} />
                <PlansGrid plans={plans} billingCycle={billingCycle} />
                <PlanComparisonTable />
                <SupportAndFAQ />
                <PlansFooter />
            </BlockStack>
        </Page>
    );
};

export default Plans;
