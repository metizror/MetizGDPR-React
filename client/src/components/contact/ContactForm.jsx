import React from 'react';

const ContactForm = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-4">
            {/* Left side: Information */}
            <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold text-gray-900">Assistance/Feedback</h2>
                <div className="text-[15px] text-gray-600 leading-relaxed space-y-4">
                    <p>
                        Use the contact form on the right to provide us with your valuable feedback or ask any question you might have regarding the app. We appreciate the time you spent doing that and will try to get back to you the soonest we can.
                    </p>
                    <p>
                        If you want to email us directly instead, feel free to do so at{' '}
                        <a href="mailto:support@pandectes.io" className="text-blue-600 hover:underline">
                            support@pandectes.io
                        </a>.
                    </p>
                </div>
            </div>

            {/* Right side: Form Card */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                <form className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                            Subject
                        </label>
                        <div className="relative">
                            <select
                                id="subject"
                                className="w-full h-11 px-4 bg-white border border-gray-300 rounded-lg text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer text-gray-900"
                                defaultValue="general-support"
                            >
                                <option value="general-support">General support</option>
                                <option value="billing">Billing issue</option>
                                <option value="technical">Technical problem</option>
                                <option value="feedback">Feedback</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="6"
                            placeholder="Provide as much detail as possible about your issue so that we may better understand your case"
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none placeholder:text-gray-400 text-gray-900"
                        ></textarea>
                    </div>

                    <div className="flex justify-end pt-2">
                        <button
                            type="button"
                            className="px-6 py-2 bg-[#d1d5db] text-white rounded-lg text-sm font-bold cursor-not-allowed"
                            disabled
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
