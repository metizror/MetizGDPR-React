import React, { useState } from "react";
import { Card, Text, Layout, BlockStack, InlineStack, Button, Box, Icon } from "@shopify/polaris";
import { CalendarIcon, SearchIcon, RefreshIcon } from "@shopify/polaris-icons";
import wordmap from "../../assets/wordmap.jpg";

const ConsentsTracking = () => {
    const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleString());

    return (
        <Card>
            <BlockStack gap="400">
                <InlineStack align="space-between" blockAlign="center">
                    <Text variant="headingMd" as="h2">Consents tracking</Text>
                    <InlineStack gap="200">
                        <Button icon={CalendarIcon}>Today</Button>
                        <Button icon={SearchIcon} />
                    </InlineStack>
                </InlineStack>

                <Layout>
                    <Layout.Section variant="oneHalf">
                        <Box
                            background="bg-surface-secondary"
                            borderRadius="200"
                            minHeight="400px"
                            padding="400"
                            overflowX="hidden"
                            overflowY="hidden"
                        >
                            <img
                                src={wordmap}
                                alt="World Map"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    opacity: 0.9
                                }}
                            />
                        </Box>
                    </Layout.Section>

                    <Layout.Section variant="oneThird">
                        <BlockStack gap="300">
                            <Box background="bg-surface-secondary" padding="400" borderRadius="200">
                                <Text variant="bodySm" tone="subdued">Accepted all</Text>
                                <Text variant="headingLg" as="p">0</Text>
                            </Box>
                            <Box background="bg-surface-secondary" padding="400" borderRadius="200">
                                <Text variant="bodySm" tone="subdued">Declined all</Text>
                                <Text variant="headingLg" as="p">0</Text>
                            </Box>
                            <Box background="bg-surface-secondary" padding="400" borderRadius="200">
                                <Text variant="bodySm" tone="subdued">Partially accepted</Text>
                                <Text variant="headingLg" as="p">0</Text>
                                <InlineStack gap="400">
                                    <BlockStack>
                                        <Text variant="bodyXs" tone="subdued">Functionality</Text>
                                        <Text variant="headingSm" as="p">0</Text>
                                    </BlockStack>
                                    <BlockStack>
                                        <Text variant="bodyXs" tone="subdued">Performance</Text>
                                        <Text variant="headingSm" as="p">0</Text>
                                    </BlockStack>
                                    <BlockStack>
                                        <Text variant="bodyXs" tone="subdued">Targeting</Text>
                                        <Text variant="headingSm" as="p">0</Text>
                                    </BlockStack>
                                </InlineStack>
                            </Box>
                            <Box background="bg-surface-secondary" padding="400" borderRadius="200">
                                <Text variant="bodySm" tone="subdued">Top countries</Text>
                                <Box paddingBlockStart="200">
                                    <Text variant="bodySm" tone="subdued">No records found</Text>
                                </Box>
                            </Box>
                        </BlockStack>
                    </Layout.Section>
                </Layout>

                <Box borderBlockStartWidth="010" borderColor="border-secondary" paddingBlockStart="400">
                    <InlineStack align="space-between" blockAlign="center">
                        <Text variant="bodySm" tone="subdued">Timezone: America/New_York</Text>
                        <InlineStack gap="400">
                            <Text variant="bodySm" tone="subdued">Last updated: {lastUpdated}</Text>
                            <Button
                                variant="tertiary"
                                icon={RefreshIcon}
                                onClick={() => setLastUpdated(new Date().toLocaleString())}
                            >
                                Refresh
                            </Button>
                        </InlineStack>
                    </InlineStack>
                </Box>
            </BlockStack>
        </Card>
    );
};

export default ConsentsTracking;
