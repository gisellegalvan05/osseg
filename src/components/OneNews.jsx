import React from "react";
import { useState, useEffect } from "react";
import { getOneNewRequest } from "../controllers/novedadesApi";
import { useParams } from "react-router-dom";
import moment from "moment/moment";

function OneNews({ noticiaId }) {
  const params = useParams();
  const [news, setNews] = useState([]);
  useEffect(() => {
    async function loadNews() {
      const response = await getOneNewRequest(params.id);
      setNews(response.data);
    }
    loadNews();
  }, []);

  return (
    <>
    {
          news.map( noticia =>(
      <div key={noticia.NONovID} className="relative isolate overflow-hidden bg-white px-6 py-12 lg:overflow-visible lg:px-0">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none lg:items-start">
        <div className=" text-center -ml-12 -mt-12 p-12 lg:top-4 lg:overflow-hidden">
            <img
              className=" mx-auto w-[48rem] max-w-none rounded-xl bg-gray-900 ring-1 ring-gray-400/10 sm:w-[48rem]"
              src={`/img/${noticia.NONovNomImg}`}
              
              alt=""
            />
          </div>
          <div className="lg:col-start-1 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-7xl lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-full">
                <p className="text-base font-semibold leading-7 text-primary1">
                  {moment(news[0].NONovFecha).format("DD MMM YYYY")}
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {news[0].NONovDescripcion}
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                <div dangerouslySetInnerHTML={{__html:news[0].NONovTexto}}></div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}
    </>
  );
}

export default OneNews;
