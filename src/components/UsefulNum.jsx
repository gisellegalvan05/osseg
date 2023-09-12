import * as Scroll from 'react-scroll';

function UsefulNum() {

  const Element = Scroll.Element;

  return (
    <Element name = "phones">
    <div id="usefulNum" className=" bg-secondary2 lg:py-16 xs:pt-0 xs:pb-16">
      <div className="mx-auto max-w-85r px-6 lg:px-8">
        <div className="mx-auto max-w-2xl xs:text-center">
          <p className="md:mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Números útiles
          </p>
        </div>
        <div className="mx-auto xs:mt-20 lg:mt-12 lg:max-w-85r">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
            <div key="num1" className="relative p-8 bg-white rounded-lg shadow text-center hover:-translate-y-3 duration-200">
              <dt className="text-base font-semibold leading-7 text-gray-900 mb-5">
              INFORMACIÓN GENERAL
              </dt>
              <dd className="mt-1 text-lg leading-7 text-primary1 font-bold">
              (011) 4131 - 2000 
              </dd>
              <dd className="mt-4 text-lg leading-7 text-primary1 font-bold">
              0800 - 777 - 67734
              </dd>
              <dd className="mt-4 text-base leading-7 text-gray-600">
              Atención de 10 a 18 hs.
              </dd>
            </div>
            <div key="num2" className="relative p-8 bg-white rounded-lg shadow text-center hover:-translate-y-3 duration-200">
              <dt className="text-base font-semibold leading-7 text-gray-900 mb-5">
              INFORMACIÓN GENERAL
              </dt>
              <dd className="mt-2 text-lg leading-7 text-primary1 font-bold inline-flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-whatsapp" className='mt-1' viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/> </svg>
              <p className='pl-2'> (011) 6157 - 3527 </p>
              </dd>
              <dd className="mt-2 text-lg leading-7 text-primary1 font-bold inline-flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>
              <p className='pl-2'>informacion@osseg.org.ar</p>
              </dd>
              <dd className="mt-4 text-base leading-7 text-gray-600">
              Atención de 10 a 18 hs.
              </dd>
            </div>
            <div key="num3" className="relative p-8 bg-white rounded-lg shadow text-center hover:-translate-y-3 duration-200">
              <dt className="text-base font-semibold leading-7 text-gray-900 mb-5">
              SERVICIO ORIENTACIÓN PERMANENTE
              </dt>
              <dd className="mt-2 text-lg leading-7 text-primary1 font-bold">
              (011) 4332 - 0210 / 0456
              </dd>
              <dd className="mt-2 text-lg leading-7 text-primary1 font-bold inline-flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-whatsapp" className='mt-1' viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/> </svg>
              <p className='pl-2'> (011) 6337 - 5318 </p>
              </dd>
              <dd className="mt-9 text-base leading-7 text-gray-600">
              Guardia Telefónica 24Hs.
              </dd>
            </div>
            <div key="num4" className="relative p-8 bg-white rounded-lg shadow text-center hover:-translate-y-3 duration-200">
              <dt className="text-base font-semibold leading-7 text-gray-900 mb-5">
              OTROS CONTACTOS
              </dt>
              <dd className="mt-2 text-lg leading-7 text-primary1 font-bold">
              <a href="/masnumeros" className='text-white bg-primary1 hover:bg-primary2 rounded-md px-6 py-2 text-sm font-medium uppercase'>Ver más...</a>
              </dd>
      </div>
          </dl>
        </div>
      </div>
    </div>
    </Element>
  );
}

export default UsefulNum;
