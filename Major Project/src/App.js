import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Main/Main";
import Home from "./Pages/Home/Home";
import MelanomaScanner from "./Pages/Verification/MelanomaScanner/MelanomaScanner";
import SignIN from "./Pages/Shared/Login/SignIN";
import MelanomaInfo from "./Pages/Verification/MelanomaInfo/MelanomaInfo";
import TechnologyInfo from "./Pages/Verification/TechnologyInfo/TechnologyInfo";
import MelanomaPrevention from "./Pages/Verification/MelanomaPrevention/MelanomaPrevention";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SignUP from "./Pages/Shared/Login/SignUP";
import Contact from "./Pages/Shared/contact/Contact";
import PaymentSuccess from "./components/PaymentSuccess";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Home",
          element: <Home />,
        },
        {
          path: "/Melanoma Scanner",
          element: <MelanomaScanner />,
        },
        {
          path: "/Melanoma Information",
          element: <MelanomaInfo />,
        },        
        {
          path: "/Technology Information",
          element: <TechnologyInfo />,
        },
        {
          path: "/Prevention & Cure",
          element: <MelanomaPrevention />,
        },
        {
          path: "/Accounts",
          element: <SignIN />,
        },
        {
          path: "/SignUp",
          element: <SignUP />,
        },
        {
          path: "/CONTACT",
          element: <Contact />,
        },
        {
          path: "/payment/success/:tranId",
          element: <PaymentSuccess />,
        },
      ],
    },
  ]);
  return (
    <div className="App bg-white font-mono">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
