import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import axios from "axios";

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [webcam, setWebcam] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  };

  const sendImageToBackend = async () => {
    if (!image) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", image);

      const response = await axios.post("YOUR_BACKEND_API_URL", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setResult(response.data); // Adjust based on your backend response format
    } catch (error) {
      console.error("Error sending image to backend:", error);
    } finally {
      setLoading(false);
    }
  };

  const webcamRef = useRef(null);

  const styles = {
    header: {
      top: 0,
      left: 0,
      width: "100%",
      backgroundColor: "#ffffff",
      padding: "10px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      zIndex: 1000, // Ensures it stays above other content
      textAlign: "center",
      borderRadius: "0 0 10px 10px", // Rounded corners at the bottom only
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "calc(100vh - 60px)", // Adjust height to account for fixed header
      backgroundColor: "#e9ecef", // Light background color
      padding: "20px",
      marginTop: "60px", // Space for the fixed header
      boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
      borderRadius: "10px", // Rounded corners
    },
    button: {
      margin: "10px",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#007bff",
      color: "#fff",
      cursor: "pointer",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.3s, box-shadow 0.3s",
    },
    buttonDisabled: {
      backgroundColor: "#d6d6d6",
      cursor: "not-allowed",
    },
    fileInput: {
      margin: "10px",
    },
    previewImage: {
      marginTop: "20px",
      maxWidth: "100%",
      maxHeight: "400px",
      borderRadius: "10px", // Rounded corners for the image
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    },
    resultContainer: {
      marginTop: "20px",
      padding: "10px",
      borderRadius: "10px", // Rounded corners for result container
      backgroundColor: "#fff",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <>
      <div style={styles.header}>
        <h2>Upload or Capture Image to Detect Disease</h2>
      </div>
      <div style={styles.container}>
        <button style={styles.button} onClick={() => setWebcam(!webcam)}>
          {webcam ? "Upload Image" : "Use Webcam"}
        </button>
        {webcam ? (
          <div>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width="100%"
              videoConstraints={{ facingMode: "environment" }}
            />
            <button style={styles.button} onClick={handleCapture}>
              Capture
            </button>
          </div>
        ) : (
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={styles.fileInput}
            />
          </div>
        )}
        <button
          style={{ ...styles.button, ...(loading && styles.buttonDisabled) }}
          onClick={sendImageToBackend}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Image"}
        </button>
        {image && <img src={image} alt="Preview" style={styles.previewImage} />}
        {result && (
          <div style={styles.resultContainer}>
            <h3>Result:</h3>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageUploader;
