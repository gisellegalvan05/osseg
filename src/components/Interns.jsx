import { useState, useEffect } from 'react';
import { getInternosRequest } from '../controllers/infUtilApi';

function Interns() {

  const [internos, setinternos] = useState([])

  useEffect( ()=>{
   async function loadInternos(){
    const response = await  getInternosRequest()
    setinternos(response.data)
    }
    loadInternos()
  },[]);

  return (
    <div>
      <div class="bg-grey-100 py-16 sm:py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-3xl font-bold tracking-tight text-secondary2 sm:text-4xl">
              Números útiles
            </h2>
          </div>
          <div class="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-7 sm:mt-5 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {
            internos.map( interno =>( 
              <div key = {interno.NOInfUtilID} class="block rounded-xl border-gray-300 border-[1px] bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
              <div class=" rounded-t-xl border-b-2 border-neutral-100 px-6 py-3 bg-gray-100">
              <p className=" font-bold">{interno.NOInfDescripcion}</p>
              </div>
              <div class="p-6">
                <p class=" font-medium text-base text-neutral-600">{interno.NOInfTelefono}</p>
                <p class="mt-5 font-medium text-base text-neutral-600">{interno.NOInflDireccion}</p>
              </div>
            </div>  
            ))
            }
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interns;
