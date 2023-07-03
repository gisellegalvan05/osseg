import { useState, useEffect } from 'react';
import { getNewsTopRequest } from '../controllers/novedadesApi';
import moment from 'moment/moment';

function News() {

  const [news, setNews] = useState([])

  useEffect( ()=>{
   async function loadNews(){
    const response = await  getNewsTopRequest()
    setNews(response.data)
    }
    loadNews()
  },[]);

  return (
    <>
    
    <div className="md:container px-4 flex-grow w-full py-4 sm:py-16 mx-auto sm:px-0">
    <div className="mx-auto max-w-2xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary2 sm:text-4xl">
           Últimas Noticias
          </p>
        </div>
      <div className="mx-auto w-full md:w-4/5 px-4">
        <div className="md:container my-8">
          <div className="flex justify-between items-center mb-4">
              <a href="/noticias" className=" float-right"
                ><span
                  className="hover:text-primary1 text-primary2 font-medium text-base"
                  >Ver más noticias →
                </span>
                </a>
          </div>
          <div
            id="scrollContainer"
            className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8 scrollbar"
          >
          {
          news.map( noticia =>(
            <div key={noticia.NONovID}
              className="flex-none w-2/3 md:w-1/3 mr-8 pb-4 rounded-lg"
            >
              <div className="space-y-4">
                <div className="aspect-w-16 aspect-h-9 max-h-64">
                  <img
                    className="object-cover shadow-md hover:shadow-xl rounded-lg"
                    src={`/img/${noticia.NONovNomImg}`}
                    alt=""
                  />
                </div>
                <div className="">
                    <div className='flex pb-2'>
                        <p className=' text-sm self-center'> 
                        {moment(noticia.NONovFecha).format("DD MMM YYYY")}
                            </p>
                        <button className=' text-xs bg-secondary1 text-white px-3 py-2 rounded-lg ml-5'>
                            Afiliados
                            </button>
                    </div>
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3 className="font-bold text-gray-800 text-3xl mb-2">
                    {noticia.NONovDescripcion}
                    </h3>
                  </div>
                  <div className="text-lg">
                    <p className="line-clamp-3">
                    {noticia.NONovTexto}
                    </p>
                    <div className=' bg-primary1 rounded-lg py-2 px-3 w-28 mt-3 relative float-right
                    hover:bg-primary2
                    '>
                      <a href={'/noticias/'+noticia.NONovID}>
                    <p className="font-medium text-sm text-white">
                      Leer más<span className="text-white">&hellip;</span>
                    </p>
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          ))
          }
            
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default News