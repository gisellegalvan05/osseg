import axios from "axios";

export const getNewsRequest = async (news) =>
   await axios.get('http://localhost:3000/novedades', news)

export const getOneNewRequest = async (oneNews) =>
await axios.get('http://localhost:3000/novedades/:id', oneNews)

export const getNewsTopRequest = async (newsTop) =>
   await axios.get('http://localhost:3000/noticiasTop', newsTop)

export const getNewsAllRequest = async (newsAll) =>
   await axios.get('http://localhost:3000/noticiasAll', newsAll)
