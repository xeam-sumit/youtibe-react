import axios from "axios"
const KEY = "AIzaSyAjvzxJHKxgiYjw5bGQWCrPTLndbe5m97g"
// axios instance 
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: "6",
    key: KEY
  }
})
