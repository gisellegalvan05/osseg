import * as Scroll from 'react-scroll';

function UsefulNum() {

  const Element = Scroll.Element;

  return (
    <Element name = "phones">
    <div id="usefulNum" className=" bg-secondary2 lg:py-16 xs:pt-0 xs:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl xs:text-center">
          <p className="md:mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Números útiles
          </p>
        </div>
        <div className="mx-auto xs:mt-20 lg:mt-12 lg:max-w-7xl">
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
              <dd className="mt-2 text-lg leading-7 text-primary1 font-bold">
              (011) 6157 - 3527
              </dd>
              <dd className="mt-2 text-lg leading-7 text-primary1 font-bold">
              informacion@osseg.org.ar
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
              <dd className="mt-2 text-lg leading-7 text-primary1 font-bold">
                (011) 6337 - 5318
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
              <a href="/masnumeros" className='text-white bg-primary1 hover:bg-primary2 rounded-md px-6 py-2 mr-5 text-sm font-medium uppercase'>Ver más...</a>
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
