import React from "react";
import { GrNext } from "react-icons/gr";
import {
  FiSettings,
  FiPackage,
  FiLayout,
  FiDatabase,
  FiShare2,
  FiBell,
  FiTool,
  FiCode,
  FiServer,
} from "react-icons/fi";

const TechnologyInfo = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section - Centered */}
      <div className="bg-[#F4F4FF] text-white py-16">
        <div className="container mx-auto px-4 text-center text-[#0B0757]">
          <h1 className="text-4xl font-bold mb-4">
            Learn More About Our Technology
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
            <span>Our Technology</span>
          </div>
        </div>
      </div>

      {/* Main Content - Left Aligned */}
      <div className="container mx-auto px-4 py-10 text-left">
        {/* Frontend Framework Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <FiLayout className="text-blue-600 text-2xl mr-4" />
            <h2 className="text-2xl font-bold text-gray-800">
              Frontend Framework
            </h2>
          </div>
          <p className="text-gray-600">
            We utilize React for building our responsive and interactive user
            interface. React allows us to create reusable components and manage
            complex state efficiently, ensuring a smooth user experience.
          </p>
        </div>

        {/* Styling Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <FiSettings className="text-purple-600 text-2xl mr-4" />
            <h2 className="text-2xl font-bold text-gray-800">Styling</h2>
          </div>
          <p className="text-gray-600">
            Our application is styled using Tailwind CSS, a utility-first CSS
            framework that provides fine-grained utility classes for rapid UI
            development. We've enhanced our styling capabilities with DaisyUI, a
            component library built for Tailwind CSS that offers ready-to-use
            components.
          </p>
        </div>

        {/* Machine Learning Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <FiPackage className="text-green-600 text-2xl mr-4" />
            <h2 className="text-2xl font-bold text-gray-800">
              Machine Learning
            </h2>
          </div>
          <p className="text-gray-600">
            Our machine learning capabilities are powered by ml5.js, a
            JavaScript library that makes machine learning accessible in the
            browser. This allows us to perform advanced analyses and predictions
            directly on the client side.
          </p>
        </div>

        {/* Backend Services Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <FiServer className="text-red-600 text-2xl mr-4" />
            <h2 className="text-2xl font-bold text-gray-800">
              Backend Services
            </h2>
          </div>
          <p className="text-gray-600">
            We leverage Firebase for our backend services, including
            authentication, real-time database, and hosting. Firebase provides a
            scalable and reliable infrastructure that integrates seamlessly with
            our React application.
          </p>
        </div>

        {/* Routing Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <FiShare2 className="text-orange-600 text-2xl mr-4" />
            <h2 className="text-2xl font-bold text-gray-800">Routing</h2>
          </div>
          <p className="text-gray-600">
            react-router-dom handles the routing in our application, allowing us
            to create a seamless navigation experience with multiple pages and
            components.
          </p>
        </div>

        {/* Icons and Notifications Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <FiBell className="text-yellow-600 text-2xl mr-4" />
            <h2 className="text-2xl font-bold text-gray-800">
              Icons and Notifications
            </h2>
          </div>
          <p className="text-gray-600">
            We use react-icons for scalable vector icons throughout our
            application, ensuring consistent and high-quality visual elements.
            For notifications, we implement react-toastify to display
            non-intrusive toast messages that enhance user feedback.
          </p>
        </div>

        {/* Utility Libraries Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <FiTool className="text-pink-600 text-2xl mr-4" />
            <h2 className="text-2xl font-bold text-gray-800">
              Utility Libraries
            </h2>
          </div>
          <p className="text-gray-600">
            To handle intervals in React, we use @use-it/interval. For testing,
            we utilize React Testing Library integrated via react-scripts test.
            We monitor performance with web-vitals to ensure optimal user
            experience.
          </p>
        </div>

        {/* Build Tools and PWA Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <FiCode className="text-teal-600 text-2xl mr-4" />
            <h2 className="text-2xl font-bold text-gray-800">
              Build Tools and PWA
            </h2>
          </div>
          <p className="text-gray-600">
            Our build process is managed by react-scripts, customized with CRACO
            for configuration adjustments. We've implemented Progressive Web App
            (PWA) functionality using manifest.json and service workers,
            allowing our application to work offline and be installed on users'
            devices.
          </p>
        </div>

        {/* Machine Learning Model Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <FiDatabase className="text-indigo-600 text-2xl mr-4" />
            <h2 className="text-2xl font-bold text-gray-800">
              Machine Learning Model
            </h2>
          </div>
          <p className="text-gray-600">
            Our melanoma detection system utilizes an advanced deep learning
            model based on EfficientNetB3 architecture. This model has been
            specifically trained for high-accuracy skin lesion classification
            using data augmentation techniques including rotation, shear, and
            zoom.
          </p>
        </div>

        {/* Training Details Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <FiSettings className="text-blue-600 text-2xl mr-4" />
            <h2 className="text-2xl font-bold text-gray-800">
              Training Details
            </h2>
          </div>
          <p className="text-gray-600">
            We implemented mixed precision training to achieve faster inference
            times while maintaining high accuracy. Through rigorous training and
            validation, our model has achieved 98% training accuracy and 93%
            validation accuracy.
          </p>
        </div>

        {/* UI Integration Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <FiLayout className="text-green-600 text-2xl mr-4" />
            <h2 className="text-2xl font-bold text-gray-800">UI Integration</h2>
          </div>
          <p className="text-gray-600">
            The model is integrated with our React-based user interface,
            allowing for real-time analysis of skin images captured through the
            camera feed. The results are displayed in an intuitive dashboard
            that shows prediction confidence and relevant lesion details.
          </p>
        </div>

        {/* Future Improvements Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <FiTool className="text-orange-600 text-2xl mr-4" />
            <h2 className="text-2xl font-bold text-gray-800">
              Future Improvements
            </h2>
          </div>
          <p className="text-gray-600">
            We are continuously working to enhance our technology:
          </p>
          <ul className="list-disc pl-8 mt-4 text-gray-600">
            <li>
              Expanding our training dataset to over 10,000 images for better
              generalization.
            </li>
            <li>Integrating additional image preprocessing techniques.</li>
            <li>Optimizing the model for faster real-time analysis.</li>
            <li>
              Adding multi-language support and accessibility features.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechnologyInfo;
