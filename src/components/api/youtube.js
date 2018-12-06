import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    type: 'video',
    key: "AIzaSyAOnxNB4akEkKOmB9u18F-jDbTDzuQP1Kc"
  }
});