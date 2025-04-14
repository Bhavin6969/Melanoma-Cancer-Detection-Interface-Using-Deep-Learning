import React from "react";
import { Link } from 'react-router-dom';
import { GrNext } from "react-icons/gr";
import {
  FiLayout,
  FiSettings,
  FiPackage,
  FiServer,
  FiShare2,
  FiBell,
  FiTool,
  FiCode,
  FiDatabase,
} from "react-icons/fi";
import melanomaImage from "../../../assets/melanoma-information.png";

const MelanomaInfo = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section - Centered */}
      <div className="bg-[#F4F4FF] text-white py-16">
        <div className="container mx-auto px-4 text-center text-[#0B0757]">
          <h1 className="text-4xl font-bold mb-4">Learn About Melanoma</h1>
          <div className="flex justify-center items-center">
            <span>Home</span>
            <span className="mx-2">
              <GrNext />
            </span>
            <span>Features</span>
            <span className="mx-2">
              <GrNext />
            </span>
            <span>Melanoma Information</span>
          </div>
        </div>
      </div>

      {/* Main Content - Left Aligned */}
      <div className="container mx-auto px-4 py-10 text-left">
        {/* Image Section */}
       

        {/* Overview Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <FiLayout className="text-blue-600 text-2xl mr-4" />
            <h2 className="text-2xl font-bold text-[#0B0757]">What is Melanoma?</h2>
          </div>
          <p className="text-gray-600 text-md leading-7">
            Melanoma is a type of skin cancer that develops from pigment-producing cells called melanocytes. Although it is less common than other skin cancers, melanoma is more dangerous because it is more likely to spread to other parts of the body if not detected early.
          </p>
        </div>

        {/* Risk Factors Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <FiSettings className="text-purple-600 text-2xl mr-4" />
            <h2 className="text-2xl font-bold text-[#0B0757]">Risk Factors</h2>
          </div>
          <p className="text-gray-600 text-md leading-7 mb-4">
            Several factors may increase your risk of developing melanoma:
          </p>
          <ul className="list-disc pl-8 text-gray-600">
            <li>Fair skin</li>
            <li>History of sunburn</li>
            <li>Excessive sun exposure</li>
            <li>Family history of melanoma</li>
            <li>Many moles or atypical moles</li>
            <li>Weakened immune system</li>
          </ul>
        </div>

        {/* Detection and Prevention Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <FiPackage className="text-green-600 text-2xl mr-4" />
            <h2 className="text-2xl font-bold text-[#0B0757]">Detection & Prevention</h2>
          </div>
          <p className="text-gray-600 text-md leading-7">
            Early detection is crucial. Regular skin checks and awareness of any changes in moles or skin appearance can help save lives. Preventative measures include avoiding excessive sun exposure and using sun protection.
          </p>
        </div>

        {/* Our Technology Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <FiServer className="text-red-600 text-2xl mr-4" />
            <h2 className="text-2xl font-bold text-[#0B0757]">Our Technology</h2>
          </div>
          <p className="text-gray-600 text-md leading-7">
            Our advanced AI-powered melanoma detection system helps healthcare professionals identify potential melanoma cases quickly and accurately. The system uses deep learning algorithms trained on medical data for high-accuracy detection.
          </p>
        </div>

        {/* How It Works Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <FiShare2 className="text-orange-600 text-2xl mr-4" />
            <h2 className="text-2xl font-bold text-[#0B0757]">How It Works</h2>
          </div>
          <p className="text-gray-600 text-md leading-7">
            The system analyzes skin images to detect early signs of melanoma. It provides comprehensive analysis of skin lesions and moles, which assists medical professionals in making informed decisions.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <FiBell className="text-yellow-600 text-2xl mr-4" />
            <h2 className="text-2xl font-bold text-[#0B0757]">Benefits</h2>
          </div>
          <p className="text-gray-600 text-md leading-7 mb-4">
            The benefits of our melanoma detection system include:
          </p>
          <ul className="list-disc pl-8 text-gray-600">
            <li>Early detection of potential melanoma</li>
            <li>High accuracy detection with sensitivity to subtle skin changes</li>
            <li>Comprehensive analysis of skin lesions and moles</li>
            <li>Integration with medical records for longitudinal patient care</li>
            <li>FDA-approved technology for clinical use</li>
          </ul>
        </div>

        {/* Get Started Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <FiTool className="text-pink-600 text-2xl mr-4" />
            <h2 className="text-2xl font-bold text-[#0B0757]">Get Started</h2>
          </div>
          <p className="text-gray-600 text-md leading-7 mb-4">
            Learn more about how our melanoma detection technology can help you and your patients.
          </p>
          <Link to="/Technology Information">
          <button  rel="noopener noreferrer" className="flex justify-start btn bg-blue-700 text-white my-6 border-none">
            Learn More About Our Technology
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MelanomaInfo;
