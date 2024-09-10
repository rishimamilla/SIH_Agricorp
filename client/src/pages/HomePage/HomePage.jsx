import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthState } from "../../context/AuthProvider";
import { Notify } from "../../utils";
import ImageUploader from "../../components/ImageUploader/ImageUploader";
import { NavigationBar } from "../../components";
import CropDiseases from "../CropDiseases/CropDiseases";
import Weather from "../Weather/Weather";

const HomePage = () => {
  const [privateMessage, setPrivateMessage] = useState("");

  const navigate = useNavigate();
  const { auth } = AuthState();

  const fetchPrivateDate = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/private", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const data = await response.json();

      if (data.success) {
        setPrivateMessage(data.data);
        return Notify(data.data, "success");
      } else {
        navigate("/login");
        return Notify("You are not authorized please login", "error");
      }
    } catch (error) {
      localStorage.removeItem("auth");
      navigate("/login");
      return Notify("Internal server error", "error");
    }
  };

  useEffect(() => {
    fetchPrivateDate();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ImageUploader />
      <br />
      <Weather />
      <br />
      <CropDiseases />
    </>
  );
};

export default HomePage;
