import React from "react";
import { motion } from "framer-motion";

function FAQPage() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // FAQ categories and questions
  const faqCategories = [
    {
      category: "Emergency Situations",
      questions: [
        {
          question: "What should I do if I lose the car keys?",
          answer: "Contact our emergency hotline immediately at +90 539 813 9646. We'll arrange for a replacement key to be delivered to your location. Please note that key replacement may incur additional charges depending on your insurance coverage."
        },
        {
          question: "What should I do in case of an accident?",
          answer: "First, ensure everyone's safety and call emergency services if needed. Then, document the accident by taking photos and collecting information from all parties involved. Contact our emergency support at +90 539 813 9646 within 24 hours. Never admit fault or sign any documents without consulting us first."
        },
        {
          question: "How do I report a stolen vehicle?",
          answer: "If your rental car is stolen, report it to the local police immediately and obtain a police report. Then contact our emergency line at +90 539 813 9646 as soon as possible. We'll guide you through the next steps and work with the authorities to recover the vehicle."
        }
      ]
    },
    {
      category: "Vehicle Issues",
      questions: [
        {
          question: "What if the car gets damaged during my rental period?",
          answer: "Document the damage with photos and report it to us as soon as possible by calling +90 539 813 9646. Depending on your insurance coverage and the damage circumstances, you may or may not be responsible for repair costs. Our team will guide you through the process."
        },
        {
          question: "How should I handle fuel issues or running out of gas?",
          answer: "If you're experiencing fuel-related issues with the vehicle, contact our support team. If you simply run out of fuel, fill the tank with the correct fuel type specified in the manual. Remember that vehicles should be returned with the same fuel level as when rented. Using incorrect fuel types may result in repair charges."
        },
        {
          question: "What if the car breaks down during my rental period?",
          answer: "Contact our 24/7 roadside assistance at +90 539 813 9646 immediately. We'll arrange for repairs or a replacement vehicle. Do not attempt to repair the vehicle yourself or hire third-party services as this may void insurance coverage."
        }
      ]
    },
    {
      category: "Insurance & Coverage",
      questions: [
        {
          question: "What does my rental insurance cover?",
          answer: "Our standard insurance covers collision damage, theft protection, and third-party liability. However, certain damages like tire punctures, windshield cracks, and interior damage may not be fully covered. Optional premium coverage is available for comprehensive protection. Review your rental agreement for specific details."
        },
        {
          question: "How do I make an insurance claim?",
          answer: "Contact our customer service to initiate the claim process. You'll need to provide the incident report, police report (if applicable), and any documentation of damages. Our insurance team will guide you through the entire process and provide all necessary claim forms."
        },
        {
          question: "Can I purchase additional insurance coverage?",
          answer: "Yes, we offer several additional insurance options including Zero Deductible Coverage, Personal Effects Coverage, and Roadside Assistance Plus. These can be added during the booking process or at the rental counter before picking up your vehicle."
        }
      ]
    },
    {
      category: "Payments & Billing",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept major credit cards (Visa, Mastercard, American Express), debit cards with the Visa or Mastercard logo, Apple Pay, Google Pay, and bank transfers for advance bookings. Cash payments are only accepted at select locations. All payment methods require valid identification."
        },
        {
          question: "When is my credit card charged?",
          answer: "We place a hold on your card for the estimated rental amount plus a security deposit when you pick up the vehicle. The final charge is processed when you return the vehicle. The security deposit is released after confirming no additional charges are needed."
        },
        {
          question: "How can I get a receipt for my rental?",
          answer: "A digital receipt is automatically emailed to the address provided during booking after your rental is completed. If you need an additional copy or a paper receipt, please contact our customer service or request one at the rental desk upon vehicle return."
        }
      ]
    },
    {
      category: "Rental Policies",
      questions: [
        {
          question: "How do I extend my rental period?",
          answer: "Contact our customer service at least 24 hours before your scheduled return to request an extension. Extensions are subject to vehicle availability and may result in rate changes. Unauthorized extensions may result in additional fees or be considered a breach of the rental agreement."
        },
        {
          question: "Can someone else drive the rental car?",
          answer: "Additional drivers must be registered and approved before they drive the rental vehicle. Each additional driver needs to meet our age and license requirements and may incur an additional fee. Unregistered drivers are not covered by insurance."
        },
        {
          question: "What is your cancellation policy?",
          answer: "Cancellations made more than 48 hours before pickup receive a full refund. Cancellations within 24-48 hours incur a one-day rental fee. Cancellations less than 24 hours before pickup or no-shows may be charged the full reservation amount. Special rates and promotions may have different cancellation terms."
        }
      ]
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#1c2127] to-[#2a3444] text-white">
      {/* Hero Section */}
      <div className="relative py-24 px-6">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/faq_bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c2127]/90 to-[#1c2127]/80"></div>
        </div>

        {/* Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative max-w-4xl mx-auto text-center"
        >
          <div className="inline-block p-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg mb-6">
            <div className="bg-[#1c2127] px-6 py-2 rounded-md">
              <span className="text-sm font-medium uppercase tracking-widest text-blue-400">
                We're Here to Help
              </span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest leading-tight mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
            AUTA Rent - Quick Answers to Your Questions
          </p>
          
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-8"></div>
        </motion.div>
      </div>

      {/* FAQ Content */}
      <div className="bg-white text-gray-800 py-16 px-6 rounded-t-3xl -mt-6">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >

          {/* Categories */}
          <motion.div 
            variants={fadeIn} 
            className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {faqCategories.map((category, index) => (
              <a 
                key={index} 
                href={`#category-${index + 1}`}
                className="bg-gray-50 hover:bg-blue-50 rounded-xl p-6 text-center transition-colors duration-300 shadow-sm border border-gray-100 hover:border-blue-200"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-[#2a3444]">{category.category}</h3>
                <p className="text-sm text-gray-500 mt-2">{category.questions.length} questions</p>
              </a>
            ))}
          </motion.div>

          {/* FAQ Sections */}
          <div className="space-y-16">
            {faqCategories.map((category, catIndex) => (
              <motion.div 
                key={catIndex}
                id={`category-${catIndex + 1}`}
                variants={fadeIn}
                className="scroll-mt-20"
              >
                <h2 className="text-2xl font-bold mb-6 text-[#2a3444] border-b border-gray-200 pb-2">
                  {category.category}
                </h2>
                
                <div className="space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <FAQItem 
                      key={faqIndex} 
                      question={faq.question} 
                      answer={faq.answer}
                      index={`${catIndex + 1}.${faqIndex + 1}`} 
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Last Updated */}
          <motion.div variants={fadeIn} className="mt-12 text-center text-gray-500 text-sm">
            <p>Last Updated: February 28, 2025</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors duration-300"
      >
        <div className="flex items-start">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-white font-medium mr-3 text-sm">
            {index}
          </div>
          <h3 className="text-lg font-semibold text-[#2a3444]">{question}</h3>
        </div>
        <span>
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </span>
      </button>
      
      {isOpen && (
        <div className="px-6 pb-4 pt-2 bg-gray-50">
          <p className="text-gray-700 leading-relaxed pl-11">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FAQPage;