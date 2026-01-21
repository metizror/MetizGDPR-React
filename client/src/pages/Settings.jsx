import React from 'react';
import { Page, BlockStack } from '@shopify/polaris';
import SettingsGrid from '../components/settings/SettingsGrid';
import SettingsFooter from '../components/settings/SettingsFooter';

const Settings = () => {
    return (
        <Page
            title="Settings"
            backAction={{ content: 'Dashboard', url: '/' }}
        >
            <BlockStack gap="500">
                <SettingsGrid />
                <SettingsFooter />
            </BlockStack>
        </Page>
    );
};

export default Settings;
