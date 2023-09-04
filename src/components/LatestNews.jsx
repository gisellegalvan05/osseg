import * as Scroll from 'react-scroll';
import { useState, useEffect } from 'react';
import { getNewsRequest } from '../controllers/novedadesApi';
import moment from 'moment/moment';

function LatestNews() {
  const Element = Scroll.Element;

  const [news, setNews] = useState([])

  useEffect( ()=>{
   async function loadNews(){
    const response = await  getNewsRequest()
    setNews(response.data)
    }
    loadNews()
  },[]);

  return (
    <Element  name="news">
    <div className="bg-secondary2 xs:py-8 xs:pb-0 xs:auto lg:h-96 relative flex">
    <div className=" z-40 mx-auto relative -top-44 lg:max-w-100r sm:max-w-7xl px-6 lg:px-8">
      <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-7 sm:mt-8 sm:pb-16 lg:pt-7 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
      {
        news.map( noticia =>(
          <article key={noticia.NONovID} className="rounded-sm flex max-w-xl flex-col items-start justify-between  bg-white drop-shadow-xl hover:-translate-y-3 duration-300">
            <div className=" w-full">
                <img className=" h-56 w-full object-cover" src={`/img/${noticia.NONovNomImg}`} alt="" />
            </div>
          <div className="pl-5 flex items-center gap-x-4 text-xs mt-2">
            <time dateTime="2020-03-16" className="text-primary2">{moment(noticia.NONovFecha).format("DD MMM YYYY")}</time>
            <p href="#" className="relative z-10 rounded-md bg-gray-200 px-3 py-1.5 font-medium text-primary2 hover:bg-gray-300">Afiliados</p>
          </div>
          <div className="px-5 pb-5 group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-secondary2">
                {noticia.NONovDescripcion}
            </h3>
            <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-700"><div dangerouslySetInnerHTML={{__html:noticia.NONovTexto}}></div></p>
            <a href={'/noticias/'+noticia.NONovID} className="relative rounded-md bg-contrast right-0 text-white py-2 px-4 text-sm float-right mt-2 hover:bg-contrast1-600 z-10">Leer más...
            </a>
          </div>
        </article>
        ))
      }

      </div>
    </div>
  </div>
  </Element>
  )
}

export default LatestNews