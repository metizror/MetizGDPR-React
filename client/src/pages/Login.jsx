import React, { useState } from 'react';
import { Page, Card, FormLayout, TextField, Button, Text, BlockStack, Box } from '@shopify/polaris';

const Login = () => {
    const [shop, setShop] = useState('');

    const handleSubmit = () => {
        if (!shop) return;
        // Normalize shop url
        let shopUrl = shop.replace(/^https?:\/\//, '').replace(/\/$/, '');
        if (!shopUrl.includes('.myshopify.com') && !shopUrl.includes('.')) {
            shopUrl += '.myshopify.com';
        }

        // Redirect to backend auth
        // We use window.location.origin to point to the backend proxy
        // If running locally with vite proxy, this works. 
        // If production, ensure backend is accessible.
        window.location.href = `/api/auth?shop=${shopUrl}`;
    };

    return (
        <Page>
            <Box paddingInline="400" paddingBlock="400">
                <BlockStack inlineAlign="center" align="center">
                    <div style={{ maxWidth: '400px', width: '100%', marginTop: '100px' }}>
                        <Card>
                            <BlockStack gap="400">
                                <Text variant="headingLg" as="h1">Log in</Text>
                                <Text variant="bodyMd" as="p">
                                    Enter your shop domain to log in or install the app.
                                </Text>
                                <FormLayout>
                                    <TextField
                                        label="Shop Domain"
                                        value={shop}
                                        onChange={(value) => setShop(value)}
                                        placeholder="example.myshopify.com"
                                        autoComplete="off"
                                        helpText="e.g. my-store.myshopify.com"
                                    />
                                    <Button variant="primary" onClick={handleSubmit}>Log in</Button>
                                </FormLayout>
                            </BlockStack>
                        </Card>
                    </div>
                </BlockStack>
            </Box>
        </Page>
    );
};

export default Login;
