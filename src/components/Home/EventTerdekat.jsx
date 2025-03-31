import { useState, useEffect } from "react";

const EventTerdekat = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const dummyData = [
      { id: 1, title: "Lorem Ipsum", mulai: "Mulai 21 Maret 2025", image: "/images/image4.jpg" },
      { id: 2, title: "Lorem Doro", mulai: "Mulai 24 Maret 2025", image: "/images/image4.jpg" },
      { id: 3, title: "Lorem Foro", mulai: "Mulai 18 Maret 2025", image: "/images/image4.jpg" },
      { id: 4, title: "Lorem Goro", mulai: "Mulai 19 Maret 2025", image: "/images/image4.jpg" },
      { id: 5, title: "Lorem Koro", mulai: "Mulai 22 Maret 2025", image: "/images/image4.jpg" },
    ];
    setEvents(dummyData);
  }, []);

  return (
    <div className="relative max-w-6xl mx-auto px-4 pt-20">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold">Event Terdekat</h2>
        <button className="border border-black rounded-md px-3 sm:px-5 py-1.5 sm:py-2 font-medium text-black text-xs sm:text-sm w-[90px] sm:w-[95px] transition hover:bg-black hover:text-white active:scale-90 duration-300">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="event-card bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition duration-300 transform hover:shadow-lg hover:scale-105 active:scale-90"
          >
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover transition active:scale-96" />
            <div className="p-3">
              <h3 className="text-base font-semibold">{event.title}</h3>
              <p className="text-xs text-gray-600">{event.mulai}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventTerdekat;
