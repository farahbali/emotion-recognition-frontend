import React, { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import './App.css'; 

function App() {
  const [prediction, setPrediction] = useState("");

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Emotion Detection</h1>
        <p>Upload an image to detect the emotion.</p>
      </header>
      <main className="app-main">
        <ImageUpload setPrediction={setPrediction} />
        {prediction && (
          <div className="prediction-result">
            <h2>Émotion détectée : {prediction}</h2>
          </div>
        )}
      </main>
      <footer className="app-footer">
        <p>© 2023 Emotion Detection App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;