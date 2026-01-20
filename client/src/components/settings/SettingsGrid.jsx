import React from 'react';
import {
    Layout,
    Puzzle,
    Code,
    Layers,
    Database,
    FileText,
    Globe,
    Languages,
    Search,
    ShoppingBag,
    User,
    MousePointer2,
    Mail,
    Bell,
    RotateCcw,
    Box,
    Cpu,
    Star
} from 'lucide-react';

const SettingsGrid = () => {
    const settingsItems = [
        {
            title: 'Banner',
            description: 'Customize layout, behavior, and content. Use the live preview to test changes.',
            icon: <Layout size={20} className="text-gray-500" />
        },
        {
            title: 'Integrations',
            description: 'Shopify Customer Privacy, Google Consent Mode, Facebook Pixel, Rakuten CMP, GPC.',
            icon: <Puzzle size={20} className="text-gray-500" />
        },
        {
            title: 'Auto blocker',
            description: 'Manage blocking & classification for scripts & other third-party services.',
            icon: <Code size={20} className="text-gray-500" />
        },
        {
            title: 'Categories',
            description: 'Edit the texts for the cookies and script categories in one place.',
            icon: <Layers size={20} className="text-gray-500" />
        },
        {
            title: 'Cookies & HTML storage',
            description: 'Manage your scanned cookies and even add your cookies manually.',
            icon: <Database size={20} className="text-gray-500" />
        },
        {
            title: 'Cookies declaration',
            description: 'The Cookie Declaration is essentially a cookie policy you can use on your store.',
            icon: <FileText size={20} className="text-gray-500" />
        },
        {
            title: 'Geolocation',
            description: 'Configure regional laws & Geolocation IP rules for GDPR, CCPA, PIPEDA & LGPD.',
            icon: <Globe size={20} className="text-gray-500" />
        },
        {
            title: 'Language & translations',
            description: 'Manage translations across the application & use the Integrated Google Translate.',
            icon: <Languages size={20} className="text-gray-500" />
        },
        {
            title: 'Cookie scanner',
            description: 'Configure the scanner to keep your cookies declaration up-to-date at all times.',
            icon: <Search size={20} className="text-gray-500" />
        },
        {
            title: 'Checkout block',
            description: 'Configure settings for consent on the checkout page.',
            icon: <ShoppingBag size={20} className="text-gray-500" />
        },
        {
            title: 'Do not sell my data',
            description: 'Comply with CCPA using a dedicated page for visitors to opt-out from data selling.',
            icon: <User size={20} className="text-gray-500" />
        },
        {
            title: 'Customer data requests',
            description: 'Customer Data Requests in one place for both guests and registered customers.',
            icon: <MousePointer2 size={20} className="text-gray-500" />
        },
        {
            title: 'Email templates',
            description: 'Personalize the email messages when using the Customer Data Requests.',
            icon: <Mail size={20} className="text-gray-500" />
        },
        {
            title: 'Notifications',
            description: 'Configure the app notifications & email addresses in one place.',
            icon: <Bell size={20} className="text-gray-500" />
        },
        {
            title: 'Reset user consents',
            description: 'Powerfull tool to re-ask for consent when your privacy policy changes.',
            icon: <RotateCcw size={20} className="text-gray-500" />
        },
        {
            title: 'Custom/Headless storefront',
            description: 'Install the banner and set consent settings for your custom storefront.',
            icon: <Box size={20} className="text-gray-500" />
        },
        {
            title: 'Javascript API',
            description: 'Integrate & automate with our JavaScript API and customize consent management.',
            icon: <Cpu size={20} className="text-gray-500" />,
            badge: 'Enterprise'
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {settingsItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4 group cursor-pointer">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center transition-colors group-hover:bg-gray-200">
                        {item.icon}
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <h3 className="text-[15px] font-bold text-blue-600 hover:underline">
                                {item.title}
                            </h3>
                            {item.badge && (
                                <span className="flex items-center gap-1 bg-purple-100 text-purple-700 text-[10px] font-bold px-1.5 py-0.5 rounded border border-purple-200">
                                    <Star size={10} fill="currentColor" />
                                    {item.badge}
                                </span>
                            )}
                        </div>
                        <p className="text-[13px] text-gray-500 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SettingsGrid;
