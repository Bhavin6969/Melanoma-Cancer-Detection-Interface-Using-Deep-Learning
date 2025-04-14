import React from 'react';
import { GrNext } from 'react-icons/gr';
import {
  FiShield,   // For prevention strategies
  FiHeart,    // For cure options
  FiTool,     // For additional treatment details
} from 'react-icons/fi';
// import feature from "../../../assets/melanoma-prevention.jpg"; // Uncomment if you have a feature image

const MelanomaPrevention = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section - Centered */}
      <div className="bg-[#F4F4FF] text-white py-16">
        <div className="container mx-auto px-4 text-center text-[#0B0757]">
          <h1 className="text-4xl font-bold mb-4">
            Prevention and Cure
          </h1>
          <div className="flex justify-center items-center">
            <span>Home</span>
            <span className="mx-2">
              <GrNext />
            </span>
            <span>Features</span>
            <span className="mx-2">
              <GrNext />
            </span>
            <span>Prevention and Cure</span>
          </div>
        </div>
      </div>

      {/* Main Content - Left Aligned */}
      <div className="container mx-auto px-4 py-10 text-left">
        {/* Optional Feature Image */}
        <div className="w-full mx-auto mb-10">
        </div>

        <div className="w-full mx-auto font-mono">
          {/* Prevention Strategies Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center mb-4">
              <FiShield className="text-blue-600 text-2xl mr-4" />
              <h2 className="text-2xl font-bold text-[#0B0757]">
                Effective Prevention Strategies
              </h2>
            </div>
            <p className="text-md mt-3 leading-7 text-gray-600">
              Preventing melanoma begins with protecting your skin and adopting a healthy lifestyle. Key strategies include:
              <ul className="list-disc pl-8 mt-4">
                <li>
                  <strong>Sun Protection:</strong> Always use broad-spectrum sunscreen with an SPF of 30 or higher, wear protective clothing, and seek shade during peak sunlight hours.
                </li>
                <li>
                  <strong>Regular Skin Examinations:</strong> Perform monthly self-exams to detect any new or changing moles. Professional screenings are essential, especially if you have a family history of skin cancer.
                </li>
                <li>
                  <strong>Healthy Lifestyle:</strong> Maintain a balanced diet rich in antioxidants, stay hydrated, and avoid tanning beds.
                </li>
                <li>
                  <strong>Avoid Excessive Sun Exposure:</strong> Limit time in the sun and wear a wide-brimmed hat when outdoors.
                </li>
              </ul>
            </p>
          </div>

          {/* Cure Options Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center mb-4">
              <FiHeart className="text-red-600 text-2xl mr-4" />
              <h2 className="text-2xl font-bold text-[#0B0757]">
                Available Cure Options
              </h2>
            </div>
            <p className="text-md mt-3 leading-7 text-gray-600">
              Early detection is crucial for successful treatment. Depending on the stage of melanoma, available cure options include:
              <ul className="list-disc pl-8 mt-4">
                <li>
                  <strong>Surgical Removal:</strong> Excision of the tumor is the most common treatment for early-stage melanoma.
                </li>
                <li>
                  <strong>Radiation Therapy:</strong> Used to target and destroy cancer cells in cases where surgery isn’t viable.
                </li>
                <li>
                  <strong>Immunotherapy:</strong> Boosts the body’s immune system to help fight cancer cells, especially in advanced cases.
                </li>
                <li>
                  <strong>Targeted Drug Treatments:</strong> Focus on specific genetic mutations in cancer cells, offering a more personalized treatment approach.
                </li>
              </ul>
            </p>
          </div>

          {/* Additional Treatment Details Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 ">
            <div className="flex items-center mb-4">
              <FiTool className="text-green-600 text-2xl mr-4" />
              <h2 className="text-2xl font-bold text-[#0B0757]">
                Additional Treatment Information
              </h2>
            </div>
            <p className="text-md mt-3 leading-7 text-gray-600">
              Alongside direct treatment, patients benefit from comprehensive care plans that include:
              <ul className="list-disc pl-8 mt-4">
                <li>
                  <strong>Regular Follow-ups:</strong> Continuous monitoring for recurrence and management of side effects.
                </li>
                <li>
                  <strong>Supportive Care:</strong> Access to counseling, nutrition advice, and rehabilitation services to improve quality of life.
                </li>
                <li>
                  <strong>Clinical Trials:</strong> Participation in cutting-edge research studies that may offer access to new treatments.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MelanomaPrevention;
