import React from 'react';
import { Card, Box, Text, Icon } from '@shopify/polaris';
import { CheckIcon, XIcon } from '@shopify/polaris-icons';

const PlanComparisonTable = () => {
    const sections = [
        {
            title: 'Cookie Consent Banner',
            features: [
                { name: 'GDPR, CCPA and other regional laws', values: [true, true, true, true] },
                { name: 'Preview changes without saving', values: [true, true, true, true] },
                { name: 'Tailored branding & styling', values: [true, true, true, true] },
                { name: 'Logo gallery', values: [true, true, true, true] },
                { name: 'Basic banner types & consent mode', values: [true, true, true, true] },
                { name: 'Configurable Privacy policy & Impressum links', values: [true, true, true, true] },
                { name: 'Reopen banner button', values: [true, true, true, true] },
                { name: 'Preferences popup', values: [false, true, true, true] },
                { name: 'Reset consent button', values: [false, true, true, true] },
                { name: 'Custom styling (CSS)', values: [false, true, true, true] },
                { name: 'Custom logo', values: [false, false, true, true] },
                { name: 'Implied consent support (timeout/scroll)', values: [false, false, true, true] },
                { name: 'Admin mode', values: [false, false, true, true] },
                { name: 'Reopen/revoke consent link on menu', values: [false, false, true, true] },
                { name: 'Banner only on homepage', values: [false, false, true, true] },
            ]
        },
        {
            title: 'Store scanner',
            features: [
                { name: 'Auto detection of cookies with installation', values: [true, true, true, true] },
                { name: 'Cookie information and auto categorization', values: [true, true, true, true] },
                { name: 'Scan on demand', values: [false, true, true, true] },
                { name: 'Scan history', values: [false, true, true, true] },
                { name: 'Cookies editor', values: [false, true, true, true] },
                { name: 'Cookies declaration page', values: [false, true, true, true] },
                { name: 'User-Tracking Pixels & HTML Storage', values: [false, false, true, true] },
                { name: 'Embedded videos (iframes)', values: [false, false, true, true] },
                { name: 'Scan behind password', values: [false, false, false, true] },
                { name: 'Recommendations', values: [false, false, false, true] },
            ]
        },
        {
            title: 'Integrations & Auto-blocker',
            features: [
                { name: 'Shopify customer privacy', values: [true, true, true, true] },
                { name: 'Global Privacy Control', values: [true, true, true, true] },
                { name: 'Pandectes Consent Event', values: [false, true, true, true] },
                { name: 'Google consent mode (GCM v2)', values: [false, true, true, true] },
            ]
        }
    ];

    return (
        <Box paddingBlockEnd="800">
            <Text variant="headingXl" as="h2">Compare all plans</Text>
            <Box paddingBlockStart="400">
                <Card padding="0">
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid var(--p-color-border-secondary)' }}>
                                    <th style={{ padding: '16px 24px' }}></th>
                                    <th style={{ padding: '16px 24px', textAlign: 'center' }}><Text variant="headingSm" as="span">Basic</Text></th>
                                    <th style={{ padding: '16px 24px', textAlign: 'center' }}><Text variant="headingSm" as="span">Plus</Text></th>
                                    <th style={{ padding: '16px 24px', textAlign: 'center', backgroundColor: 'var(--p-color-bg-surface-brand-selected)' }}><Text variant="headingSm" as="span">Premium</Text></th>
                                    <th style={{ padding: '16px 24px', textAlign: 'center' }}><Text variant="headingSm" as="span">Enterprise</Text></th>
                                </tr>
                            </thead>
                            <tbody>
                                {sections.map((section, sIndex) => (
                                    <React.Fragment key={sIndex}>
                                        <tr style={{ backgroundColor: 'var(--p-color-bg-surface-secondary)' }}>
                                            <td colSpan="5" style={{ padding: '12px 24px' }}>
                                                <Text variant="headingXs" as="span">{section.title}</Text>
                                            </td>
                                        </tr>
                                        {section.features.map((feature, fIndex) => (
                                            <tr key={fIndex} style={{ borderBottom: '1px solid var(--p-color-border-secondary)' }}>
                                                <td style={{ padding: '12px 24px' }}>
                                                    <Text variant="bodySm" as="span">{feature.name}</Text>
                                                </td>
                                                {feature.values.map((v, vIndex) => (
                                                    <td key={vIndex} style={{
                                                        padding: '12px 24px',
                                                        textAlign: 'center',
                                                        backgroundColor: vIndex === 2 ? 'var(--p-color-bg-surface-brand-selected)' : 'transparent'
                                                    }}>
                                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                            {v ? (
                                                                <Icon source={CheckIcon} tone="success" />
                                                            ) : (
                                                                <Icon source={XIcon} tone="subdued" />
                                                            )}
                                                        </div>
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </Box>
        </Box>
    );
};

export default PlanComparisonTable;
