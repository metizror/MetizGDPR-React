import React, { useState, useCallback } from 'react';
import { Card, BlockStack, RadioButton, Text, Badge, Checkbox, TextField, InlineStack, Button } from '@shopify/polaris';

const BehaviorTab = ({ settings, updateSettings }) => {
    const handleTypeChange = useCallback(
        (_checked, newValue) => {
            updateSettings({ ...settings, bannerType: newValue });
        },
        [settings, updateSettings],
    );

    return (
        <BlockStack gap="500">
            <BlockStack gap="200">
                <Text as="h2" variant="headingSm">Banner type / Consent mode</Text>

                <BlockStack gap="400">
                    <RadioButton
                        label={
                            <BlockStack gap="050">
                                <Text as="span" fontWeight="medium">Informative</Text>
                                <Text as="span" tone="subdued">Notice-only banner. All cookies allowed at all times.</Text>
                            </BlockStack>
                        }
                        checked={settings.bannerType === 'informative'}
                        id="informative"
                        name="bannerType"
                        onChange={handleTypeChange}
                        value="informative"
                    />

                    <RadioButton
                        label={
                            <BlockStack gap="050">
                                <Text as="span" fontWeight="medium">Decline only</Text>
                                <Text as="span" tone="subdued">Opt-out banner. All cookies allowed initially.</Text>
                            </BlockStack>
                        }
                        checked={settings.bannerType === 'opt-out'}
                        id="opt-out"
                        name="bannerType"
                        onChange={handleTypeChange}
                        value="opt-out"
                    />

                    <RadioButton
                        label={
                            <BlockStack gap="050">
                                <Text as="span" fontWeight="medium">Accept only</Text>
                                <Text as="span" tone="subdued">Opt-in banner. Only strictly necessary cookies allowed initially.</Text>
                            </BlockStack>
                        }
                        checked={settings.bannerType === 'opt-in'}
                        id="opt-in"
                        name="bannerType"
                        onChange={handleTypeChange}
                        value="opt-in"
                    />

                    <RadioButton
                        label={
                            <BlockStack gap="050">
                                <Text as="span" fontWeight="medium">Accept/Decline</Text>
                                <Text as="span" tone="subdued">Opt-both banner. Only strictly necessary cookies allowed initially.</Text>
                            </BlockStack>
                        }
                        checked={settings.bannerType === 'opt-in-out'}
                        id="opt-in-out"
                        name="bannerType"
                        onChange={handleTypeChange}
                        value="opt-in-out"
                    />

                    <RadioButton
                        label={
                            <BlockStack gap="050">
                                <InlineStack gap="200" align="center">
                                    <Text as="span" fontWeight="medium">Preferences</Text>
                                    <Badge tone="magic">Plus</Badge>
                                </InlineStack>
                                <Text as="span" tone="subdued">Custom banner with categorized cookies & preferences</Text>
                            </BlockStack>
                        }
                        checked={settings.bannerType === 'preferences'}
                        id="preferences"
                        name="bannerType"
                        onChange={handleTypeChange}
                        value="preferences"
                    />
                </BlockStack>
            </BlockStack>

            <div className="border-t border-gray-200" />

            <BlockStack gap="400">
                <Text as="h3" variant="headingSm">Privacy policy & Imprint page links</Text>
                <Checkbox
                    label="Show privacy policy link (learn more)"
                    helpText="Link to your privacy policy"
                    checked={true}
                    onChange={() => { }}
                />

                <TextField
                    label="Privacy policy URL or relative path that starts with /"
                    value="/policies/privacy-policy"
                    onChange={() => { }}
                    autoComplete="off"
                    connectedRight={<Button>Select from pages</Button>}
                />
            </BlockStack>
        </BlockStack>
    );
};

export default BehaviorTab;
