import React from "react";
import { Card, Text, Grid, BlockStack, Button, Icon, Box } from "@shopify/polaris";
import { ChatIcon, NoteIcon, PlayIcon, EmailIcon } from "@shopify/polaris-icons";

const SupportChannel = () => {
    return (
        <Card>
            <BlockStack gap="400">
                <Text variant="headingMd" as="h2">Support channels</Text>
                <Grid>
                    <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3 }}>
                        <Box background="bg-surface-secondary" padding="400" borderRadius="200" height="100%">
                            <BlockStack gap="200">
                                <Icon source={ChatIcon} tone="subdued" />
                                <Text variant="headingSm" as="h4">Live chat</Text>
                                <Text variant="bodyXs" tone="subdued">
                                    Chat with us in real time for any question you may have.
                                </Text>
                                <Button variant="tertiary" textAlign="left">Open chat</Button>
                            </BlockStack>
                        </Box>
                    </Grid.Cell>

                    <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3 }}>
                        <Box background="bg-surface-secondary" padding="400" borderRadius="200" height="100%">
                            <BlockStack gap="200">
                                <Icon source={NoteIcon} tone="subdued" />
                                <Text variant="headingSm" as="h4">Help center</Text>
                                <Text variant="bodyXs" tone="subdued">
                                    Find answers in our detailed manuals.
                                </Text>
                                <Button variant="tertiary" textAlign="left">Visit help center</Button>
                            </BlockStack>
                        </Box>
                    </Grid.Cell>

                    <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3 }}>
                        <Box background="bg-surface-secondary" padding="400" borderRadius="200" height="100%">
                            <BlockStack gap="200">
                                <Icon source={PlayIcon} tone="subdued" />
                                <Text variant="headingSm" as="h4">Video tutorial</Text>
                                <Text variant="bodyXs" tone="subdued">
                                    Master the app in minutes on our youtube channel.
                                </Text>
                                <Button variant="tertiary" textAlign="left">Watch tutorial</Button>
                            </BlockStack>
                        </Box>
                    </Grid.Cell>

                    <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3 }}>
                        <Box background="bg-surface-secondary" padding="400" borderRadius="200" height="100%">
                            <BlockStack gap="200">
                                <Icon source={EmailIcon} tone="subdued" />
                                <Text variant="headingSm" as="h4">Contact form</Text>
                                <Text variant="bodyXs" tone="subdued">
                                    Contact us, to provide any questions or feedback.
                                </Text>
                                <Button variant="tertiary" textAlign="left">Send us a message</Button>
                            </BlockStack>
                        </Box>
                    </Grid.Cell>
                </Grid>
            </BlockStack>
        </Card>
    );
};

export default SupportChannel;
