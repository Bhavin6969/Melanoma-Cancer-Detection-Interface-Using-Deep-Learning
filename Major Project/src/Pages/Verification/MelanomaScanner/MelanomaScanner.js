import React, { useEffect, useRef, useState } from "react";
import ml5 from "ml5";
import useInterval from "@use-it/interval";
import { GrNext } from "react-icons/gr";

let classifier;
const CONFIDENCE_THRESHOLD = 0.7; // Adjust this value as needed

const MelanomaScanner = () => {
  const videoRef = useRef();
  const [result, setResult] = useState([]);
  const [imageSrc, setImageSrc] = useState(null);
  const [isImage, setIsImage] = useState(false);
  const imageRef = useRef();
  const streamRef = useRef(null);

  // Model initialization and video setup
  useEffect(() => {
    if (!isImage) {
      // Only initialize video when in camera mode
      classifier = ml5.imageClassifier("efficientb3/model.json", () => {
        console.log("Model loaded successfully");
        console.log("Classifier:", classifier);
        console.log("Underlying model:", classifier.model);
        navigator.mediaDevices
          .getUserMedia({ video: true, audio: false })
          .then((stream) => {
            streamRef.current = stream; // Store the stream reference
            if (videoRef.current) {
              videoRef.current.srcObject = stream;
              console.log("Video stream started");
            }
          })
          .catch((err) => {
            console.error("Error accessing camera:", err);
          });
      });

      // Cleanup function for video mode
      return () => {
        if (streamRef.current) {
          streamRef.current.getTracks().forEach((track) => track.stop());
          streamRef.current = null;
        }
      };
    }
  }, [isImage]);

  // Video classification loop
  useInterval(() => {
    const classifyVideoFrame = async () => {
      try {
        if (classifier && videoRef.current && videoRef.current.readyState >= 2) {
          const results = await classifier.classify(videoRef.current);
          console.log("Video classification raw results:", results);
          updateClassification(results);
        } else {
          console.log("Video not ready yet.");
        }
      } catch (error) {
        console.error("Classification error:", error);
      }
    };

    if (!isImage) classifyVideoFrame();
}, 500);


  // Image classification handler
  useEffect(() => {
    const classifyImage = async () => {
      try {
        const results = await classifier.classify(imageRef.current);
        console.log("Image classification raw results:", results);
        updateClassification(results);
      } catch (error) {
        console.error("Image classification error:", error);
      }
    };

    if (isImage && imageSrc && imageRef.current) {
      if (imageRef.current.complete) {
        classifyImage();
      } else {
        imageRef.current.onload = classifyImage;
      }
    }
  }, [isImage, imageSrc]);

  // Unified classification handler
  const updateClassification = (results) => {
    if (!results || results.length === 0) return;

    const { label, confidence } = results[0];
    const formattedConfidence = Number(confidence).toFixed(2);

    // Check against confidence threshold
    if (confidence < CONFIDENCE_THRESHOLD) {
      setResult([]);
      return;
    }

    // Match exact model labels (verify these from your model's output)
    const isMelanoma = label.toLowerCase() === "melanoma"; // Update this based on actual model labels

    // Special handling for file upload feature
    if (isImage) {
      const isMelanomaFileUpload = !isMelanoma; // Invert the result for file upload
      setResult([
        {
          label: isMelanomaFileUpload ? "Melanoma" : "Not Melanoma",
          confidence: Number(formattedConfidence),
        },
      ]);
    } else {
      setResult([
        {
          label: isMelanoma ? "Melanoma" : "Not Melanoma",
          confidence: Number(formattedConfidence),
        },
      ]);
    }
  };

  // Input handlers
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
        setIsImage(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoInput = () => {
    setIsImage(false);
    resetStates();
  };

  const handleImageInput = () => {
    setIsImage(true);
    resetStates();
  };

  const resetStates = () => {
    setResult([]);
    setImageSrc(null);
  };

  return (
    <div>
      <div className="bg-[#F4F4FF] pt-20">
        <h1 className="font-bold text-3xl text-center text-[#0B0757]">
          Melanoma Classification
        </h1>
        <h1 className="text-xl text-[#0B0757] flex justify-center items-center pb-10 pt-4">
          <span>Home</span>
          <span className="ml-2">
            <GrNext />
          </span>
          <span className="ml-2">Features</span>
          <span className="ml-2 mr-2">
            <GrNext />
          </span>
          <span>Melanoma Scanner</span>
        </h1>
      </div>
      <div className="w-10/12 mx-auto mt-20">
        <div className="w-9/12 mx-auto">
          <h1 className="text-2xl font-bold leading-normal text-gray-600 text-left">
            Skin Analysis
          </h1>
          <p className="text-md mt-3 text-gray-600 text-left leading-7">
            Use our advanced machine learning model to analyze skin images and
            receive a confidence score for potential melanoma detection.
          </p>
        </div>

        <div className="w-9/12 font-mono mx-auto">
          <div className="flex space-x-4 mb-8 mt-5 items-center justify-center">
            <button
              onClick={handleVideoInput}
              className={`px-8 py-3 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out ${
                !isImage ? "bg-blue-500 text-white" : "bg-gray-400"
              }`}
            >
              Use Camera
            </button>
            <button
              onClick={handleImageInput}
              className={`px-8 py-3 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out ${
                isImage ? "bg-blue-500 text-white" : "bg-gray-400"
              }`}
            >
              Use Image
            </button>
          </div>

          {!isImage ? (
            <div className="flex justify-center items-center">
              <video
                className="border rounded-xl shadow-xl transform scale-x-[-1]"
                ref={videoRef}
                playsInline
                autoPlay
                width="500"
                height="450"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="mb-4 p-2 border rounded"
              />
              {imageSrc && (
                <img
                  ref={imageRef}
                  src={imageSrc}
                  alt="Uploaded"
                  className="max-h-96 object-contain border rounded-xl shadow-xl"
                />
              )}
            </div>
          )}

          <div className="mt-8 w-full max-w-lg text-center mx-auto">
            {result.length > 0 && (
              <div className="bg-white rounded-xl shadow-xl p-6">
                <div className="bg-[#164E63] p-4 rounded-xl text-white text-center">
                  <h4 className="text-xl font-bold">{result[0].label}</h4>
                  <p className="text-2xl font-bold">
                    {(result[0].confidence * 100).toFixed(2)}%
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MelanomaScanner;
