import axios from "axios";

const baseApiUrl =
  "https://www.superheroapi.com/api.php/100185885467083/search/";

const api = axios.create({
  baseURL: baseApiUrl,
});

export default api;
