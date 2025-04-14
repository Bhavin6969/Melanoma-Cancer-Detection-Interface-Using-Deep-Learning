import React from "react";
import Banner from "./Banner/Banner";
import MelanomaDetails from "./MelanomaDetails/MelanomaDetails";
import Footer from "../Shared/Footer/Footer";
import MelanomaFeatures from "./MelanomaFeatures/MelanomaFeatures";
import SkinAnalysisDetails from "./SkinAnalysisDetails/SkinAnalysisDetails";

const Home = () => {
  return (
    <div className="bg-white">
      <Banner />
      <MelanomaDetails />
      <MelanomaFeatures />
      <SkinAnalysisDetails />
      <Footer />
    </div>
  );
};

export default Home;