import React, { useState } from 'react';
import { AlertCircle, CheckCircle, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CreditCardForm = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [flipped, setFlipped] = useState(false);

  // Format card number (spaces between every 4 digits) - only numbers allowed
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v; // Return cleaned value (numbers only)
    }
  };

  // Format expiry date (MM/YY) - only numbers allowed
  const formatExpiryDate = (value) => {
    // Remove all non-numeric characters
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    
    // Validate month (first digit can only be 0 or 1, second digit has restrictions if first is 1)
    if (v.length > 0) {
      let month = v.slice(0, 2);
      if (month.length === 1) {
        if (parseInt(month) > 1) month = '0' + month;
      } else if (month.length === 2) {
        if (parseInt(month) > 12) month = '12';
      }
      
      if (v.length >= 2) {
        return month + '/' + v.slice(2, 4);
      }
      
      return month;
    }
    
    return v;
  };

  // Format cardholder name - only letters allowed
  const formatCardholderName = (value) => {
    // Only allow letters, spaces, and some special characters like hyphens and apostrophes
    return value.replace(/[^A-Za-z\s\-'.]/g, '').toUpperCase();
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!cardNumber || cardNumber.replace(/\s+/g, '').length !== 16) {
      newErrors.cardNumber = 'Please enter a valid 16-digit card number';
    }
    
    if (!cardHolder) {
      newErrors.cardHolder = 'Please enter the cardholder name';
    }
    
    if (!expiryDate || expiryDate.length !== 5) {
      newErrors.expiryDate = 'Please enter a valid expiry date (MM/YY)';
    }
    
    if (!cvv || cvv.length !== 3) {
      newErrors.cvv = 'Please enter a valid 3-digit CVV';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setShowSuccess(true);
      
      // Close success message after 2.5 seconds and redirect to homepage
      setTimeout(() => {
        setShowSuccess(false);
        // Reset form
        setCardNumber('');
        setCardHolder('');
        setExpiryDate('');
        setCvv('');
        setFlipped(false);
        
        // Redirect to homepage
        navigate('/');
      }, 2300);
    }
  };

  // Flip card when focusing on CVV
  const handleCvvFocus = () => {
    setFlipped(true);
  };

  const handleCvvBlur = () => {
    setFlipped(false);
  };

  // Get card type based on first digit
  const getCardType = () => {
    if (!cardNumber) return '';
    const firstDigit = cardNumber.replace(/\s+/g, '')[0];
    
    if (firstDigit === '4') return 'visa';
    if (firstDigit === '5') return 'mastercard';
    if (firstDigit === '3') return 'amex';
    if (firstDigit === '6') return 'discover';
    return 'generic';
  };

  const cardType = getCardType();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 my-16">
      {/* Credit Card Visual Display */}
      <div className="mb-6 w-full max-w-md perspective-1000">
        <div className={`relative w-full h-56 transition-transform duration-500 transform-style-preserve-3d ${flipped ? 'rotate-y-180' : ''}`}>
          {/* Front of Card */}
          <div className={`absolute w-full h-full backface-hidden rounded-xl shadow-lg overflow-hidden ${flipped ? 'invisible' : 'visible'}`}>
            <div className={`w-full h-full p-6 flex flex-col justify-between ${
              cardType === 'visa' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
              cardType === 'mastercard' ? 'bg-gradient-to-r from-red-500 to-yellow-500' :
              cardType === 'amex' ? 'bg-gradient-to-r from-blue-400 to-blue-500' :
              cardType === 'discover' ? 'bg-gradient-to-r from-orange-400 to-red-500' :
              'bg-gradient-to-r from-royalblue to-gray-800'
            }`}>
              {/* Card Logo */}
              <div className="flex justify-between">
                <div className="h-10 w-14 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                  <CreditCard className="text-white" size={20} />
                </div>
                {cardType && (
                  <div className="text-white font-bold text-right">
                    {cardType.toUpperCase()}
                  </div>
                )}
              </div>
              
              {/* Card Number */}
              <div className="text-white text-xl font-mono tracking-wider">
                {cardNumber || '•••• •••• •••• ••••'}
              </div>
              
              {/* Cardholder & Expiry */}
              <div className="flex justify-between text-white">
                <div className="w-2/3">
                  <div className="text-xs opacity-80 mb-1">Cardholder Name</div>
                  <div className="font-mono tracking-wider truncate">{cardHolder || 'YOUR NAME'}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs opacity-80 mb-1">Expires</div>
                  <div className="font-mono tracking-wider">{expiryDate || 'MM/YY'}</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Back of Card */}
          <div className={`absolute w-full h-full backface-hidden rounded-xl shadow-lg overflow-hidden rotate-y-180 ${flipped ? 'visible' : 'invisible'}`}>
            <div className={`w-full h-full flex flex-col ${
              cardType === 'visa' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
              cardType === 'mastercard' ? 'bg-gradient-to-r from-red-500 to-yellow-500' :
              cardType === 'amex' ? 'bg-gradient-to-r from-blue-400 to-blue-500' :
              cardType === 'discover' ? 'bg-gradient-to-r from-orange-400 to-red-500' :
              'bg-gradient-to-r from-gray-800 to-royalblue'
            }`}>
              <div className="h-12 bg-black mt-6"></div>
              <div className="px-6 py-4 flex flex-col justify-center h-full">
                <div className="bg-gray-200 h-10 flex items-center px-3 w-full">
                  <div className="ml-auto font-mono tracking-wider text-gray-800">
                    {cvv || 'CVV'}
                  </div>
                </div>
                {cardType && (
                  <div className="mt-auto mb-4 text-white text-right font-bold">
                    {cardType.toUpperCase()}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-xl shadow-custom w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Credit Card Information</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
              Card Number
            </label>
            <input
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.cardNumber ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
              id="cardNumber"
              type="text"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
              onKeyPress={(e) => {
                if (!/[0-9]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
              maxLength={19}
            />
            {errors.cardNumber && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" /> {errors.cardNumber}
              </p>
            )}
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardHolder">
              Cardholder Name
            </label>
            <input
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.cardHolder ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
              id="cardHolder"
              type="text"
              placeholder="FULL NAME"
              value={cardHolder}
              onChange={(e) => setCardHolder(formatCardholderName(e.target.value))}
              onKeyPress={(e) => {
                if (!/[A-Za-z\s\-'.]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
            />
            {errors.cardHolder && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" /> {errors.cardHolder}
              </p>
            )}
          </div>
          
          <div className="flex space-x-4 mb-6">
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryDate">
                Expiry Date
              </label>
              <input
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.expiryDate ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                id="expiryDate"
                type="text"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                maxLength={5}
              />
              {errors.expiryDate && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" /> {errors.expiryDate}
                </p>
              )}
            </div>
            
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
                CVV
              </label>
              <input
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.cvv ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                id="cvv"
                type="text"
                placeholder="123"
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/[^0-9]/g, ''))}
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                maxLength={3}
                onFocus={handleCvvFocus}
                onBlur={handleCvvBlur}
              />
              {errors.cvv && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" /> {errors.cvv}
                </p>
              )}
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-royalblue hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-[9px] focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            Confirm Payment
          </button>
        </form>
      </div>

      {/* Success payment pop-up */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-green-100 border-l-4 border-buttonGreen text-green-700 p-6 rounded-xl shadow-lg max-w-md flex items-start">
            <CheckCircle className="w-8 h-8 mr-4 text-buttonGreen flex-shrink-0" />
            <div>
              <p className="font-bold mb-1">Payment successful!</p>
              <p>Information is sent to your e-mail and phone.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreditCardForm;