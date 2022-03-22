import React, { useEffect, useState } from "react";
import AuthService from "../Services/auth.service";
import FileUpload from "../Components/FileUpload";

function PhishingExamples() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <div className="bg-container">
      {currentUser ? (
        <>
          <FileUpload />
        </>
      ) : (
        <p>Sign in to upload your own pictures</p>
      )}
    </div>
  );
}

export default PhishingExamples;
