import React from 'react';
import { Banner } from '@shopify/polaris';

const CurrentPlanBanner = ({ planName = "Basic" }) => {
    return (
        <Banner
            title={`Your current plan is ${planName}`}
            tone="info"
        >
            <p>
                This plan will always be free of charge. Development stores may upgrade to any plan free of charge.
            </p>
        </Banner>
    );
};

export default CurrentPlanBanner;
