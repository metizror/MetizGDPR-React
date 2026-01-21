import React from 'react';
import { Grid, Card, BlockStack, InlineStack, Text, Button, Icon, Box, Badge, List } from '@shopify/polaris';
import { CheckIcon } from '@shopify/polaris-icons';

const PlansGrid = ({ plans, billingCycle }) => {
    return (
        <Grid>
            {plans.map((plan, index) => (
                <Grid.Cell key={index} columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3 }}>
                    <Box
                        height="100%"
                        borderStyle="solid"
                        borderWidth="020"
                        borderColor={plan.highlight ? 'border-brand' : 'border-secondary'}
                        borderRadius="400"
                        background="bg-surface"
                        padding="500"
                        position="relative"
                    >
                        {plan.badge && (
                            <div style={{
                                position: 'absolute',
                                top: '-12px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                zIndex: 10
                            }}>
                                <Badge tone="success">{plan.badge}</Badge>
                            </div>
                        )}

                        <BlockStack gap="600" height="100%">
                            <BlockStack gap="100">
                                <Text variant="headingLg" as="h3">{plan.name}</Text>
                                <Text variant="bodyXs" tone="subdued">{plan.tagline}</Text>
                            </BlockStack>

                            <BlockStack gap="200">
                                <InlineStack align="baseline" gap="100">
                                    <Text variant="heading2xl" as="p">{plan.price}</Text>
                                    <Text variant="bodySm" tone="subdued">{plan.priceDetail}</Text>
                                </InlineStack>
                                {billingCycle === 'yearly' && plan.priceYearly && (
                                    <Text variant="bodyXs" tone="subdued">{plan.priceYearly}</Text>
                                )}
                                {plan.trial && (
                                    <InlineStack>
                                        <Badge tone="attention">{plan.trial}</Badge>
                                    </InlineStack>
                                )}
                            </BlockStack>

                            <Button
                                variant={plan.highlight ? 'primary' : 'secondary'}
                                fullWidth
                                onClick={() => { }}
                            >
                                {plan.buttonText}
                            </Button>

                            <Box borderBlockStartWidth="010" borderColor="border-secondary" paddingBlockStart="400">
                                <BlockStack gap="300">
                                    {plan.features.map((feature, fIndex) => (
                                        <InlineStack key={fIndex} gap="200" align="start" wrap={false}>
                                            <div style={{ width: '16px', height: '16px' }}>
                                                <Icon source={CheckIcon} tone="subdued" />
                                            </div>
                                            <Text variant="bodySm" as="span">{feature}</Text>
                                        </InlineStack>
                                    ))}
                                </BlockStack>
                            </Box>
                        </BlockStack>
                    </Box>
                </Grid.Cell>
            ))}
        </Grid>
    );
};

export default PlansGrid;
