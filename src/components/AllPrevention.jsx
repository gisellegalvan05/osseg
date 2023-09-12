import { useState, useEffect } from "react";
import { getPrevAllRequest } from "../controllers/novedadesApi";
import moment from "moment/moment";

function AllPrevention() {

const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await getPrevAllRequest();
      setNews(response.data);
    }
    loadNews();
  }, []);

  return (
    <>
    <div className="bg-white lg:py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Programas Preventivos
            </h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-12 sm:pt-14 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {news.map((noticia) => (
              <a key= {noticia.NONovID} href={'/prevencion/'+noticia.NONovID}>
              <article
                className="flex max-w-xl flex-col items-start justify-between"
                key={noticia.NONovID}
              >
                <div className=" pb-3">
                  <img
                    className="h-60 w-96 max-h-60 object-cover shadow-md hover:shadow-xl rounded-lg"
                    src={`/img/${noticia.NONovNomImg}`}
                    alt=""
                  />
                </div>
                <div className="flex items-center gap-x-4 text-xs">
                  <p className=" text-gray-500">
                    {moment(noticia.NONovFecha).format("DD MMM YYYY")}
                  </p>
                </div>
                <div className="group relative w-96">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      {noticia.NONovDescripcion}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  <div dangerouslySetInnerHTML={{__html:noticia.NONovTexto}}></div>
                  </p>
                </div>
              </article>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default AllPrevention