
function Footer() {
  return (
    <footer aria-label="Site Footer" className="bg-primary1 dark:bg-gray-900">
  <div
    className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8"
  >
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <div className="text-teal-600 dark:text-teal-300">
          <img src="/img/osseg.png" alt="" />
        </div>
      </div>

      <div
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4"
      >
        <div>
          <p className="font-medium text-white dark:text-white">Servicios</p>

          <nav aria-label="Footer Navigation - Services" className="mt-6">
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white transition hover:opacity-75 dark:text-gray-200"
                >
                  Políticas de privacidad
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-white transition hover:opacity-75 dark:text-gray-200"
                >
                 Defensa del Consumidor 
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-white transition hover:opacity-75 dark:text-gray-200"
                >
                  Baja de servicio-Arrepentimiento
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <p className="font-medium text-white dark:text-white">Información de contacto</p>

          <nav aria-label="Footer Navigation - Company" className="mt-6">
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white transition hover:opacity-75 dark:text-gray-200"
                >
                  Carlos Pellegrini 575 CABA
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-white transition hover:opacity-75 dark:text-gray-200"
                >
                  0800-777-67734   4131-2100
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-white transition hover:opacity-75 dark:text-gray-200"
                >
                  informacion@osseg.org.ar
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <p className="font-medium text-white dark:text-white">Superintendencia de Servicios de Salud</p>

          <nav aria-label="Footer Navigation - Company" className="mt-6">
            <ul className="space-y-4 text-sm">
              <li>
                <p className="text-white transition hover:opacity-75 mb-5">
                  Órgano de control de obras sociales y entidades de medicina prepaga
                </p>
                <p className="text-white transition hover:opacity-75 mb-3">
                0800 222 SALUD (72583)
                </p>
                <p className="text-white transition hover:opacity-75 mb-3">
                info@sssalud.gob.ar
                </p>
                <p className="text-white transition hover:opacity-75 mb-3">
                www.sssalud.gob.ar
                </p>
                <p className="text-white transition hover:opacity-75">
                R.N.O.S. N° 0-0090-1 

                </p>
              </li>

            </ul>
          </nav>
        </div>

        <div>
          <p className="font-medium text-white dark:text-white">Enlaces de interés</p>

          <nav aria-label="Footer Navigation - Services" className="mt-6">
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="www.sindicatodelseguro.com.ar"
                  className="text-white transition hover:opacity-75 dark:text-gray-200"
                >
                  SINDICATO DEL SEGURO
                </a>
              </li>

              <li>
                <a
                  href="www.amtras.org.ar"
                  className="text-white transition hover:opacity-75 dark:text-gray-200"
                >
                 ASOCIACION MUTUAL DE TRABAJADORES DE SEGUROS - AMTRAS
                </a>
              </li>

              <li>
                <a
                  href="www.sssalud.gob.ar"
                  className="text-white transition hover:opacity-75 dark:text-gray-200"
                >
                  SUPERINTENDENCIA DE SERVICIOS DE SALUD
                </a>
              </li>
              <li>
                <a
                  href="www.sssalud.gob.ar"
                  className="text-white transition hover:opacity-75 dark:text-gray-200"
                >
                  Cobertura Opción Osseg Res. SSSsalud 1793/20
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <p className=" text-center text-xs text-white dark:text-gray-400">
      &copy; 2022. OSSEG. Todos los derechos reservados.
    </p>
  </div>
</footer>

  )
}

export default Footer