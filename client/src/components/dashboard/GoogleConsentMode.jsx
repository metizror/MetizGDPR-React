import { ShieldCheck, X } from "lucide-react"

const GoogleConsentMode = () => {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center">
            <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                <X size={18} />
            </button>
            <div className="max-w-[70%]">
                <h3 className="text-base font-bold text-gray-900 mb-2">Google Consent Mode v2 ready</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    Follow this guide to ensure your store complies with Google consent mode v2, aligning with Google's latest EU user consent policy.
                </p>
                <button className="px-4 py-1.5 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                    Learn more
                </button>
            </div>
            <div className="hidden md:flex items-center justify-center pr-8">
                <div className="relative">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg relative z-10">
                        <ShieldCheck size={32} className="text-blue-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-lg shadow-md flex items-center justify-center z-20">
                        <span className="text-white text-[10px] font-bold">G</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GoogleConsentMode;
