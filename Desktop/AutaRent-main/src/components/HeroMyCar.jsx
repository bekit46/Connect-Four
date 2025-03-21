import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Calendar, Car, CheckCircle, DollarSign } from "lucide-react";

function HeroMycar() {
  const currentRentals = [
    {
      id: 1,
      car: "BMW 420",
      image: "/car_png/420.png",
      startDate: "2025-02-01",
      endDate: "2025-03-10",
      status: "Active",
      pickupLocation: "İstanbul Airport",
      dropoffLocation: "Sabiha Gökçen Airport",
      totalPrice: 2500
    },
    {
      id: 2,
      car: "Audi A6",
      image: "/car_png/a6.png",
      startDate: "2025-03-05",
      endDate: "2025-03-25",
      status: "Active",
      pickupLocation: "Sabiha Gökçen Airport",
      dropoffLocation: "Atatürk Airport",
      totalPrice: 3200
    }
  ];

  const pastRentals = [
    {
      id: 3,
      car: "Porsche 911",
      image: "/car_png/porsche.png",
      startDate: "2023-09-01",
      endDate: "2023-09-10",
      status: "Completed",
      totalPrice: 1200,
      pickupLocation: "Sabiha Gökçen Airport",
      dropoffLocation: "Atatürk Airport"
    },
    {
      id: 4,
      car: "Porsche Taycan",
      image: "/car_png/taycan.png",
      startDate: "2023-08-15",
      endDate: "2023-08-25",
      status: "Completed",
      totalPrice: 1500,
      pickupLocation: "Kahramanmaraş Airport",
      dropoffLocation: "Kahramanmaraş Airport"
    }
  ];

  const RentalCard = ({ rental, isPastRental }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      {/* Image Section */}
      <div className="relative h-48 bg-blue-50 flex items-center justify-center p-4">
        <img 
          src={rental.image} 
          alt={rental.car} 
          className="max-h-full max-w-full object-contain"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
            rental.status === "Active" 
              ? "bg-green-100 text-green-700" 
              : "bg-blue-100 text-blue-700"
          }`}>
            {rental.status}
          </span>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-5">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{rental.car}</h3>
        
        <div className="space-y-2 text-gray-600">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-blue-500" />
            <span>{rental.startDate} - {rental.endDate}</span>
          </div>
          
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-blue-500" />
            <span>Pickup: {rental.pickupLocation}</span>
          </div>
          
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-blue-500" />
            <span>Dropoff: {rental.dropoffLocation}</span>
          </div>
          
          <div className="flex items-center font-bold text-blue-600">
            <DollarSign className="w-5 h-5 mr-2" />
            Total Paid: ${rental.totalPrice}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-blue-50/50 min-h-screen py-16 px-4 sm:px-6 lg:px-8 mt-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-12 text-center">
          My Car Rentals
        </h1>

        {/* Current Rentals */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8">
            Current Rentals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentRentals.map(rental => (
              <RentalCard key={rental.id} rental={rental} />
            ))}
          </div>
        </div>

        {/* Past Rentals */}
        <div>
          <h2 className="text-3xl font-semibold text-blue-800 mb-8">
            Past Rentals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastRentals.map(rental => (
              <RentalCard key={rental.id} rental={rental} isPastRental={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroMycar;