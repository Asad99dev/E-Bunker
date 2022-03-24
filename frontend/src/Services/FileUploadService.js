import http from "../http-common";
const upload = (file, onUploadProgress) => {
  const user = JSON.parse(localStorage.getItem("user"));
  let formData = new FormData();
  formData.append("file", file);
  return http.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + user.accessToken,
    },
    onUploadProgress,
  });
};
const getFiles = () => {
  return http.get("/files");
};
export default {
  upload,
  getFiles,
};
