import { RefreshCcw, Search } from "lucide-react"

const CustomerDataRequest = () => {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Customer data requests</h2>
                <div className="flex gap-3 items-center">
                    <button className="flex items-center gap-1.5 text-blue-600 font-medium hover:underline cursor-pointer">
                        <RefreshCcw size={14} />
                        Refresh
                    </button>
                    <button className="p-2 rounded-lg border border-gray-300 bg-white flex items-center justify-center cursor-pointer hover:bg-gray-50">
                        <Search size={16} className="text-gray-500" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                    <div className="text-[15px] font-semibold text-gray-700 mb-4">Portability</div>
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-1">
                            <span className="text-xs text-gray-500">Pending</span>
                            <span className="text-2xl font-bold text-amber-700">0</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs text-gray-500">Fulfilled</span>
                            <span className="text-2xl font-bold text-teal-600">0</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                    <div className="text-[15px] font-semibold text-gray-700 mb-4">Rectification</div>
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-1">
                            <span className="text-xs text-gray-500">Pending</span>
                            <span className="text-2xl font-bold text-amber-700">0</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs text-gray-500">Fulfilled</span>
                            <span className="text-2xl font-bold text-teal-600">0</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                    <div className="text-[15px] font-semibold text-gray-700 mb-4">Erasure</div>
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-1">
                            <span className="text-xs text-gray-500">Pending</span>
                            <span className="text-2xl font-bold text-amber-700">0</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs text-gray-500">Fulfilled</span>
                            <span className="text-2xl font-bold text-teal-600">0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerDataRequest;
