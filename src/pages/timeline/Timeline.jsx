import { useEffect, useState } from "react";

const Timeline = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("timeline")) || [];
    setData(stored);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Timeline</h2>

      <div className="space-y-4">
        {data.length === 0 ? (
          <p className="text-center text-gray-500">No interactions yet</p>
        ) : (
          data.map((item, index) => (
            <div key={index} className="bg-white shadow p-4 rounded-lg">
              <h3 className="font-semibold">{item.name}</h3>
              <p>{item.type} interaction</p>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Timeline;
