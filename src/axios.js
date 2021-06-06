import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challenge-b5526.cloudfunctions.net/api", // the API (cloud function) URL
});
//http://localhost:5001/challenge-b5526/us-central1/api
//https://us-central1-challenge-b5526.cloudfunctions.net/api
export default instance;
