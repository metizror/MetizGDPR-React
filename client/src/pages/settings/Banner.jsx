import React, { useState } from 'react';
import { Page, Box, BlockStack, InlineStack, Text, Button, Icon, ButtonGroup } from '@shopify/polaris';
import { ViewIcon, HideIcon, LockIcon, GlobeIcon, ExternalIcon } from '@shopify/polaris-icons';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();
    const [visibility, setVisibility] = useState('hidden'); // public, admins, hidden

    return (
        <Page
            title="Banner"
            subtitle="Customize layout, behavior, and content. Use the live preview to test changes."
            backAction={{ onAction: () => navigate('/settings') }}
        >
            <BlockStack gap="400">
                {/* New Experience Banner */}
                <Box
                    padding="400"
                    borderRadius="200"
                    background="bg-surface-active" // This usually gives a light blue background in Polaris
                    width="100%"
                >
                    <InlineStack align="space-between" blockAlign="center">
                        <Text variant="headingMd" as="h2" >
                            Try the new banner experience
                        </Text>
                        <InlineStack gap="300">
                            <Button variant="plain" icon={ExternalIcon} iconPosition="end">Learn more</Button>
                            <div style={{ background: 'white', borderRadius: '4px' }}>
                                <Button icon={ViewIcon}>Preview the new banner</Button>
                            </div>
                        </InlineStack>
                    </InlineStack>
                </Box>

                {/* Visibility Control Card */}
                <Box
                    padding="400"
                    borderRadius="200"
                    background="bg-surface"
                    shadow="100" // Adding shadow to mimic card
                >
                    <InlineStack align="space-between" blockAlign="center">
                        <InlineStack gap="200">
                            <Icon source={HideIcon} tone="critical" />
                            <Text variant="bodyMd" fontWeight="bold">
                                Banner is hidden.
                            </Text>
                        </InlineStack>

                        <ButtonGroup variant="segmented">
                            <Button
                                pressed={visibility === 'public'}
                                onClick={() => setVisibility('public')}
                            >
                                Public
                            </Button>
                            <Button
                                pressed={visibility === 'admins'}
                                onClick={() => setVisibility('admins')}
                            >
                                <InlineStack gap="100" align="center">
                                    <span>Admins only</span>
                                </InlineStack>
                            </Button>
                            <Button
                                pressed={visibility === 'hidden'}
                                onClick={() => setVisibility('hidden')}
                            >
                                <InlineStack gap="100" align="center">
                                    {visibility === 'hidden' && <Icon source={HideIcon} />}
                                    <span>Hidden</span>
                                </InlineStack>
                            </Button>
                        </ButtonGroup>
                    </InlineStack>
                </Box>
            </BlockStack>
        </Page>
    );
};

export default Banner;
