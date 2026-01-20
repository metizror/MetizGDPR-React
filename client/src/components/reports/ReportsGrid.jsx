import { Scan, BarChart3, Users, Lightbulb } from 'lucide-react';

const ReportsGrid = () => {
    const reportCards = [
        {
            title: 'Scan report',
            description: 'Checkout the findings of the latest scan we made on your store.',
            icon: <Scan size={24} className="text-gray-600" />,
            linkText: 'View report',
            linkHref: '#'
        },
        {
            title: 'Consents tracking',
            description: 'View detailed information about consents given by your visitors.',
            icon: <BarChart3 size={24} className="text-gray-600" />,
            linkText: 'View report',
            linkHref: '#'
        },
        {
            title: 'Customer data requests',
            description: 'View detailed information about data requests made by your customers.',
            icon: <Users size={24} className="text-gray-600" />,
            linkText: 'View report',
            linkHref: '#'
        },
        {
            title: 'Recommendations',
            description: 'Get recommendations on how to improve your cookie declaration.',
            icon: <Lightbulb size={24} className="text-gray-600" />,
            linkText: 'View report',
            linkHref: '#'
        }
    ];

    // Using Lucide Lightbulb instead of custom SVG string if possible
    // Wait, the icons in the image are slightly different. 
    // Scan report: looked like a barcode/scanner icon.
    // Consents tracking: bar chart.
    // Customer data requests: users/people.
    // Recommendations: lightbulb.

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reportCards.map((card, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                    <div className="mb-4">
                        {card.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-500 mb-6 leading-relaxed flex-grow">
                        {card.description}
                    </p>
                    <button className="text-blue-600 text-sm font-bold hover:underline text-left mt-auto">
                        {card.linkText}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ReportsGrid;
