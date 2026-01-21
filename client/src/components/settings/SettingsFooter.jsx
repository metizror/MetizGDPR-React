import React from 'react';
import { BlockStack, InlineStack, Text, Link, Icon, Box } from '@shopify/polaris';
import { ExternalIcon } from '@shopify/polaris-icons';

const SettingsFooter = () => {
    return (
        <Box paddingBlock="800">
            <BlockStack align="center" gap="200">
                <InlineStack align="center" gap="100">
                    <Link url="#" external>
                        Learn more in the Knowledge base
                    </Link>
                    <div style={{ width: '16px' }}>
                        <Icon source={ExternalIcon} tone="brand" />
                    </div>
                </InlineStack>
                <InlineStack align="center">
                    <Text variant="bodyXs" tone="subdued">Version: v4.2.0</Text>
                </InlineStack>
            </BlockStack>
        </Box>
    );
};

export default SettingsFooter;
