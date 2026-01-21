import React from "react";
import { Card, Text, Layout, BlockStack, InlineStack, Button, Box } from "@shopify/polaris";
import { RefreshIcon, SearchIcon } from "@shopify/polaris-icons";

const CustomerDataRequest = () => {
    return (
        <Card>
            <BlockStack gap="400">
                <InlineStack align="space-between" blockAlign="center">
                    <Text variant="headingMd" as="h2">Customer data requests</Text>
                    <InlineStack gap="200">
                        <Button variant="tertiary" icon={RefreshIcon}>Refresh</Button>
                        <Button variant="tertiary" icon={SearchIcon} />
                    </InlineStack>
                </InlineStack>

                <Layout>
                    <Layout.Section variant="oneThird">
                        <Box background="bg-surface-secondary" padding="400" borderRadius="200">
                            <BlockStack gap="300">
                                <Text variant="headingSm" as="h3">Portability</Text>
                                <InlineStack align="space-between">
                                    <BlockStack gap="050">
                                        <Text variant="bodyXs" tone="subdued">Pending</Text>
                                        <Text variant="headingLg" as="p" tone="caution">0</Text>
                                    </BlockStack>
                                    <BlockStack gap="050">
                                        <Text variant="bodyXs" tone="subdued">Fulfilled</Text>
                                        <Text variant="headingLg" as="p" tone="success">0</Text>
                                    </BlockStack>
                                </InlineStack>
                            </BlockStack>
                        </Box>
                    </Layout.Section>

                    <Layout.Section variant="oneThird">
                        <Box background="bg-surface-secondary" padding="400" borderRadius="200">
                            <BlockStack gap="300">
                                <Text variant="headingSm" as="h3">Rectification</Text>
                                <InlineStack align="space-between">
                                    <BlockStack gap="050">
                                        <Text variant="bodyXs" tone="subdued">Pending</Text>
                                        <Text variant="headingLg" as="p" tone="caution">0</Text>
                                    </BlockStack>
                                    <BlockStack gap="050">
                                        <Text variant="bodyXs" tone="subdued">Fulfilled</Text>
                                        <Text variant="headingLg" as="p" tone="success">0</Text>
                                    </BlockStack>
                                </InlineStack>
                            </BlockStack>
                        </Box>
                    </Layout.Section>

                    <Layout.Section variant="oneThird">
                        <Box background="bg-surface-secondary" padding="400" borderRadius="200">
                            <BlockStack gap="300">
                                <Text variant="headingSm" as="h3">Erasure</Text>
                                <InlineStack align="space-between">
                                    <BlockStack gap="050">
                                        <Text variant="bodyXs" tone="subdued">Pending</Text>
                                        <Text variant="headingLg" as="p" tone="caution">0</Text>
                                    </BlockStack>
                                    <BlockStack gap="050">
                                        <Text variant="bodyXs" tone="subdued">Fulfilled</Text>
                                        <Text variant="headingLg" as="p" tone="success">0</Text>
                                    </BlockStack>
                                </InlineStack>
                            </BlockStack>
                        </Box>
                    </Layout.Section>
                </Layout>
            </BlockStack>
        </Card>
    );
};

export default CustomerDataRequest;
