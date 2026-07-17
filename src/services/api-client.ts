import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "999ed72147cb4c62bae9eedc5e4c360e",
  },
});

export default apiClient;
