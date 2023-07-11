import axios from "axios";

const baseURL = {
   urlFrontEnd: import.meta.env.VITE_FRONTEND_URL,
 }

export const getNewsRequest = async (news) =>
   await axios.get(`${baseURL.urlFrontEnd}/novedades`, news)

export const getOneNewRequest = async (id) =>
   await axios.get(`${baseURL.urlFrontEnd}/novedad/${id}`)

export const getNewsTopRequest = async (newsTop) =>
   await axios.get(`${baseURL.urlFrontEnd}/noticiasTop`, newsTop)

export const getNewsAllRequest = async (newsAll) =>
   await axios.get(`${baseURL.urlFrontEnd}/noticiasAll`, newsAll)

  export const getPrevAllRequest = async (prevAll) =>
   await axios.get(`${baseURL.urlFrontEnd}/prevencionAll`, prevAll)

export const getPrevTopRequest = async (prevTop) =>
   await axios.get(`${baseURL.urlFrontEnd}/prevencionTop`, prevTop)
