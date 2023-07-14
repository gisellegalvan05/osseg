import { Loader } from "@googlemaps/js-api-loader"
import { getDireccionesRequest } from '../controllers/infUtilApi';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const mapsApiKey = {
  mapsKey: import.meta.env.VITE_MAPS_API_KEY,
}

const loader = new Loader({
  apiKey: `${mapsApiKey.mapsKey}`,
  version: "weekly",
});

function Delegaciones() {

  const params = useParams();
  const [sedes, setSedes] = useState([])

  useEffect( ()=>{
   async function loadSedes(){
    const response = await  getDireccionesRequest(params.id)
    setSedes(response.data)
    console.log('llega')
    }
    loadSedes()
  },[]);

  loader.load().then(async () => {
    const { Map } = await google.maps.importLibrary("maps");
    
    let myLatlng = new google.maps.LatLng(-34.75562973721628,-58.40326811596806);

    const myMap = new Map(document.getElementById("map"), {
      center: myLatlng,
      zoom: 10,
    });

    sedes.map((sede) => {
      
      const lat = sede.NOInfGeolocation.substring(0,sede.NOInfGeolocation.indexOf(','))
      const long = sede.NOInfGeolocation.substring(sede.NOInfGeolocation.indexOf(',')+1)

      let myPosition = new google.maps.LatLng(lat,long);

      const marker = new google.maps.Marker({
        position: myPosition,
        title:sede.NOInfDescripcion,
        map:myMap
    })
  });

  });

  function RefreshMap(geoPos){
    const lat = geoPos.substring(0,geoPos.indexOf(','))
    const long = geoPos.substring(geoPos.indexOf(',')+1)
    const myPosition = new google.maps.LatLng(lat,long)

    //MyMap.setCenter(groPos)
  }

  return (
    <>
    <div className=" bg-primary4 lg:py-10 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary2 sm:text-4xl">
            Delegaciones
          </p>
        </div>
        <div className="mx-auto max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-100r overflow-hidden">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div id="scrollContainer" className=' ml-auto mr-auto pr-5 h-96 overflow-y-scroll flex flex-no-wrap scrolling-touch items-start mb-8 scrollbar'>
                <ul role="list" className="divide-y divide-gray-100">
        {sedes.map((sede) => (
            <a key={sede.NOInfUtilID} onClick={() =>RefreshMap(sede.NOInfGeolocation)}>
            <li  className="flex justify-between gap-x-6 py-2">
            <div className="flex gap-x-4 bg-white rounded-md w-96 px-10 py-5">
                <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{sede.NOInfDescripcion}</p>
                <p className="text-sm leading-6 text-gray-900">{sede.NOInflDireccion}</p>
                <p className="text-sm leading-6 text-gray-900">{sede.NOInfTelefono}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{sede.NOInfLink}</p>
                </div>
            </div>
            </li>
            </a>
        ))}
        </ul>
            </div>
          
            <div id="map">
              
            </div>
          </dl>
        </div>
      </div>
    </div>
    </>
  )
}

export default Delegaciones