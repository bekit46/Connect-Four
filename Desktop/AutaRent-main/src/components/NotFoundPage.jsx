import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 md:p-10 text-center">
        {/* Logo */}
        <div className="mb-8">
          <h3 className="text-blue-600 text-2xl font-bold">AUTA Rent</h3>
        </div>
        
        {/* Error Icon */}
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-12 h-12 text-blue-600 fill-current" 
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
        </div>
        
        {/* Error Text */}
        <div className="mb-10">
          <h1 className="text-6xl md:text-7xl font-black text-blue-600 mb-4">404</h1>
          <div className="w-12 h-1 bg-blue-600 mx-auto mb-6 rounded"></div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 text-base md:text-lg max-w-lg mx-auto mb-8 leading-relaxed">
            We're sorry, but the page you are looking for doesn't exist or has been moved. 
            Please check the URL or navigate back to our homepage.
          </p>
        </div>
        
        {/* Return Button */}
        <a 
          href="/" 
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded text-base md:text-lg transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg"
        >
          Return to Homepage
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;