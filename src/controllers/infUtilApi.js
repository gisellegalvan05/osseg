import axios from "axios";

export const getInternosRequest = async (numeros) =>
   await axios.get('http://localhost:3000/internos', numeros)