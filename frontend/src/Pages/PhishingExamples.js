import React, { useEffect, useState } from "react";
import AuthService from "../Services/auth.service";
import FileUpload from "../Components/FileUpload";
import axios from "axios";

function PhishingExamples() {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [images, setImages] = useState([]);

  const url = `http://localhost:8080/files`;

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }

    getImages();
  }, []);

  const getImages = () => {
    axios
      .get(url, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        const currentImage = response.data[1].url;
        setImages(currentImage);
      });
  };

  return (
    <div className="bg-container">
      {currentUser ? (
        <>
          <FileUpload />
        </>
      ) : (
        <p>Sign in to upload your own pictures</p>
      )}
      <div>
        <img src={images} />
      </div>
    </div>
  );
}

export default PhishingExamples;
