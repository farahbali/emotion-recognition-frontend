import React, { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import { FaSmile, FaUpload, FaInfoCircle } from "react-icons/fa"; 
import './App.css';

function App() {
  const [prediction, setPrediction] = useState("");

  return (
    <div className="app-container">

      <header className="app-header">
        <h1>Emotion Detection AI</h1>
        <p>Upload an image to detect the emotion using advanced AI technology.</p>
        <div className="header-icons">
          <FaSmile className="icon" />
          <FaUpload className="icon" />
        </div>
      </header>
      <main className="app-main">
        <div className="upload-section">
          <h2>Upload Your Image</h2>
          <p>Supported formats: JPG, PNG, JPEG.</p>
          <ImageUpload setPrediction={setPrediction} />
        </div>

        {prediction && (
          <div className="prediction-result">
            <h2>Detected Emotion: <span className="emotion">{prediction}</span></h2>
            <p className="feedback-text">How accurate was the prediction? Let us know!</p>
          </div>
        )}
      </main>


      <footer className="app-footer">
        <div className="footer-content">
          <p>© 2023 Emotion Detection AI. All rights reserved.</p>
          <p>
            <FaInfoCircle className="icon" /> Powered by AI and Machine Learning.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;