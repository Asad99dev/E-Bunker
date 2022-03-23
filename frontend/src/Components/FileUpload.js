import React, { useState, useEffect } from "react";
import UploadService from "../Services/FileUploadService";
import AuthService from "../Services/auth.service";

const UploadFiles = () => {
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [message, setMessage] = useState("");
  const [fileInfos, setFileInfos] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);

  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
  };

  const upload = () => {
    let currentFile = selectedFiles[0];

    UploadService.upload(currentFile)
      .then((response) => {
        setMessage(response.data.message);
        return UploadService.getFiles();
      })
      .then((files) => {
        setFileInfos(files.data);
      })
      .catch(() => {
        setMessage("Could not upload the file!");
      });
    setSelectedFiles(undefined);
  };

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
    UploadService.getFiles().then((response) => {
      setFileInfos(response.data);
    });
  }, []);

  return (
    <div className="bg-container">
      <br />
      <h1>Phishing Examples</h1>
      <h3>
        Have a look at these user submitted images of phishing attempts and see
        how they try and trick you
      </h3>

      {currentUser ? (
        <>
          <label className="btn btn-default">
            <input type="file" onChange={selectFile} />
          </label>
          <button
            className="btn-bg"
            disabled={!selectedFiles}
            onClick={upload}
          >
            Upload
          </button>
          <br />
          <div className="alert alert-light" role="alert">
            {message}
          </div>
        </>
      ) : (
        <>
          <br />
          <p>Sign in to upload your own pictures</p>
        </>
      )}

      {fileInfos &&
        fileInfos.map((file) => (
          <div className="content-container" key={file.url}>
            <img className="phishing-img" src={file.url} />
          </div>
        ))}
    </div>
  );
};
export default UploadFiles;
