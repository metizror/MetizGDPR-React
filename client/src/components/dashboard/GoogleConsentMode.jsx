import React from "react";
import { Card, Text, BlockStack, InlineStack, Button, Box, Icon } from "@shopify/polaris";
import { ShieldCheckMarkIcon, XIcon } from "@shopify/polaris-icons";

const GoogleConsentMode = () => {
    return (
        <Card>
            <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-8px', right: '-8px' }}>
                    <Button variant="tertiary" icon={XIcon} onClick={() => { }} />
                </div>
                <InlineStack align="space-between" blockAlign="center">
                    <Box maxWidth="70%">
                        <BlockStack gap="400">
                            <BlockStack gap="100">
                                <Text variant="headingMd" as="h3">Google Consent Mode v2 ready</Text>
                                <Text variant="bodyMd" tone="subdued">
                                    Follow this guide to ensure your store complies with Google consent mode v2, aligning with Google's latest EU user consent policy.
                                </Text>
                            </BlockStack>
                            <InlineStack>
                                <Button>Learn more</Button>
                            </InlineStack>
                        </BlockStack>
                    </Box>
                    <Box padding="400" display={{ xs: 'none', md: 'block' }}>
                        <div style={{ position: 'relative', width: '64px', height: '64px' }}>
                            <Box
                                background="bg-surface-brand"
                                borderRadius="full"
                                width="64px"
                                height="64px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                borderStyle="solid"
                                borderWidth="020"
                                borderColor="border-inverse"
                                shadow="lg"
                            >
                                <div style={{ width: '32px' }}>
                                    <Icon source={ShieldCheckMarkIcon} tone="brand" />
                                </div>
                            </Box>
                            <div style={{
                                position: 'absolute',
                                top: '-4px',
                                right: '-4px',
                                background: '#FFC400',
                                borderRadius: '4px',
                                width: '24px',
                                height: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '12px'
                            }}>
                                G
                            </div>
                        </div>
                    </Box>
                </InlineStack>
            </div>
        </Card>
    );
};

export default GoogleConsentMode;
