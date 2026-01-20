import { Calendar, ChevronDown, RefreshCcw, Search } from "lucide-react"
import wordmap from "../../assets/wordmap.jpg"
import { useState } from "react"

const ConsentsTracking = () => {
    const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleString())
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Consents tracking</h2>
                <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded-lg text-sm bg-white cursor-pointer hover:bg-gray-50">
                        <Calendar size={16} className="text-gray-500" />
                        <span>Today</span>
                        <ChevronDown size={14} className="text-gray-400" />
                    </div>
                    <button className="p-2 rounded-lg border border-gray-300 bg-white flex items-center justify-center cursor-pointer hover:bg-gray-50">
                        <Search size={16} className="text-gray-500" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-gray-50 rounded-lg h-[400px] flex items-center justify-center relative overflow-hidden border border-gray-100">
                    <img
                        src={wordmap}
                        alt="World Map"
                        className='w-full object-contain opacity-90'
                    />
                </div>

                <div className="flex flex-col gap-3">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <div className="text-sm text-gray-600 mb-1 font-medium">Accepted all</div>
                        <div className="text-2xl font-bold text-gray-900">0</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <div className="text-sm text-gray-600 mb-1 font-medium">Declined all</div>
                        <div className="text-2xl font-bold text-gray-900">0</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <div className="text-sm text-gray-600 mb-1 font-medium">Partially accepted</div>
                        <div className="text-2xl font-bold text-gray-900">0</div>
                        <div className="grid grid-cols-3 gap-2 mt-2">
                            <div className="flex flex-col">
                                <span className="text-[12px] text-gray-500">Functionality</span>
                                <span className="text-lg font-semibold">0</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[12px] text-gray-500">Performance</span>
                                <span className="text-lg font-semibold">0</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[12px] text-gray-500">Targeting</span>
                                <span className="text-lg font-semibold">0</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <div className="text-sm text-gray-600 mb-1 font-medium">Top countries</div>
                        <div className="text-sm text-gray-400 mt-2">
                            No records found
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-between items-center mt-6 pt-4 border-t border-gray-100 text-sm text-gray-500">
                <span>Timezone: America/New_York</span>
                <div className="flex items-center gap-4">
                    <span>Last updated: {lastUpdated}</span>
                    <button className="flex items-center gap-1.5 text-blue-600 font-medium hover:underline cursor-pointer" onClick={() => setLastUpdated(new Date().toLocaleString())}>
                        <RefreshCcw size={14} />
                        Refresh
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConsentsTracking;
