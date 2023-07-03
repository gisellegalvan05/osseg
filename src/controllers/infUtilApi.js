import axios from "axios";
const mapsConfig = {
   apiKey: import.meta.env.VITE_FRONTEND_URL,
 }

export const getInternosRequest = async (numeros) =>
   await axios.get(`${mapsConfig.apiKey}/internos`, numeros)