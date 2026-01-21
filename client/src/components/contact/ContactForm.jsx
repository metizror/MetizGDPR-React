import React, { useState, useCallback } from 'react';
import { Grid, Card, BlockStack, Text, Form, Select, TextField, Button, Box, Link } from '@shopify/polaris';

const ContactForm = () => {
    const [selected, setSelected] = useState('general-support');
    const [message, setMessage] = useState('');

    const handleSelectChange = useCallback(
        (value) => setSelected(value),
        [],
    );

    const handleMessageChange = useCallback(
        (value) => setMessage(value),
        [],
    );

    const options = [
        { label: 'General support', value: 'general-support' },
        { label: 'Billing issue', value: 'billing' },
        { label: 'Technical problem', value: 'technical' },
        { label: 'Feedback', value: 'feedback' },
    ];

    return (
        <Grid>
            <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 6 }}>
                <BlockStack gap="400">
                    <Text variant="headingLg" as="h2">Assistance/Feedback</Text>
                    <BlockStack gap="300">
                        <Text variant="bodyMd" tone="subdued">
                            Use the contact form on the right to provide us with your valuable feedback or ask any question you might have regarding the app. We appreciate the time you spent doing that and will try to get back to you the soonest we can.
                        </Text>
                        <Text variant="bodyMd" tone="subdued">
                            If you want to email us directly instead, feel free to do so at{' '}
                            <Link url="mailto:support@pandectes.io">
                                support@pandectes.io
                            </Link>.
                        </Text>
                    </BlockStack>
                </BlockStack>
            </Grid.Cell>

            <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 6 }}>
                <Card>
                    <Form>
                        <BlockStack gap="400">
                            <Select
                                label="Subject"
                                options={options}
                                onChange={handleSelectChange}
                                value={selected}
                            />
                            <TextField
                                label="Message"
                                value={message}
                                onChange={handleMessageChange}
                                multiline={6}
                                autoComplete="off"
                                placeholder="Provide as much detail as possible about your issue so that we may better understand your case"
                            />
                            <Box paddingBlockStart="200">
                                <Button
                                    variant="primary"
                                    disabled
                                    onClick={() => { }}
                                >
                                    Submit
                                </Button>
                            </Box>
                        </BlockStack>
                    </Form>
                </Card>
            </Grid.Cell>
        </Grid>
    );
};

export default ContactForm;
