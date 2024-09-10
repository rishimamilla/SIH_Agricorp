import React from "react";
import "./CropDiseases.css"
import { NavigationBar } from "../../components";
const CropDiseases = () => {
  // Sample data for crop diseases
  const diseases = [
    {
      name: "Powdery Mildew",
      symptoms: [
        "White, powdery spots on leaves, stems, and buds.",
        "Distorted leaves and reduced growth.",
      ],
      identification:
        "White or grayish powder-like spots on the upper surfaces of leaves.",
      cures: [
        "Use sulfur-based fungicides.",
        "Apply neem oil or baking soda solution.",
        "Remove infected plant parts and improve air circulation.",
      ],
    },
    {
      name: "Downy Mildew",
      symptoms: [
        "Yellow or white patches on upper leaf surfaces.",
        "Grayish mold on the undersides of leaves.",
      ],
      identification:
        "Yellowing of leaves with a downy growth on the underside.",
      cures: [
        "Use fungicides like Mancozeb or Chlorothalonil.",
        "Ensure proper spacing and reduce humidity around plants.",
        "Remove and destroy infected leaves.",
      ],
    },
    {
      name: "Leaf Spot",
      symptoms: [
        "Small, dark spots on leaves that may enlarge over time.",
        "Yellowing or browning of leaf tissue surrounding spots.",
      ],
      identification: "Circular or irregular brown or black spots on leaves.",
      cures: [
        "Apply copper-based fungicides.",
        "Ensure good air circulation and avoid overhead watering.",
        "Remove and destroy affected leaves.",
      ],
    },
    {
      name: "Rust",
      symptoms: [
        "Orange, yellow, or brown pustules on leaves and stems.",
        "Premature leaf drop.",
      ],
      identification: "Rust-colored pustules on leaf undersides.",
      cures: [
        "Use fungicides like Mancozeb or Copper oxychloride.",
        "Remove and destroy infected leaves.",
        "Avoid overhead watering to prevent leaf wetness.",
      ],
    },
    {
      name: "Blight",
      symptoms: [
        "Sudden wilting of leaves and stems.",
        "Brown or black lesions on leaves, stems, and fruit.",
      ],
      identification:
        "Dark, water-soaked lesions that spread rapidly on plants.",
      cures: [
        "Apply fungicides like Copper or Chlorothalonil.",
        "Remove infected plant parts immediately.",
        "Rotate crops to avoid pathogen buildup in the soil.",
      ],
    },
    {
      name: "Anthracnose",
      symptoms: [
        "Dark, sunken lesions on stems, leaves, or fruit.",
        "Leaf curling and premature defoliation.",
      ],
      identification:
        "Dark, sunken spots with concentric rings on leaves and fruit.",
      cures: [
        "Use resistant varieties if available.",
        "Apply fungicides like Copper-based products.",
        "Remove and destroy affected plant debris.",
      ],
    },
  ];

    return (
        <>
            <NavigationBar/>
    <div className="crop-diseases-container">
      <h1>Crop Diseases and Their Cures</h1>
      {diseases.map((disease, index) => (
        <div key={index} className="disease-card">
          <h2>{disease.name}</h2>
          <h3>Symptoms:</h3>
          <ul>
            {disease.symptoms.map((symptom, i) => (
              <li key={i}>{symptom}</li>
            ))}
          </ul>
          <h3>Identification:</h3>
          <p>{disease.identification}</p>
          <h3>Cures:</h3>
          <ul>
            {disease.cures.map((cure, j) => (
              <li key={j}>{cure}</li>
            ))}
          </ul>
        </div>
      ))}
            </div>
            </>
  );
};

export default CropDiseases;
