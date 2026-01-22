import React, { useState, useEffect, useCallback, useContext } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { Page, Layout, Tabs, LegacyCard, Text, BlockStack, Banner as PolarisBanner, Button, InlineStack } from '@shopify/polaris';
import { ExternalIcon } from '@shopify/polaris-icons';
import BehaviorTab from '../../components/banner/BehaviorTab';
import PreviewPanel from '../../components/banner/PreviewPanel';
import { ShopContext } from '../../contexts/ShopContext';

const Banner = () => {
    const [searchParams] = useSearchParams();
    const { shop: contextShop } = useContext(ShopContext);
    const shop = searchParams.get('shop') || contextShop || window.shopify?.config?.shop;
    const [selectedTab, setSelectedTab] = useState(0);
    const [settings, setSettings] = useState({
        bannerType: 'informative'
    });
    const [loading, setLoading] = useState(true);

    const handleTabChange = useCallback(
        (selectedTabIndex) => setSelectedTab(selectedTabIndex),
        [],
    );

    const tabs = [
        {
            id: 'behavior-tab',
            content: 'Behavior',
            panelID: 'behavior-tab-content',
        },
        {
            id: 'style-tab',
            content: 'Style',
            panelID: 'style-tab-content',
        },
        {
            id: 'content-tab',
            content: 'Content',
            panelID: 'content-tab-content',
        },
    ];

    useEffect(() => {
        if (shop) {
            fetchSettings();
        }
    }, [shop]);

    const fetchSettings = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL || '/api'}/banner`, {
                headers: { 'x-shop-domain': shop }
            });
            setSettings(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching settings:', error);
            setLoading(false);
        }
    };

    const updateSettings = async (newSettings) => {
        // Optimistic update
        setSettings(newSettings);
        try {
            await axios.put(`${import.meta.env.VITE_API_URL || '/api'}/banner`,
                { bannerType: newSettings.bannerType },
                { headers: { 'x-shop-domain': shop } }
            );
        } catch (error) {
            console.error('Error updating settings:', error);
            // Revert or show error could be here
        }
    };

    if (loading) return <div className="p-8 text-center">Loading settings...</div>;

    const renderTabContent = () => {
        switch (selectedTab) {
            case 0:
                return <BehaviorTab settings={settings} updateSettings={updateSettings} />;
            case 1:
                return (
                    <Card>
                        <BlockStack gap="400">
                            <div className="p-4"><Text as="p" tone="subdued">Style settings coming soon...</Text></div>
                        </BlockStack>
                    </Card>
                );
            case 2:
                return (
                    <Card>
                        <BlockStack gap="400">
                            <div className="p-4"><Text as="p" tone="subdued">Content settings coming soon...</Text></div>
                        </BlockStack>
                    </Card>
                );
            default:
                return null;
        }
    };

    return (
        <Page
            title="Banner"
            subtitle="Customize layout, behavior, and content. Use the live preview to test changes."
            backAction={{ content: 'Home', url: '/' }}
        >
            <Layout>
                <Layout.Section>
                    <BlockStack gap="500">
                        {/* Try the new bannner experience Banner */}
                        <PolarisBanner tone="info">
                            <InlineStack align="space-between" blockAlign="center">
                                <Text as="p" fontWeight="medium">Try the new banner experience</Text>
                                <InlineStack gap="200">
                                    <Button variant="plain" icon={ExternalIcon} onClick={() => { }}>Learn more</Button>
                                    <Button onClick={() => { }}>Preview the new banner</Button>
                                </InlineStack>
                            </InlineStack>
                        </PolarisBanner>

                        {/* Banner is hidden Banner */}
                        <PolarisBanner tone="warning" icon={undefined}>
                            <InlineStack align="space-between" blockAlign="center">
                                <InlineStack gap="200" align="center">
                                    <div className="w-4 h-4 rounded-full border border-red-500 flex items-center justify-center">
                                        <div className="w-3 h-0.5 bg-red-500 rotate-45 transform origin-center"></div>
                                    </div>
                                    <Text as="span" fontWeight="bold">Banner is hidden.</Text>
                                </InlineStack>
                                <div style={{ minWidth: '250px' }}>
                                    <div className="bg-gray-200 p-0.5 rounded-lg flex text-sm">
                                        <button
                                            className="px-3 py-1 text-sm font-medium rounded-md text-gray-500 hover:text-gray-700 hover:bg-white/50 transition-all"
                                            onClick={() => { }}
                                        >
                                            Public
                                        </button>
                                        <button
                                            className="px-3 py-1 text-sm font-medium rounded-md text-gray-500 hover:text-gray-700 hover:bg-white/50 transition-all"
                                            onClick={() => { }}
                                        >
                                            Admins only
                                        </button>
                                        <button
                                            className="px-3 py-1 text-sm font-medium rounded-md bg-white shadow-sm text-black transition-all"
                                            onClick={() => { }}
                                        >
                                            Hidden
                                        </button>
                                    </div>
                                </div>
                            </InlineStack>
                        </PolarisBanner>

                        <LegacyCard>
                            <Tabs tabs={tabs} selected={selectedTab} onSelect={handleTabChange} fitted />
                            <LegacyCard.Section>
                                {renderTabContent()}
                            </LegacyCard.Section>
                        </LegacyCard>
                    </BlockStack>
                </Layout.Section>
                <Layout.Section variant="oneThird">
                    <PreviewPanel settings={settings} />
                </Layout.Section>
            </Layout>
        </Page>
    );
};

export default Banner;
