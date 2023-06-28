import { useState, useEffect } from "react";
import { getNewsAllRequest } from "../controllers/novedadesApi";
import moment from "moment/moment";

function AllNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await getNewsAllRequest();
      setNews(response.data);
    }
    loadNews();
  }, []);

  return (
    <>
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Noticias
            </h2>
          </div>
          <div class="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-12 sm:pt-14 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {news.map((noticia) => (
              <article
                class="flex max-w-xl flex-col items-start justify-between"
                key={noticia.NONovID}
              >
                <div className=" pb-3">
                  <img
                    className="h-auto w-96 max-h-60 object-cover shadow-md hover:shadow-xl rounded-lg"
                    src={`/img/${noticia.NONovNomImg}`}
                    alt=""
                  />
                </div>
                <div class="flex items-center gap-x-4 text-xs">
                  <p className=" text-gray-500">
                    {moment(noticia.NONovFecha).format("DD MMM YYYY")}
                  </p>

                  <a
                    href="#"
                    class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    Afiliados
                  </a>
                </div>
                <div class="group relative">
                  <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href= '#'>
                      <span class="absolute inset-0"></span>
                      {noticia.NONovDescripcion}
                    </a>
                  </h3>
                  <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {noticia.NONovTexto}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllNews;
