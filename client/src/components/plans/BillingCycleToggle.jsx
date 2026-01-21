import React, { useCallback } from 'react';
import { ButtonGroup, Button, Box, InlineStack, Text } from '@shopify/polaris';

const BillingCycleToggle = ({ billingCycle, setBillingCycle }) => {
    const handleMonthly = useCallback(() => setBillingCycle('monthly'), [setBillingCycle]);
    const handleYearly = useCallback(() => setBillingCycle('yearly'), [setBillingCycle]);

    return (
        <Box paddingBlock="400">
            <InlineStack align="center">
                <ButtonGroup variant="segmented">
                    <Button pressed={billingCycle === 'monthly'} onClick={handleMonthly}>
                        Pay monthly
                    </Button>
                    <Button pressed={billingCycle === 'yearly'} onClick={handleYearly}>
                        <InlineStack gap="100" align="center">
                            <span>Pay yearly</span>
                            <Text tone="success" fontWeight="bold" variant="bodyXs">
                                (Save 2 months)
                            </Text>
                        </InlineStack>
                    </Button>
                </ButtonGroup>
            </InlineStack>
        </Box>
    );
};

export default BillingCycleToggle;
