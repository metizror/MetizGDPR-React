import React from 'react';
import ContactHeader from '../components/contact/ContactHeader';
import ContactForm from '../components/contact/ContactForm';
import ContactFooter from '../components/contact/ContactFooter';

const Contact = () => {
    console.log("TEst");

    return (
        <div className="flex flex-col p-6 max-w-[1200px] mx-auto bg-gray-50 min-h-screen font-sans">
            <ContactHeader />
            <ContactForm />
            <ContactFooter />

        </div>
    );
};

export default Contact;
