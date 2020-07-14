import axios from "axios";

const axiosObject = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokedex/",
});

export default axiosObject;
