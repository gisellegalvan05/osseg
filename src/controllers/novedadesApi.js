import axios from "axios";

const mapsConfig = {
   apiKey: import.meta.env.VITE_FRONTEND_URL,
 }

export const getNewsRequest = async (news) =>
   await axios.get(`${mapsConfig.apiKey}/novedades`, news)

export const getOneNewRequest = async (id) =>
   await axios.get(`${mapsConfig.apiKey}/novedad/${id}`)

export const getNewsTopRequest = async (newsTop) =>
   await axios.get(`${mapsConfig.apiKey}/noticiasTop`, newsTop)

export const getNewsAllRequest = async (newsAll) =>
   await axios.get(`${mapsConfig.apiKey}/noticiasAll`, newsAll)

  export const getPrevAllRequest = async (prevAll) =>
   await axios.get(`${mapsConfig.apiKey}/prevencionAll`, prevAll)

export const getPrevTopRequest = async (prevTop) =>
   await axios.get(`${mapsConfig.apiKey}/prevencionTop`, prevTop)
