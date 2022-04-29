import axios from "axios";
import env from "react-dotenv";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;