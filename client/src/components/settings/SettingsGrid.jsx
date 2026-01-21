import React from 'react';
import { Grid, Box, BlockStack, InlineStack, Text, Icon, Badge } from '@shopify/polaris';
import { useNavigate } from 'react-router-dom';
import {
    LayoutColumns3Icon,
    ConnectIcon,
    CodeIcon,
    CollectionIcon,
    DatabaseIcon,
    NoteIcon,
    GlobeIcon,
    LanguageIcon,
    SearchIcon,
    CartIcon,
    PersonIcon,
    CursorIcon,
    EmailIcon,
    NotificationIcon,
    RefreshIcon,
    ProductIcon,
    StarFilledIcon
} from '@shopify/polaris-icons';

const SettingsGrid = () => {
    const navigate = useNavigate();

    const settingsItems = [
        {
            title: 'Banner',
            description: 'Customize layout, behavior, and content. Use the live preview to test changes.',
            icon: LayoutColumns3Icon,
            path: '/settings/banner'
        },
        {
            title: 'Integrations',
            description: 'Shopify Customer Privacy, Google Consent Mode, Facebook Pixel, Rakuten CMP, GPC.',
            icon: ConnectIcon,
            path: '/settings/integrations'
        },
        {
            title: 'Auto blocker',
            description: 'Manage blocking & classification for scripts & other third-party services.',
            icon: CodeIcon,
            path: '/settings/auto-blocker'
        },
        {
            title: 'Categories',
            description: 'Edit the texts for the cookies and script categories in one place.',
            icon: CollectionIcon,
            path: '/settings/categories'
        },
        {
            title: 'Cookies & HTML storage',
            description: 'Manage your scanned cookies and even add your cookies manually.',
            icon: DatabaseIcon,
            path: '/settings/cookies'
        },
        {
            title: 'Cookies declaration',
            description: 'The Cookie Declaration is essentially a cookie policy you can use on your store.',
            icon: NoteIcon,
            path: '/settings/declaration'
        },
        {
            title: 'Geolocation',
            description: 'Configure regional laws & Geolocation IP rules for GDPR, CCPA, PIPEDA & LGPD.',
            icon: GlobeIcon,
            path: '/settings/geolocation'
        },
        {
            title: 'Language & translations',
            description: 'Manage translations across the application & use the Integrated Google Translate.',
            icon: LanguageIcon,
            path: '/settings/language'
        },
        {
            title: 'Cookie scanner',
            description: 'Configure the scanner to keep your cookies declaration up-to-date at all times.',
            icon: SearchIcon,
            path: '/settings/scanner'
        },
        {
            title: 'Checkout block',
            description: 'Configure settings for consent on the checkout page.',
            icon: CartIcon,
            path: '/settings/checkout'
        },
        {
            title: 'Do not sell my data',
            description: 'Comply with CCPA using a dedicated page for visitors to opt-out from data selling.',
            icon: PersonIcon,
            path: '/settings/do-not-sell'
        },
        {
            title: 'Customer data requests',
            description: 'Customer Data Requests in one place for both guests and registered customers.',
            icon: CursorIcon,
            path: '/settings/data-requests'
        },
        {
            title: 'Email templates',
            description: 'Personalize the email messages when using the Customer Data Requests.',
            icon: EmailIcon,
            path: '/settings/email-templates'
        },
        {
            title: 'Notifications',
            description: 'Configure the app notifications & email addresses in one place.',
            icon: NotificationIcon,
            path: '/settings/notifications'
        },
        {
            title: 'Reset user consents',
            description: 'Powerfull tool to re-ask for consent when your privacy policy changes.',
            icon: RefreshIcon,
            path: '/settings/reset-consents'
        },
        {
            title: 'Custom/Headless storefront',
            description: 'Install the banner and set consent settings for your custom storefront.',
            icon: ProductIcon,
            path: '/settings/headless'
        },
        {
            title: 'Javascript API',
            description: 'Integrate & automate with our JavaScript API and customize consent management.',
            icon: CodeIcon,
            badge: 'Enterprise',
            path: '/settings/api'
        }
    ];

    return (
        <Grid>
            {settingsItems.map((item, index) => (
                <Grid.Cell key={index} columnSpan={{ xs: 6, sm: 6, md: 4, lg: 4 }}>
                    <div style={{ height: '100%', cursor: 'pointer' }} onClick={() => navigate(item.path)}>
                        <Box
                            padding="400"
                            borderRadius="200"
                            background="bg-surface"
                            height="100%"
                        >
                            <InlineStack gap="400" wrap={false} align="start" blockAlign="start">
                                <div style={{ flexShrink: 0 }}>
                                    <Box background="bg-surface-secondary" padding="200" borderRadius="200" minWidth="40px" height="40px" display="flex" alignItems="center" justifyContent="center">
                                        <Icon source={item.icon} tone="subdued" />
                                    </Box>
                                </div>
                                <BlockStack gap="100">
                                    <InlineStack gap="200" align="start">
                                        <div style={{ color: 'var(--p-color-text-brand)' }}>
                                            <Text variant="headingSm" as="h3" tone='magic-subdued'>
                                                {item.title}
                                            </Text>
                                        </div>
                                        {item.badge && (
                                            <Badge tone="purple">
                                                <InlineStack gap="100" blockAlign="center">
                                                    <div style={{ width: '12px' }}>
                                                        <Icon source={StarFilledIcon} />
                                                    </div>
                                                    {item.badge}
                                                </InlineStack>
                                            </Badge>
                                        )}
                                    </InlineStack>
                                    <Text variant="bodySm" tone="subdued">
                                        {item.description}
                                    </Text>
                                </BlockStack>
                            </InlineStack>
                        </Box>
                    </div>
                </Grid.Cell>
            ))}
        </Grid>
    );
};

export default SettingsGrid;
