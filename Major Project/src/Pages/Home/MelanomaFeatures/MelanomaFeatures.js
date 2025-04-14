import React from "react";
import { BsGlobe2 } from "react-icons/bs";
import { GoRocket } from "react-icons/go";
import { GoPeople } from "react-icons/go";
import { FaCloudMeatball } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa";

const MelanomaFeatures = () => {
  return (
    <div>
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
              <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

              <div className=" sm:gap-4 ">
                <div className="  bg-yellow-500  rounded-full  mx-auto w-24 h-24 ">
                  <div className="items-center  justify-items-center p-6">
                    <BsGlobe2 size={48} className=" mx-auto text-gray-100" />{" "}
                  </div>
                </div>
              </div>
              <h3 className="text-lg mt-2 font-bold text-gray-900 sm:text-xl">
                Global Skin Analysis
              </h3>

              <div className="mt-4">
                <p className="max-w-[40ch] text-sm text-gray-500">
                  Analyze skin images from patients worldwide with our advanced 
                  melanoma detection technology.
                </p>
              </div>
            </div>

            <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
              <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

              <div className=" sm:gap-4 ">
                <div className="   bg-emerald-500  rounded-full  mx-auto w-24 h-24 ">
                  <div className="items-center  justify-items-center p-6">
                    <GoRocket size={48} className=" mx-auto text-gray-100" />{" "}
                  </div>
                </div>
              </div>
              <h3 className="text-lg mt-2 font-bold text-gray-900 sm:text-xl">
                Fast Detection
              </h3>

              <div className="mt-4">
                <p className="max-w-[40ch] text-sm text-gray-500">
                  Get quick and accurate results with our AI-powered melanoma 
                  detection system that provides immediate feedback.
                </p>
              </div>
            </div>

            <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
              <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

              <div className=" sm:gap-4 ">
                <div className="  bg-sky-600  rounded-full  mx-auto w-24 h-24 ">
                  <div className="items-center  justify-items-center p-6">
                    <GoPeople size={48} className=" mx-auto text-gray-100" />{" "}
                  </div>
                </div>
              </div>
              <h3 className="text-lg mt-2 font-bold text-gray-900 sm:text-xl">
                Medical Grade Accuracy
              </h3>

              <div className="mt-4">
                <p className="max-w-[40ch] text-sm text-gray-500">
                  Our system uses deep learning models trained on medical data 
                  to provide highly accurate detection of potential melanoma.
                </p>
              </div>
            </div>

            <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
              <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

              <div className=" sm:gap-4 ">
                <div className="  bg-sky-600  rounded-full  mx-auto w-24 h-24 ">
                  <div className="items-center  justify-items-center p-6">
                    <FaCloudMeatball
                      size={48}
                      className=" mx-auto text-gray-100"
                    />{" "}
                  </div>
                </div>
              </div>
              <h3 className="text-lg mt-2 font-bold text-gray-900 sm:text-xl">
                Cloud Integration
              </h3>

              <div className="mt-4">
                <p className="max-w-[40ch] text-sm text-gray-500">
                  Seamlessly integrate with your existing healthcare systems 
                  and cloud storage solutions for easy workflow integration.
                </p>
              </div>
            </div>

            <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
              <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

              <div className=" sm:gap-4 ">
                <div className="  bg-yellow-500  rounded-full  mx-auto w-24 h-24 ">
                  <div className="items-center  justify-items-center p-6">
                    <BsFillShieldLockFill
                      size={48}
                      className=" mx-auto text-gray-100"
                    />{" "}
                  </div>
                </div>
              </div>
              <h3 className="text-lg mt-2 font-bold text-gray-900 sm:text-xl">
                Secure Patient Data
              </h3>

              <div className="mt-4">
                <p className="max-w-[40ch] text-sm text-gray-500">
                  All patient data is encrypted and stored securely, complying 
                  with medical data protection standards.
                </p>
              </div>
            </div>

            <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
              <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

              <div className=" sm:gap-4 ">
                <div className="  bg-emerald-500 rounded-full  mx-auto w-24 h-24 ">
                  <div className="items-center  justify-items-center p-6">
                    <FaCode size={48} className=" mx-auto text-gray-100" />{" "}
                  </div>
                </div>
              </div>
              <h3 className="text-lg mt-2 font-bold text-gray-900 sm:text-xl">
                Easy Integration
              </h3>

              <div className="mt-4">
                <p className="max-w-[40ch] text-sm text-gray-500">
                  Deploy our melanoma detection solution into any existing 
                  healthcare system with minimal integration time.
                </p>
              </div>
            </div>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MelanomaFeatures;