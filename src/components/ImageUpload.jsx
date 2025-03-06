import React, { useState } from "react";
import axios from "axios";

const ImageUpload = ({ setPrediction }) => {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsLoading(true);
    setImage(URL.createObjectURL(file));

    let formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/predict/`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setPrediction(response.data.emotion);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <label style={styles.uploadLabel}>
        <input
          type="file"
          onChange={handleUpload}
          style={styles.fileInput}
          accept="image/*"
          disabled={isLoading}
        />
        {isLoading ? "Uploading..." : "Choose an Image"}
      </label>

      {image && (
        <div style={styles.imageContainer}>
          <img src={image} alt="Uploaded" style={styles.image} />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
    border: "2px dashed #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    maxWidth: "400px",
    margin: "0 auto",
  },
  uploadLabel: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
    transition: "background-color 0.3s ease",
  },
  fileInput: {
    display: "none",
  },
  imageContainer: {
    marginTop: "20px",
    textAlign: "center",
  },
  image: {
    maxWidth: "100%",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};