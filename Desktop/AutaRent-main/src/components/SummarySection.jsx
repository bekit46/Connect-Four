import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCar } from "@/components/CarContext";
import { useRental } from "@/components/RentalContext";
import { insuranceDetails } from './InsuranceData';
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import campaignsData from '../campaignsData';

const SummarySection = ({
  selectedInsurance = "basic",
  extras = 0,
  nextRoute = '/details',
  onContinueClick
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedCar } = useCar();
  const { rentalData, setRentalData } = useRental();
  const [errorMessage, setErrorMessage] = useState('');

  const { campaignCode: initialCampaignCode } = location.state || {};

  useEffect(() => {
    if (initialCampaignCode && !rentalData.campaignCode) {
      setRentalData((prev) => ({ ...prev, campaignCode: initialCampaignCode }));
      handleApplyCampaign(); 
    }
  }, [initialCampaignCode]);

  if (!selectedCar) {
    return <p className="text-center text-red-500">No car selected. Please go back and choose a car.</p>;
  }

  const selectedInsuranceDetails = insuranceDetails[selectedInsurance] || insuranceDetails.basic;
  const campaigns = campaignsData;

  const calculateDaysDifference = (startDate, endDate) => {
    if (!startDate || !endDate) return 1;
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (isNaN(start.getTime()) || isNaN(end.getTime())) return 1;
    const diffTime = end.getTime() - start.getTime();
    return Math.max(diffTime / (1000 * 60 * 60 * 24), 1);
  };

  const rentalDays = calculateDaysDifference(rentalData.pickUpDate, rentalData.dropOffDate);
  const carTotalPrice = rentalDays * Number(selectedCar.price);
  const baseTotalPrice = carTotalPrice + Number(selectedInsuranceDetails.price) + Number(extras);
  const totalPrice = baseTotalPrice - rentalData.discountAmount;

  const calculateDiscount = (code) => {
    const selectedCampaign = campaigns.find(campaign => campaign.code === code);
    if (!selectedCampaign) {
      setErrorMessage('This campaign code is invalid');
      return 0;
    }
    if (selectedCampaign.applicableFuel && !selectedCampaign.applicableFuel.includes(selectedCar.fuel.toLowerCase())) {
      setErrorMessage(`This campaign (${code}) is not valid for this car. It requires ${selectedCampaign.applicableFuel.join(' or ')} fuel, not ${selectedCar.fuel}`);
      return 0;
    }
    if (selectedCampaign.applicableColor && selectedCampaign.applicableColor.toLowerCase() !== selectedCar.color.toLowerCase()) {
      setErrorMessage(`This campaign (${code}) is not valid for this car. It requires a ${selectedCampaign.applicableColor} car, not ${selectedCar.color}`);
      return 0;
    }
    if (selectedCampaign.applicableCarType && !selectedCampaign.applicableCarType.includes(selectedCar.type?.toLowerCase())) {
      setErrorMessage(`This campaign (${code}) is not valid for this car. It requires ${selectedCampaign.applicableCarType.join(' or ')} type, not ${selectedCar.type || 'unknown'}`);
      return 0;
    }

    if (code === "TOGG30" && !selectedCar.name.toLowerCase().includes("togg")) {
      setErrorMessage(`This campaign (${code}) is not valid for this car. It requires a TOGG vehicle, not ${selectedCar.name}`);
      return 0;
    }
    if (selectedCampaign.discountType === 'fixed') {
      return selectedCampaign.discount;
    } else if (selectedCampaign.discountType === 'percentage') {
      return Math.round((carTotalPrice * selectedCampaign.discount) / 100);
    }
    return 0;
  };

  const pickUpTime = rentalData.pickUpTime || rentalData.pickUpHour;
  const dropOffTime = rentalData.dropOffTime || rentalData.dropOffHour;

  const isFormComplete = rentalData.pickUpLocation && rentalData.dropOffLocation &&
                         rentalData.pickUpDate && rentalData.dropOffDate &&
                         pickUpTime && dropOffTime;

  const handleContinue = () => {
    if (onContinueClick) {
      onContinueClick();
    } else if (nextRoute && isFormComplete) {
      navigate(nextRoute);
    }
  };

  const formatDateTime = (date, time) => {
    if (!date || !time) return "Not selected";
    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) return "Invalid date";
    return `${dateObj.toLocaleDateString('en-GB', {
      day: '2-digit', month: '2-digit', year: 'numeric'
    })}, ${time}`;
  };

  const handleApplyCampaign = () => {
    const calculatedDiscount = calculateDiscount(rentalData.campaignCode);
    if (calculatedDiscount > 0) {
      setRentalData((prev) => ({ ...prev, discountAmount: calculatedDiscount }));
      setErrorMessage('');
    } else {
      setRentalData((prev) => ({ ...prev, discountAmount: 0 }));
    }
  };

  return (
    <div
      className="bg-white p-6 flex flex-col shadow-custom w-full max-w-md"
      style={{ borderRadius: '10px', minHeight: '400px' }}
    >
      <h2 className="text-2xl font-medium mb-2 my-6">Summary</h2>
      <div className="flex justify-center mb-3 mt-2">
        <img src={selectedCar.image} alt={selectedCar.name} className="w-full max-w-[300px] h-auto rounded-md"/>
      </div>

      <div className="space-y-4 flex-grow">
        <div>
          <p className="text-sm text-gray-700">
            <span className="font-bold text-royalblue">Pick-up: </span>
            {formatDateTime(rentalData.pickUpDate, pickUpTime)} - {rentalData.pickUpLocation || "Not selected"}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-bold text-royalblue">Return: </span>
            {formatDateTime(rentalData.dropOffDate, dropOffTime)} - {rentalData.dropOffLocation || "Not selected"}
          </p>
          <p className="text-xs -mx-6 border-b my-2" style={{ borderBottomWidth: '1.3px', borderColor: '#1f2937' }}/>
        </div>

        <p className="font-medium">{selectedCar.name}</p>
        <div className="flex items-center gap-x-2">
          <BsFillFuelPumpFill className="text-sm sm:text-base" />
          <span className="font-medium">: {selectedCar.fuel}</span>
        </div>
        <div className="flex items-center gap-x-2">
          <GiGearStickPattern className="text-sm sm:text-base" />
          <span className="font-medium">: {selectedCar.gear}</span>
        </div>

        <div>
          <div className="flex justify-between mb-2 font-medium">
            <span>Car Price ({rentalDays} day{rentalDays > 1 ? "s" : ""}):</span>
            <span>${carTotalPrice}</span>
          </div>
          <div className="flex justify-between mb-2 font-medium">
            <span>{selectedInsuranceDetails.name}:</span>
            <span>${selectedInsuranceDetails.price}</span>
          </div>
          <div className="flex justify-between mb-2 font-medium">
            <span>Extras:</span>
            <span>${extras}</span>
          </div>
          {rentalData.discountAmount > 0 && (
            <div className="flex justify-between mb-2 font-medium text-green-600">
              <span>Discount ({rentalData.campaignCode}):</span>
              <span>-${rentalData.discountAmount}</span>
            </div>
          )}
          <p className="text-xs -mx-6 border-b my-4" style={{ borderBottomWidth: '1.3px', borderColor: '#1f2937' }}/>
          <div className="mt-1 pt-1 flex justify-between font-medium">
            <span>Total:</span>
            <span>${totalPrice}</span>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Campaign Code:</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={rentalData.campaignCode || ""}
              onChange={(e) => setRentalData((prev) => ({ ...prev, campaignCode: e.target.value.toUpperCase() }))}
              placeholder="Enter campaign code"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleApplyCampaign}
              className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition whitespace-nowrap"
            >
              Apply
            </button>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
        </div>
      </div>

      <button
        className={`mt-6 w-full py-3 text-white transition ${isFormComplete ? "bg-buttonColor hover:bg-gray-700" : "bg-gray-400 cursor-not-allowed"}`}
        style={{ borderRadius: '8px' }}
        onClick={handleContinue}
        disabled={!isFormComplete && !onContinueClick}
      >
        Continue
      </button>
    </div>
  );
};

export default SummarySection;