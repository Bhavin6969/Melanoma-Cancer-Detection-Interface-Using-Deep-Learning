import React from "react";
import { Link } from 'react-router-dom';
import skinAnalysis from "../../../assets/skin-analysis.jpeg";

const SkinAnalysisDetails = () => {
  return (
    <div>
      <section className="bg-cyan-900 text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center mr-20">
            <img
              src={skinAnalysis}
              alt="Skin analysis"
              className="w-full h-full rounded-[300px]"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-xl font-bold leadi">
              CLINICAL GRADE SKIN ANALYSIS
            </h1>
            <span className="text-violet-400 text-4xl font-bold">
              DERMATOLOGIST AI
            </span>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Our AI-powered skin analysis system helps medical professionals
              detect early signs of melanoma through high-resolution imaging and
              deep learning algorithms.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link to="/Technology Information">
                <button
                  rel="noopener noreferrer"
                  className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900"
                >
                  LEARN MORE ABOUT OUR TECHNOLOGY
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkinAnalysisDetails;
