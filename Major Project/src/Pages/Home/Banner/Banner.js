import React from "react";
import { Link } from 'react-router-dom';
import videoBanner from "../../../assets/verifyVideoBanner.mp4";

const Banner = () => {
  return (
    <div>
      <div className="relative -mt-1">
        <video
          className="h-full w-full opacity-100"
          src={videoBanner}
          autoPlay
          loop
          muted
        />
        <div className="absolute top-52 text-white left-16 text-start w-1/2">
          <h1 className="text-4xl font-bold">MELANOMA DETECTION SYSTEM</h1>
          <p className="text-lg">
            Early detection saves lives. Our advanced AI technology helps
            healthcare professionals identify potential melanoma cases quickly
            and accurately.
          </p>
          <Link to="/Melanoma Scanner">
            <button
              type="button"
              className="text-white mt-3 bg-[#FF6B6B] hover:bg-[#FF6B6B]/80 focus:ring-4 focus:ring-[#FF6B6B]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF6B6B]/80 dark:focus:ring-[#FF6B6B]/40 mr-2 mb-2"
            >
              START SCREENING
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
