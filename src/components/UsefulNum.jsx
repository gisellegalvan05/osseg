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
            <div className="relative p-8 bg-white rounded-lg shadow text-center hover:-translate-y-3 duration-200">
              <dt className="text-base font-semibold leading-7 text-gray-900 mb-5">
              ATENCIÓN AL AFILIADO
              </dt>
              <dd className="mt-1 text-lg leading-7 text-primary1 font-bold">
              0800-777-67734 <br></br>
              4131-2000
              </dd>
              <dd className="mt-4 text-lg leading-7 text-primary1 font-bold">
              1161573527
              <p className=' text-sm font-thin leading-7 text-gray-600'>Whatsapp (sólo mensajes)</p>
              </dd>
              <dd className="mt-4 text-base leading-7 text-gray-600">
              Atención de 10 a 18 hs.
              </dd>
            </div>
            <div className="relative p-8 bg-white rounded-lg shadow text-center hover:-translate-y-3 duration-200">
              <dt className="text-base font-semibold leading-7 text-gray-900 mb-5">
              ATENCIÓN AL AFILIADO
              </dt>
              <dd className="mt-2 text-lg leading-7 text-primary1 font-bold">
              informacion@osseg.org.ar
              </dd>
              <dd className="mt-2 text-lg leading-7 text-primary1 font-bold">
              reclamos@osseg.org.ar
              </dd>
              
            </div>
            <div className="relative p-8 bg-white rounded-lg shadow text-center hover:-translate-y-3 duration-200">
              <dt className="text-base font-semibold leading-7 text-gray-900 mb-5">
              CONMUTADOR OSSEG
              </dt>
              <dd className="mt-2 text-lg leading-7 text-primary1 font-bold">
              4131-2100
              </dd>
              <dd className="mt-2 text-lg leading-7 text-primary1 font-bold">
                
              </dd>
              <dd className="mt-9 text-base leading-7 text-gray-600">
              Atención de 10 a 18 hs.
              </dd>
            </div>
            <div className="relative p-8 bg-white rounded-lg shadow text-center hover:-translate-y-3 duration-200">
              <dt className="text-base font-semibold leading-7 text-gray-900 mb-5">
              GUARDIA MÉDICA
              </dt>
              <dd className="mt-2 text-lg leading-7 text-primary1 font-bold">
              (011) 4322-0210 / 0456 <br></br>
              </dd>
              <dd className="mt-4 text-lg leading-7 text-primary1 font-bold">
              1163775318
              <p className='text-sm font-thin leading-7 text-gray-600'>Whatsapp (sólo mensajes)</p>
              </dd>
              <dd className="mt-9 text-base leading-7 text-gray-600">
              Atención las 24 hs.
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
