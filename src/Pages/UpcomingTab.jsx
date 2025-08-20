import upcomingData from "./upcomingData.json";

const UpcomingTab = () => {
  return (
    <div className="p-6 ">
      <h2 className="text-2xl font-bold mb-4">Upcoming Interviews</h2>
      <ul className="space-y-4 grid md:grid-cols-3 gap-1">
        {upcomingData.map((item) => (
          <li
            key={item.id}
            className="p-4 bg-white shadow-md rounded-lg flex justify-between items-center cursor-pointer"
          >
            <div>
              <h3 className="font-bold text-lg">{item.company}</h3>
              <p className="text-gray-600">{item.role}</p>
              <p className="text-sm text-gray-500">{item.location}</p>
            </div>
            <div className="text-right">
              <p className="text-blue-600 font-semibold">{item.date}</p>
              <p className="text-gray-700">{item.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingTab;
