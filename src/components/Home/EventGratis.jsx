import React from "react";

const events = [
  { id: 1, title: "Lorem Ipsum Lorem", type: "Seminar", image: "/images/image4.jpg" },
  { id: 2, title: "Lorem Ipsum Lorem", type: "Konser", image: "/images/image4.jpg" },
  { id: 3, title: "Lorem Ipsum Lorem", type: "Workshop", image: "/images/image4.jpg" },
  { id: 4, title: "Lorem Ipsum Lorem", type: "Pameran", image: "/images/image4.jpg" },
];

const EventGratis = () => {
  return (
    <div className="max-w-[90%] sm:max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8 bg-gray-100 shadow-lg rounded-2xl mt-10">
      <h2 className="text-2xl font-bold text-center mb-8">Event Gratis</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white p-4 sm:p-5 rounded-lg shadow flex flex-col h-auto cursor-pointer transition duration-300 hover:shadow-lg hover:bg-gray-200"
          >
            <img
              src={event.image}
              alt={event.title || "Event Image"}
              className="w-full h-28 sm:h-36 object-cover rounded-md transition active:scale-95"
              loading="lazy"
            />
            <div className="text-center sm:text-left space-y-1 mt-3">
              <h3 className="text-sm sm:text-base font-semibold">{event.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Tipe event: <span className="text-blue-600 font-medium">{event.type}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          className="border border-black px-6 py-3 rounded-md text-sm font-medium transition duration-300 hover:bg-black hover:text-white active:scale-90"
          aria-label="Lihat selengkapnya"
        >
          Selengkapnya
        </button>
      </div>
    </div>
  );
};

export default EventGratis;