import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css"; // CSS for "react-toastify"

// Private route
import { PrivateRoutes } from "./utils";

// Pages
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  PasswordResetPage,
} from "./pages";
import { NavigationBar } from "./components";
import Weather from "./pages/Weather/Weather";
import CropDiseases from "./pages/CropDiseases/CropDiseases";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Routes>
        {/* Private routes (Requires authentication token) */}
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/diseases" element={<CropDiseases />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/passwordReset/:resetToken"
          element={<PasswordResetPage />}
        />

        {/* If the user enters an invalid path in the URL it automatically redirects them to the homepage */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>


      {/* Remember to render the ToastContainer once in your application tree. Rendering it in the application root would be the best bet */}
      <ToastContainer />
      <Footer/>
    </>
  );
};

export default App;
