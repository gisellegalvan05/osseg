import React from 'react'

const sedes = [
    {
      name: 'OSSEG SEDE CENTRAL C. PELLEGRINI',
      address: 'CARLOS PELLEGRINI 575 BUENOS AIRES',
      phone: '4131 2000',
      email: 'informacion@osseg.org.ar',
    },
    {
        name: 'OSSEG DELEGACIÓN LOMAS DE ZAMORA',
        address: 'MANUEL CASTRO 390',
        phone: '4292-4257',
        email: 'lomasdezamora@osseg.org.ar',
    },
    {
        name: 'OSSEG DELEGACIÓN MORÓN',
        address: '9 DE JULIO 520',
        phone: '4627-6749',
        email: 'moron@osseg.org.ar',
    },
    {
        name: 'OSSEG DELEGACIÓN QUILMES',
        address: 'TUCUMÁN 415',
        phone: '4254-0268',
        email: 'iquilmes@osseg.org.ar',
    },
    {
        name: 'OSSEG DELEGACIÓN SAN ISIDRO',
        address: 'RIVADAVIA 670',
        phone: '4732-4882',
        email: 'sanisidro@osseg.org.ar',
    },
    {
        name: 'OSSEG DELEGACIÓN SAN MARTIN',
        address: 'MATHEU 3515',
        phone: '4753-8114 | 5187-7501',
        email: 'sanmartin@osseg.org.ar',
    },
  ]

function Delegaciones() {
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
            <li key={sede.email} className="flex justify-between gap-x-6 py-2">
            <div className="flex gap-x-4 bg-white rounded-md w-96 px-10 py-5">
                <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{sede.name}</p>
                <p className="text-sm leading-6 text-gray-900">{sede.address}</p>
                <p className="text-sm leading-6 text-gray-900">{sede.phone}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{sede.email}</p>
                </div>
            </div>
            </li>
        ))}
        </ul>
            </div>
          
            <div id="columnB">
              <img src="./img/Screenshot_16.png" alt="" className='h-96'/>
            </div>
          </dl>
        </div>
      </div>
    </div>
    </>
  )
}

export default Delegaciones