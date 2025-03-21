import React, { useState, useRef } from 'react';
import { HiOutlineChevronDoubleDown } from "react-icons/hi2";
import { TbHexagonPlus } from "react-icons/tb";
import { CgCloseR } from "react-icons/cg";
import { MdCheckCircle } from "react-icons/md";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import Confetti from 'react-confetti';
import '../HeroContactUs.css';

function HeroContactUs() {
  const scrollToSection = useRef(null);
  const mapSection = useRef(null);
  let hoverTimeout;

  const handleScroll = () => {
    scrollToSection.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToMap = () => {
    mapSection.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const isFormValid = Object.values(formData).every((field) => field.trim() !== "") &&
    Object.keys(formErrors).length === 0;

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleMouseEnter = () => {
    hoverTimeout = setTimeout(() => {
      setIsHovered(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 8000);
    }, 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout);
    setIsHovered(false);
    setShowConfetti(false);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      if (!validateEmail(value)) {
        setFormErrors((prev) => ({ ...prev, email: "Please enter a valid email" }));
      } else {
        setFormErrors((prev) => { const { email, ...rest } = prev; return rest; });
      }
    } else if (value.trim() === "") {
      setFormErrors((prev) => ({ ...prev, [name]: `${name.replace(/^\w/, c => c.toUpperCase())} is required` }));
    } else {
      setFormErrors((prev) => { const { [name]: _, ...rest } = prev; return rest; });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setIsFormOpen(false);
      setIsMessageSent(true);
      setTimeout(() => setIsMessageSent(false), 3000);
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
      setFormErrors({});
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => alert('Copied to clipboard!'));
  };

  const ContactCard = ({ title, children, onClick }) => (
    <div
      className="text-center w-full max-w-xs px-6 py-4 bg-gradient-to-br from-white to-blue-50 text-black rounded-lg shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-800 hover:text-white contact-card flex flex-col justify-between"
      style={{ height: '250px' }} 
      onClick={onClick}
    >
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="text-lg flex-grow flex flex-col justify-center">
        {children}
      </div>
    </div>
  );

  const customIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41],
  });

  const branches = [
    { name: "Levent", position: [41.0775, 29.0138], address: "Levent, Büyükdere Cd. No:1, Istanbul" },
    { name: "Kadıköy", position: [40.9903, 29.0205], address: "Kadıköy, Bağdat Cd. No:25, Istanbul" },
    { name: "Eskişehir", position: [39.7667, 30.5256], address: "Eskişehir, İsmet İnönü Cd. No:7" },
    { name: "Kahramanmaraş", position: [37.5753, 36.9228], address: "K.Maraş, Trabzon Cd. No:10" },
  ];

  return (
    <div className="font-sans page-container">
      <div
        className="relative w-full h-[calc(100vh-80px)] bg-cover bg-center overflow-hidden hero-section"
        style={{ backgroundImage: "url('/contact_us.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-blue-900/40 flex flex-col justify-center pl-16">
          <h2 className="text-lg md:text-xl uppercase tracking-widest text-white text-left ml-16 slide-in-text animate-slide-in-delay-1">
            CONTACT US
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase mt-2 text-white text-left ml-16 slide-in-text animate-slide-in-delay-2">
            CUSTOMER CARE
          </h1>
        </div>
        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-10 group"
          onClick={handleScroll}
        >
          <HiOutlineChevronDoubleDown className="text-5xl text-white hover:text-blue-400 hover:scale-110 transition-transform duration-300" />
          <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Scroll Down
          </span>
        </div>
      </div>

      <div ref={scrollToSection} className="flex flex-col md:flex-row items-center mt-10 p-10 bg-gradient-to-b from-blue-50 to-white w-full relative contact-section">
        <div className="w-full md:w-2/5 p-8">
          <h2 className="text-3xl font-extrabold uppercase mb-0 text-blue-900">AUTA RENT</h2>
          <h2 className="text-3xl font-extrabold uppercase mb-4 text-blue-900">CUSTOMER CARE</h2>
          <p className="text-lg font-normal mb-6 text-gray-700">
            AUTA RENT is delighted to offer you exceptional support through our attentive and versatile multi-channel service, designed to meet your needs with utmost care and efficiency. Whether you have questions, require assistance, or simply wish to connect, you can easily send us a message or reach out to our dedicated Customer Contact Center using the comprehensive contact information provided below. Our team is committed to ensuring your experience with us is seamless, personalized, and tailored to your preferences, every step of the way.
          </p>
          <button
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 uppercase tracking-wider border-2 border-blue-600 hover:bg-blue-800 hover:text-white transition-all duration-300 rounded-lg"
            onClick={toggleForm}
          >
            <TbHexagonPlus className="text-2xl transition-colors duration-300" />
            Send a Message
          </button>
        </div>
        <div
          className="w-full md:w-3/5 h-[450px] md:h-[500px] relative group slide-card"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="absolute inset-0 bg-cover bg-center rounded-lg shadow-lg slide-card-image">
            <div
              className="absolute inset-0"
              style={{ backgroundImage: "url('/contact_us2.jpg')" }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 group-hover:bg-opacity-60"></div>
          </div>
          <div
            className={`slide-card-panel absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-800 to-blue-900 text-white flex flex-col items-center justify-center rounded-lg shadow-lg p-6 relative overflow-hidden transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
            } w-3/4 max-w-md`}
          >
            {showConfetti && (
              <Confetti
                width={600}
                height={500}
                numberOfPieces={100}
                recycle={false}
                run={true}
                style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
              />
            )}
            <h3 className="text-2xl font-bold mb-4 z-10">Special Offer</h3>
            <p className="text-lg text-center mb-4 z-10">
              Enjoy <span className="font-extrabold text-3xl">40% OFF</span> on your choice of stunning blue cars!
            </p>
            <p className="text-center font-extrabold text-5xl uppercase bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text drop-shadow-lg mb-4 z-10">
              BLUE40
            </p>
            <Link
              to="/campaign"
              className="inline-block bg-white text-blue-800 px-6 py-2 rounded-lg font-semibold uppercase tracking-wider hover:bg-blue-100 transition-all duration-300 z-10"
            >
              Discover More Deals
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 flex items-center justify-center z-50 ${isFormOpen ? "form-open" : "form-closed"}`}
      >
        <div className="bg-blue-900/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-lg form-container relative border border-blue-700/50">
          <button
            className="absolute top-4 right-4 text-white hover:text-blue-200 transition-all duration-300 z-10"
            onClick={toggleForm}
          >
            <CgCloseR className="text-3xl" />
          </button>
          <h3 className="text-3xl font-extrabold mb-6 text-white text-center tracking-wide">Get in Touch</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-medium mb-2 text-blue-100" htmlFor="firstName">
                First Name <span className="text-red-300">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full px-4 py-3 bg-white/90 text-gray-900 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 shadow-sm"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              {formErrors.firstName && <p className="text-red-300 text-sm mt-1">{formErrors.firstName}</p>}
            </div>
            <div>
              <label className="block text-lg font-medium mb-2 text-blue-100" htmlFor="lastName">
                Last Name <span className="text-red-300">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full px-4 py-3 bg-white/90 text-gray-900 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 shadow-sm"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              {formErrors.lastName && <p className="text-red-300 text-sm mt-1">{formErrors.lastName}</p>}
            </div>
            <div>
              <label className="block text-lg font-medium mb-2 text-blue-100" htmlFor="email">
                Email <span className="text-red-300">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-white/90 text-gray-900 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 shadow-sm"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {formErrors.email && <p className="text-red-300 text-sm mt-1">{formErrors.email}</p>}
            </div>
            <div>
              <label className="block text-lg font-medium mb-2 text-blue-100" htmlFor="message">
                Message <span className="text-red-300">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-3 bg-white/90 text-gray-900 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 shadow-sm"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              {formErrors.message && <p className="text-red-300 text-sm mt-1">{formErrors.message}</p>}
            </div>
            <button
              type="submit"
              className={`w-full py-3 bg-blue-700 text-white uppercase tracking-wider hover:bg-blue-800 transition-all duration-300 rounded-lg font-semibold shadow-md ${
                isFormValid ? "opacity-100" : "opacity-75 cursor-not-allowed"
              }`}
              disabled={!isFormValid}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {isMessageSent && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg flex items-center notification z-50">
          <MdCheckCircle className="text-2xl mr-2" />
          <p className="font-bold">Message sent successfully!</p>
        </div>
      )}

      <div className="flex flex-col bg-gradient-to-b from-white to-blue-50 py-16 mt-4 contact-section">
        <div className="flex flex-col md:flex-row justify-center items-center mx-10 gap-12">
          <ContactCard title="Phone">
            <p className="text-lg">TÜRKİYE</p>
            <p
              className="text-lg"
              onClick={() => copyToClipboard('+90 (0)212 123 45 67')}
              style={{ cursor: 'pointer' }}
            >
              Phone: +90 (539) 813 9646
            </p>
            <p className="text-lg">Monday - Sunday:</p>
            <p className="text-lg">06:00 AM - 11:30 PM (GMT+3)</p>
          </ContactCard>
          <ContactCard title="Email">
            <p
              className="text-lg"
              onClick={() => copyToClipboard('contact@autarent.com')}
              style={{ cursor: 'pointer' }}
            >
              contact@autarent.com
            </p>
          </ContactCard>
          <ContactCard title="Locations" onClick={handleScrollToMap}>
            {branches.map((branch, index) => (
              <p key={index} className="text-lg">{branch.address}</p>
            ))}
          </ContactCard>
        </div>
      </div>

      <div ref={mapSection} className="map-section">
        <h2 className="text-4xl font-extrabold uppercase text-center mb-12 text-blue-900 glamorous-text">
          <span className="branch-title">Our Branches</span>
        </h2>
        <div className="w-full h-[600px] mx-auto max-w-5xl shadow-2xl rounded-xl overflow-hidden border-2 border-[#2C40B9] glamorous-map-container">
          <MapContainer center={[41.0082, 28.9784]} zoom={6} style={{ height: "100%", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {branches.map((branch, index) => (
              <Marker key={index} position={branch.position} icon={customIcon}>
                <Popup>{branch.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default HeroContactUs;