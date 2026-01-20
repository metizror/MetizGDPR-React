import { FileText, Mail, MessageSquare, PlayCircle } from "lucide-react"

const SupportChannel = () => {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-base font-bold text-gray-900 mb-4">Support channels</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="border border-gray-100 rounded-lg p-5 bg-white flex flex-col h-full">
                    <MessageSquare size={20} className="text-gray-400 mb-3" />
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Live chat</h4>
                    <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                        Chat with us in real time for any question you may have.
                    </p>
                    <button className="text-blue-600 text-sm font-semibold hover:underline cursor-pointer mt-auto text-left">
                        Open chat
                    </button>
                </div>

                <div className="border border-gray-100 rounded-lg p-5 bg-white flex flex-col h-full">
                    <FileText size={20} className="text-gray-400 mb-3" />
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Help center</h4>
                    <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                        Find answers in our detailed manuals.
                    </p>
                    <button className="text-blue-600 text-sm font-semibold hover:underline cursor-pointer mt-auto text-left">
                        Visit help center
                    </button>
                </div>

                <div className="border border-gray-100 rounded-lg p-5 bg-white flex flex-col h-full">
                    <PlayCircle size={20} className="text-gray-400 mb-3" />
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Video tutorial</h4>
                    <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                        Master the app in minutes on our youtube channel.
                    </p>
                    <button className="text-blue-600 text-sm font-semibold hover:underline cursor-pointer mt-auto text-left">
                        Watch tutorial
                    </button>
                </div>

                <div className="border border-gray-100 rounded-lg p-5 bg-white flex flex-col h-full">
                    <Mail size={20} className="text-gray-400 mb-3" />
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Contact form</h4>
                    <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                        Contact us, to provide any questions or feedback.
                    </p>
                    <button className="text-blue-600 text-sm font-semibold hover:underline cursor-pointer mt-auto text-left">
                        Send us a message
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SupportChannel;
