import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://localhost:3300/api",
    headers: {
      authorization: token
    }
  });
};

export default axiosWithAuth;
