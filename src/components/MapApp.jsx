import { Loader } from "@googlemaps/js-api-loader"
import { useState, useEffect, useRef } from 'react';
import { getDireccionesRequest } from '../controllers/infUtilApi';

const mapsApiKey = {
    mapsKey: import.meta.env.VITE_MAPS_API_KEY,
  }
  
  const loader = new Loader({
    apiKey: `${mapsApiKey.mapsKey}`,
    version: "weekly",
  });

function MapApp(myCenter, myZoom) {

    console.log('myCenter ' + myCenter)
const [sedes, setSedes] = useState([])

useEffect( ()=>{
    async function loadSedes(){
    const response = await  getDireccionesRequest(0)
    setSedes(response.data)
    }
    loadSedes()
},[]);

  loader.load().then(async () => {
    const { Map } = await google.maps.importLibrary("maps");
  
    const myMap = new Map(document.getElementById("map2"), {
      center: { lat: -34.75562973721628, lng:-58.40326811596806 },
      zoom: 8,
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

  return (
    <div id="map2" />
    
  )
}

export default MapApp