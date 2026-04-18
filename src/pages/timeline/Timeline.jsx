import { useEffect, useState } from "react";


import callImg from "../../assets/assets/call.png"
import textImg from "../../assets/assets/text.png"
import videoImg from "../../assets/assets/video.png"

const Timeline = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("timeline")) || [];
        setData(stored);
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-4xl font-semibold mb-6">Timeline</h2>
            <div class="mb-6 flex gap-2">


                <input
                    type="text"
                    placeholder="Search timeline..."
                    class=" px-4 py-3 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-green-500"
                />


                <button class="px-4 py-3 bg-green-900 text-white rounded-lg hover:bg-green-700">
                    Search
                </button>

            </div>


            <div className="space-y-4">
                {
                    data.length === 0 ? (
                        <p className="text-center text-gray-500">
                            No interactions yet
                        </p>
                    ) : (
                        data.map((item, index) => (
                            <div key={index} className="bg-white shadow p-4 rounded-lg">

                                <h3 className="font-semibold">{item.name}</h3>

                                {/*  ICON + TYPE */}
                                <div className="flex items-center gap-2 mt-1">

                                    {item.type === "Call" && (
                                        <>
                                            <img src={callImg} className="w-4 h-4" />
                                            <span>Call</span>
                                        </>
                                    )}

                                    {item.type === "Text" && (
                                        <>
                                            <img src={textImg} className="w-4 h-4" />
                                            <span>Text</span>
                                        </>
                                    )}

                                    {item.type === "Video" && (
                                        <>
                                            <img src={videoImg} className="w-4 h-4 " />
                                            <span>Video</span>
                                        </>
                                    )}

                                </div>

                                <p className="text-sm text-gray-500 mt-1">
                                    {item.date}
                                </p>

                            </div>
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default Timeline;