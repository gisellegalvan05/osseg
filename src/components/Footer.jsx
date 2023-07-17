
function Footer() {
  return (
    <footer aria-label="Site Footer" className="bg-primary1 dark:bg-gray-900">
  <div
    className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8"
  >
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
      <div>
        <div className="text-teal-600 dark:text-teal-300">
          <img className = " w-40" src="/img/osseg.png" alt="" />
        </div>
      </div>
      <div>
          <p className="font-normal leading-7 text-white dark:text-white">Carlos Pellegrini 575 (C1009ABK), CABA</p>
          <p className="font-normal leading-7 text-white dark:text-white">Teléfonos: 0800-777-67734 / 4131-2100</p>
          <img className="mt-14" src="/img/qr.png" alt="" />
          
        </div>

        <div>
          <p className="font-normal leading-7 text-white dark:text-white">Superintendencia de Servicios de Salud</p>
          <p className="font-normal leading-7 text-white dark:text-white">Órgano de control de obras sociales y entidades de medicina prepaga</p>
          <p className="font-normal leading-7 text-white dark:text-white">0800 222 SALUD (72583)</p>
          <p className="font-normal leading-7 text-white dark:text-white">info@sssalud.gob.ar</p>
          <p className="font-normal leading-7 text-white dark:text-white"><a className="hover:underline" href="www.sssalud.gob.ar">www.sssalud.gob.ar</a></p>
          <p className="font-normal leading-7 text-white dark:text-white">R.N.O.S. N° 0-0090-1</p>

        </div>

        <div>
          <nav aria-label="Footer Navigation - Services" className="leading-7">
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="www.sindicatodelseguro.com.ar" target="_blank"
                  className="font-normal leading-7 text-white transition hover:underline dark:text-gray-200"
                >
                  SINDICATO DEL SEGURO
                </a>
              </li>

              <li>
                <a
                  href="www.amtras.org.ar" target="_blank"
                  className="font-normal text-white transition hover:underline dark:text-gray-200"
                >
                 ASOCIACION MUTUAL DE TRABAJADORES DE SEGUROS - AMTRAS
                </a>
              </li>

              <li>
                <a
                  href="www.sssalud.gob.ar" target="_blank"
                  className="font-normal text-white transition hover:underline dark:text-gray-200"
                >
                  SUPERINTENDENCIA DE SERVICIOS DE SALUD
                </a>
              </li>
              <li>
                <a
                  href="/files/CARTILLA2023.pdf" target="_blank"
                  className="font-normal text-white transition hover:underline dark:text-gray-200"
                >
                  Cobertura Opción Osseg Res. SSSsalud 1793/20
                </a>
              </li>
              <li>
                <a
                  href="personal@osseg.org.ar" 
                  className="font-normal text-white transition hover:underline dark:text-gray-200"
                >
                  ¿Querés trabrajar con nosotros?
                </a>
              </li>
            </ul>
          </nav>
        </div>
    </div>

    <p className=" text-center text-xs text-white dark:text-gray-400">
      &copy; 2023. OSSEG. Todos los derechos reservados.
    </p>
  </div>
</footer>

  )
}

export default Footer