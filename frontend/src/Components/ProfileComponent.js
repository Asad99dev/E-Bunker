import React, { useState, useEffect } from "react";
import AuthService from "../Services/auth.service";
import axios from "axios";

function ProfileComponent() {
  const currentUser = AuthService.getCurrentUser();
  const id = currentUser.id;
  const url = `http://localhost:8080/api/survey/${id}`;
  const [total, getTotal] = useState("");

  useEffect(() => {
    getCurrentTotal();
  }, []);

  const getCurrentTotal = () => {
    axios
      .get(url, {
        headers: {
          Authorization: "Bearer " + currentUser.accessToken,
        },
      })
      .then((response) => {
        console.log(response.data);
        const currentTotal = response.data.total;
        getTotal(currentTotal);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  return (
    <div className="component-bg">
      <header>
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
 
      {total <= 15 && total > 0 && (
        <p>
          <strong>Cybersecurity score: {total}/50</strong>
          <p>
           Your cybersecurity score is quite low, we recommend you take immediate
          action to protect your accounts and devices. Think of the things in
          the survey you never or rarely do then try and make changes so that
          you do them more often.
          </p>
        </p>
      )}
      {total > 15 && total <=35 &&(
        <p>
          <strong>Cybersecurity score: {total}/50</strong>
          <p>
           You have an average cybersecurity score, you do take care to protect
          your devices and accounts to an extent but there is room for
          improvement. For extra peace of mind, we recommend you go through all
          the protections you have in place and see if you can make any changes
          to stay safer.
          </p>
        </p>
      )}
      {total > 35 && total <= 50 &&(
        <p>
          <strong>Cybersecurity score: {total}/50</strong>
          <p>
           You have an excellent cybersecurity score, you take the utmost care in
          protecting your accounts and devices and there is not much you can do
          to improve. We recommend you keep this up and make sure to schedule
          checks regularly to make sure your protections are up to date.
          </p>
        </p>
      )}
    </div>
  );
}
export default ProfileComponent;
