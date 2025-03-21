import React from 'react'
import { Link, useLocation } from "react-router-dom";

function Section() {
  return (
    <section className="py-6 sm:py-8 lg:py-10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Stack vertically on mobile, side by side on medium and larger screens */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:items-center md:gap-8">
          {/* Image container - takes full width on mobile, 3/4 on medium+ screens */}
          <div className="md:col-span-3 order-2 md:order-1">
            <img
              src="https://images.opumo.com/wordpress/wp-content/uploads/2022/06/opumo-rolls-1200x578.jpg"
              className="rounded-xl w-full h-auto object-cover shadow-md"
              alt="Luxury car from Auta Rent"
            />
          </div>

          {/* Text container - appears above image on mobile, next to it on larger screens */}
          <div className="md:col-span-1 order-1 md:order-2">
            <div className="max-w-lg md:max-w-none space-y-3 sm:space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl lg:text-3xl leading-tight">
                Always experience the difference with Auta Rent.
              </h2>

              <p className="text-sm sm:text-base text-gray-700 text-justify">
                Auta Rent has always managed to be different with its unique user experience
                in the car rental industry. It has brought a different perspective to the sector
                with premium brand vehicles, private chauffeur service and various payment methods.
              </p>
              <Link to="all-cars">
                <h2 className="text-md font-semibold text-blue-400 leading-tight hover:text-blue-700 py-4">
                  See all cars
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section