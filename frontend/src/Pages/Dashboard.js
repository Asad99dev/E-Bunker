import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../Services/auth.service";
import axios from "axios";

function Dashboard() {
  const navigate = useNavigate();
  const currentUser = AuthService.getCurrentUser();
  const [images, getImages] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const admin = ["ROLE_ADMIN", "ROLE_USER"];
  const userString = user.roles.toString();
  const adminString = admin.toString();
  

  useEffect(() => {
    if (userString !== adminString) {
      navigate("/unauthorized");
    }

    getAllImages();
  }, []);

  const getAllImages = () => {
    axios
      .get(`http://localhost:8080/files`, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        const currentImages = response.data;
        getImages(currentImages);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  function deleteImage(event) {
    event.preventDefault();

    return axios.delete(`http://localhost:8080/delete/files/${images.url}`, {
      headers: {
        Authorization: "Bearer " + currentUser.accessToken,
      }
    })
    .then((response) => {
      console.log(response.data);
      setRefresh(true);
    })
    .catch((error) => {
      console.log(error.data);
    });
  }

  return (
    <div className="bg-container">
      {images.map((image) => (
        <div className="content-container" key={image.url}>
          <p>{image.name}</p>
          <button className="btn-bg" onClick={deleteImage}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
