import React from 'react';
import { Grid, Card, BlockStack, InlineStack, Text, Button, Icon, Box } from '@shopify/polaris';
import { ChatIcon, NoteIcon, QuestionCircleIcon } from '@shopify/polaris-icons';

const SupportAndFAQ = () => {
    return (
        <Grid>
            <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 6 }}>
                <BlockStack gap="400">
                    <Card>
                        <InlineStack align="space-between" blockAlign="start">
                            <Box maxWidth="65%">
                                <BlockStack gap="300">
                                    <Text variant="headingMd" as="h3">Live chat & email</Text>
                                    <Text variant="bodySm" tone="subdued">
                                        All our plans come with email and live chat support to offer help whenever you need it.
                                    </Text>
                                    <InlineStack gap="300">
                                        <Button>Chat now</Button>
                                        <Button variant="tertiary">Contact</Button>
                                    </InlineStack>
                                </BlockStack>
                            </Box>
                            <div style={{ width: '48px', height: '48px' }}>
                                <Icon source={ChatIcon} tone="brand" />
                            </div>
                        </InlineStack>
                    </Card>

                    <Card>
                        <InlineStack align="space-between" blockAlign="start">
                            <Box maxWidth="65%">
                                <BlockStack gap="300">
                                    <Text variant="headingMd" as="h3">Help center</Text>
                                    <Text variant="bodySm" tone="subdued">
                                        You may visit our knowledge base to learn more about our services.
                                    </Text>
                                    <InlineStack>
                                        <Button>Learn more</Button>
                                    </InlineStack>
                                </BlockStack>
                            </Box>
                            <div style={{ width: '48px', height: '48px' }}>
                                <Icon source={NoteIcon} tone="brand" />
                            </div>
                        </InlineStack>
                    </Card>
                </BlockStack>
            </Grid.Cell>

            <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 6 }}>
                <Card>
                    <BlockStack gap="400">
                        <Text variant="headingMd" as="h3">FAQ</Text>
                        <BlockStack gap="300">
                            {[
                                'How billing works on the app?',
                                'What happens after my trial ends?',
                                'Can I upgrade or downgrade plans at any time?',
                                'Does my free trial limit my access to features?',
                                'What is the refund policy?',
                                'Why to subscribe for a paid plan?',
                            ].map((q, i) => (
                                <Button key={i} variant="tertiary" textAlign="left" icon={QuestionCircleIcon}>
                                    {q}
                                </Button>
                            ))}
                        </BlockStack>
                    </BlockStack>
                </Card>
            </Grid.Cell>
        </Grid>
    );
};

export default SupportAndFAQ;
