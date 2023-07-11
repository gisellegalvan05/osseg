import axios from "axios";
const baseURL = {
   urlFrontEnd: import.meta.env.VITE_FRONTEND_URL,
 }

export const getInternosRequest = async (numeros) =>
   await axios.get(`${baseURL.urlFrontEnd}/internos`, numeros)

export const getDireccionesRequest = async (direcciones) =>
   await axios.get(`${baseURL.urlFrontEnd}/direcciones`, direcciones)