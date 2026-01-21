import React from 'react';
import { Button, InlineStack } from '@shopify/polaris';
import { ChatIcon, DiscountIcon } from '@shopify/polaris-icons';

const PlansHeader = () => {
    return (
        <InlineStack align="end" gap="200">
            <Button icon={ChatIcon}>Get support</Button>
            <Button icon={DiscountIcon}>Apply coupon</Button>
        </InlineStack>
    );
};

export default PlansHeader;
