import { Loader } from "@googlemaps/js-api-loader"
import { getDireccionesRequest } from '../controllers/infUtilApi';
import { useState, useEffect, Fragment } from 'react';
import { useParams } from "react-router-dom";
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import MapApp from "./MapApp";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const people = [
  { id: 0, name: 'Todas', unavailable: false },
  { id: 1, name: 'Ciudad Autónoma de Buenos Aires', unavailable: false },
  { id: 2, name: 'Buenos Aires', unavailable: false },
  { id: 3, name: 'Catamarca', unavailable: false },
  { id: 4, name: 'Chaco', unavailable: true },
  { id: 5, name: 'Chubut', unavailable: false },
  { id: 6, name: 'Córdoba', unavailable: false },
  { id: 7, name: 'Corrientes', unavailable: false },
  { id: 8, name: 'Entre Ríos', unavailable: false },
  { id: 9, name: 'Formosa', unavailable: false },
  { id: 10, name: 'Jujuy', unavailable: false },
  { id: 11, name: 'La Pampa', unavailable: false },
  { id: 12, name: 'La Rioja', unavailable: false },
  { id: 13, name: 'Mendoza', unavailable: false },
  { id: 14, name: 'Misiones', unavailable: false },
  { id: 15, name: 'Neuquén', unavailable: false },
  { id: 16, name: 'Río Negro', unavailable: false },
  { id: 17, name: 'Salta', unavailable: false },
  { id: 18, name: 'San Juan', unavailable: false },
  { id: 19, name: 'San Luis', unavailable: false },
  { id: 20, name: 'Santa Cruz', unavailable: false },
  { id: 21, name: 'Santa Fe', unavailable: false },
  { id: 22, name: 'Santiago del Estero', unavailable: false },
  { id: 23, name: 'Tierra del Fuego', unavailable: false },
  { id: 24, name: 'Tucumán', unavailable: false },
]

function RefreshMap(geoPos){
  const lat = geoPos.substring(0,geoPos.indexOf(','))
  const long = geoPos.substring(geoPos.indexOf(',')+1)
  const center = new google.maps.LatLng(lat,long)
  console.log('geoPos '+geoPos)
  console.log('myPosition '+center)
}

function Delegaciones() {

  const [selected, setSelected] = useState(people[0])

  const params = useParams();
  let provinciaId = params.id
  const [sedes, setSedes] = useState([])

  useEffect( ()=>{
   async function loadSedes(){
    const response = await  getDireccionesRequest(provinciaId)
    setSedes(response.data)
    }
    loadSedes()
  },[]);

  //const center = {lat: -34.75562973721628, lng:-58.40326811596806 };
  
  return (
    <>
    <div className=" bg-primary4 lg:py-10 sm:py-32">
      <div className="mx-auto max-w-full px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary2 sm:text-4xl">
            Delegaciones
          </p>
        </div>
        <div className="mx-auto max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-100r overflow-hidden">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            <div id="scrollContainer" className=' ml-auto mr-auto pr-5 h-30r overflow-y-scroll scrolling-touch items-start mb-8 scrollbar'>
            <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Seeccione una Provincia</Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary3 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-primary1 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <a href={'/delegaciones/'+person.id} className="flex items-center">
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {person.name}
                          </span>
                        </a>
                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-primary1',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>

                <ul role="list" className="divide-y divide-gray-100">
        {sedes.map((sede) => (
            <a className="marker" key={sede.NOInfUtilID} onClick={() =>RefreshMap(sede.NOInfGeolocation)}>
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
          
            <div id="map2" className=" col-span-2">
    
            </div>
          </dl>
        </div>
      </div>  
    </div>
    </>
  )
}

export default Delegaciones