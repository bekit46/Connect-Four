import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCar } from '@/components/CarContext';
import { useRental } from '@/components/RentalContext';
import SummarySection from './SummarySection';
import { useInsurance } from '@/components/InsuranceContext';
import { useExtras } from "@/components/ExtrasContext";

const DetailsPage = () => {
  const navigate = useNavigate();
  const { selectedInsurance } = useInsurance();
  const { extrasTotal } = useExtras();
  
  // Form doğrulama durumu
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    isAdult: false,
    streetAddress1: '',
    streetAddress2: '',
    postal: '',
    city: '',
    state: '',
    country: 'Turkey',
    acceptTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });

    let newValue = type === 'checkbox' ? checked : value;

    if (name === "postal") {
      newValue = newValue.replace(/\D/g, '');
    }
    
    setFormData({
      ...formData,
      [name]: newValue
    });
    
    // Kullanıcı bir alanı doldurduktan sonra o alanın hatasını temizle
    if (formSubmitted && formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: false
      });
    }
  };

  // Form doğrulama
  const validateForm = () => {
    const errors = {};
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'streetAddress1', 'postal', 'city'];
    let isValid = true;
    
    // Zorunlu alanları kontrol et
    requiredFields.forEach(field => {
      if (!formData[field]) {
        errors[field] = true;
        isValid = false;
      }
    });
    
    // Yaş kontrolü
    if (!formData.isAdult) {
      errors.isAdult = true;
      isValid = false;
    }
    
    // Email formatı kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.email = true;
      isValid = false;
    }

    if (!formData.acceptTerms) {
      errors.acceptTerms = true;
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  // Form gönderme işlemi
  const handleFormSubmission = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    // Form doğrulama
    if (validateForm()) {
      // Form verilerini temizle (telefon numarasındaki boşlukları kaldır)
      const cleanedFormData = {
        ...formData,
        phone: formData.phone.replace(/\s/g, '')
      };
      
      // Form verilerini context veya localStorage'a kaydet
      console.log('Form submitted:', cleanedFormData);
      
      // Sonraki sayfaya yönlendir
      navigate('/payment');
    } else {
      // Hata varsa sayfanın üstüne kaydır
      window.scrollTo(0, 0);
    }
  };
  
  // SummarySection'daki Continue butonuna tıklanınca
  const handleContinueClick = () => {
    // Form submit butonuna tıklamış gibi davran
    document.getElementById('submitButton').click();
  };

  return (
    <div className="container mx-auto rounded-xl ">
      {formSubmitted && Object.keys(formErrors).length > 0 && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
          <p className="font-bold">Please fill in all required fields</p>
          <p>Some required information is missing or invalid. Please check the form and try again.</p>
        </div>
      )}
      
      <div className="flex flex-col md:flex-row gap-10 ">
        {/* Form Section (Left Side) */}
        <div className="md:w-9/12 rounded-xl">
          <form onSubmit={handleFormSubmission}>
            {/* Personal Information */}
            <div className="bg-white p-6 rounded-[10px] shadow-custom border border-gray-200 mb-6"
            >
              <h2 className="text-2xl font-bold mb-6">Personal Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block mb-2 font-medium">
                    First name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      formErrors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {formErrors.firstName && (
                    <p className="text-red-500 text-sm mt-1">First name is required</p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2 font-medium">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      formErrors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {formErrors.lastName && (
                    <p className="text-red-500 text-sm mt-1">Last name is required</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      formErrors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">Valid email is required</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <div className="w-1/4 mr-2">
                      <button 
                        type="button" 
                        className="w-full h-full flex items-center justify-between px-3 border border-gray-300 rounded bg-gray-100" 
                        disabled
                      >
                        <span>+90</span>
                      </button>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => {
                        // Sadece rakamları al
                        const numericValue = e.target.value.replace(/\D/g, '');
                        
                        // Formatla: 5XX XXX XX XX
                        let formattedValue = '';
                        if (numericValue.length > 0) {
                          formattedValue = numericValue.substring(0, 3);
                          if (numericValue.length > 3) {
                            formattedValue += ' ' + numericValue.substring(3, 6);
                          }
                          if (numericValue.length > 6) {
                            formattedValue += ' ' + numericValue.substring(6, 8);
                          }
                          if (numericValue.length > 8) {
                            formattedValue += ' ' + numericValue.substring(8, 10);
                          }
                        }
                        
                        setFormData({
                          ...formData,
                          phone: formattedValue
                        });
                        
                        // Kullanıcı telefon numarasını düzenlerse hata durumunu temizle
                        if (formSubmitted && formErrors.phone) {
                          setFormErrors({
                            ...formErrors,
                            phone: false
                          });
                        }
                      }}
                      placeholder="Phone Number"
                      className={`w-3/4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        formErrors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      maxLength="13" // 10 rakam + 3 boşluk
                      required
                    />
                  </div>
                  {formErrors.phone && (
                    <p className="text-red-500 text-sm mt-1">Phone number is required</p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label className={`flex items-center ${formErrors.isAdult ? 'text-red-500' : ''}`}>
                  <input
                    type="checkbox"
                    name="isAdult"
                    checked={formData.isAdult}
                    onChange={handleInputChange}
                    className={`w-5 h-5 rounded focus:ring-blue-500 ${
                      formErrors.isAdult ? 'border-red-500 text-red-600' : 'border-gray-300 text-blue-600'
                    }`}
                    required
                  />
                  <span className="ml-2">I'm 18 years of age or older. <span className="text-red-500">*</span></span>
                </label>
                {formErrors.isAdult && (
                  <p className="text-red-500 text-sm mt-1">You must confirm you are 18 years or older</p>
                )}
              </div>
            </div>

            {/* Address */}
            <div className="bg-white p-6 rounded-[10px] shadow-custom border border-gray-200">
              <h2 className="text-2xl font-bold mb-6">Address</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="streetAddress1" className="block mb-2 font-medium">
                    Street address 1 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="streetAddress1"
                    name="streetAddress1"
                    value={formData.streetAddress1}
                    onChange={handleInputChange}
                    className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      formErrors.streetAddress1 ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {formErrors.streetAddress1 && (
                    <p className="text-red-500 text-sm mt-1">Street address is required</p>
                  )}
                </div>
                <div>
                  <label htmlFor="streetAddress2" className="block mb-2 font-medium">
                    Street address 2 (optional)
                  </label>
                  <input
                    type="text"
                    id="streetAddress2"
                    name="streetAddress2"
                    value={formData.streetAddress2}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="postal" className="block mb-2 font-medium">
                    Postal / zip code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="postal"
                    name="postal"
                    value={formData.postal}
                    onChange={handleInputChange}
                    className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      formErrors.postal ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {formErrors.postal && (
                    <p className="text-red-500 text-sm mt-1">Postal code is required</p>
                  )}
                </div>
                <div>
                  <label htmlFor="city" className="block mb-2 font-medium">
                    Town / city <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      formErrors.city ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {formErrors.city && (
                    <p className="text-red-500 text-sm mt-1">City is required</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="state" className="block mb-2 font-medium">
                    State (optional)
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block mb-2 font-medium">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      className="w-full p-2 border border-gray-300 rounded flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled
                    >
                      <div className="flex items-center">
                        <span className="mr-2">🇹🇷</span>
                        <span>Turkey</span>
                      </div>
                    </button>
                    <input 
                      type="hidden" 
                      name="country" 
                      value="Turkey" 
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 mb-4">
                <label className={`flex items-center ${formErrors.acceptTerms ? 'text-red-500' : ''}`}>
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    className={`w-5 h-5 rounded focus:ring-blue-500 ${
                      formErrors.acceptTerms ? 'border-red-500 text-red-600' : 'border-gray-300 text-blue-600'
                    }`}
                    required
                  />
                  <span className="ml-2">
                    I accept the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>. <span className="text-red-500">*</span>
                  </span>
                </label>
                {formErrors.acceptTerms && (
                  <p className="text-red-500 text-sm mt-1">You must accept the terms and conditions</p>
                )}
              </div>

              {/* Gizli submit butonu - SummarySection'dan tetiklemek için */}
              <button 
                id="submitButton" 
                type="submit" 
                className="hidden"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Summary Section (Right Side) */}
        <div className="sm:w-3/4 md:w-3/12 lg:w-1/2 xl:w-3/12  sm:min-h-[715px] md:-h-[706px] lg:max-h-[700px] xl:max-h-[700px]">
            <SummarySection
            selectedInsurance={selectedInsurance}
            onContinueClick={handleContinueClick}
            extras={extrasTotal}
            nextRoute="/payment"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;