import React from 'react';
import { Grid, Card, BlockStack, Icon, Text, Button, Box } from '@shopify/polaris';
import { SearchIcon, ChartVerticalIcon, PersonIcon, LightbulbIcon } from '@shopify/polaris-icons';

const ReportsGrid = () => {
    const reportCards = [
        {
            title: 'Scan report',
            description: 'Checkout the findings of the latest scan we made on your store.',
            icon: SearchIcon,
            linkText: 'View report',
            linkHref: '#'
        },
        {
            title: 'Consents tracking',
            description: 'View detailed information about consents given by your visitors.',
            icon: ChartVerticalIcon,
            linkText: 'View report',
            linkHref: '#'
        },
        {
            title: 'Customer data requests',
            description: 'View detailed information about data requests made by your customers.',
            icon: PersonIcon,
            linkText: 'View report',
            linkHref: '#'
        },
        {
            title: 'Recommendations',
            description: 'Get recommendations on how to improve your cookie declaration.',
            icon: LightbulbIcon,
            linkText: 'View report',
            linkHref: '#'
        }
    ];

    return (
        <Grid>
            {reportCards.map((card, index) => (
                <Grid.Cell key={index} columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3 }}>
                    <Card height="100%">
                        <BlockStack gap="400">
                            <Box background="bg-surface-secondary" padding="200" borderRadius="200" width="40px" height="40px" display="flex" alignItems="center" justifyContent="center">
                                <Icon source={card.icon} tone="brand" />
                            </Box>
                            <BlockStack gap="200">
                                <Text variant="headingMd" as="h3">{card.title}</Text>
                                <Text variant="bodySm" tone="subdued">
                                    {card.description}
                                </Text>
                            </BlockStack>
                            <Box paddingBlockStart="200">
                                <Button variant="tertiary" textAlign="left">
                                    {card.linkText}
                                </Button>
                            </Box>
                        </BlockStack>
                    </Card>
                </Grid.Cell>
            ))}
        </Grid>
    );
};

export default ReportsGrid;
