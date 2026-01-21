import React from 'react';
import { Page, BlockStack } from '@shopify/polaris';
import ContactForm from '../components/contact/ContactForm';
import ContactFooter from '../components/contact/ContactFooter';

const Contact = () => {
    return (
        <Page
            title="Contact"
            backAction={{ content: 'Dashboard', url: '/' }}
        >
            <BlockStack gap="500">
                <ContactForm />
                <ContactFooter />
            </BlockStack>
        </Page>
    );
};

export default Contact;
