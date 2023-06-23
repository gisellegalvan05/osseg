import * as Scroll from "react-scroll";

function JoinUs() {
  const scroller = Scroll.scroller;
  
  return (
    <div className="xs:w-4/5 md:w-2/3 ml-auto mr-auto mt-14">
      <div>
        <p className="text-4xl font-bold text-secondary2 py-5">Afiliaciones</p>
        <p className=" py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tenetur consequuntur perferendis dolor quasi. Rerum repellat est voluptates suscipit, deserunt veniam nihil optio ullam, nulla, dolorum voluptas. Aspernatur, molestiae veritatis?</p>
        <div className="flex md:flex-row xs:flex-col">
          <div className="md:w-2/3 md:mr-10">
        <div className="flex relative mt-3 mb-16 bg-white pl-3 pr-6 py-6 rounded-xl drop-shadow-xl hover:-translate-y-3 duration-200">
            <div className=" w-4/5">
              <dt className="text-xl font-bold leading-7 text-gray-900">
              Empleados administrativos de empresas de Seguros
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
              Solicitud de Afiliación cumplimentada en todos sus ítems, certificada por la Empresa
              </dd>
            </div>
          </div>
          <div className="flex relative mt-3 mb-16 bg-white pl-3 pr-6 py-6 rounded-xl drop-shadow-xl hover:-translate-y-3 duration-200">
            <div className=" w-4/5">
              <dt className="text-xl font-bold leading-7 text-gray-900">
              Productores
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
              Solicitud de Afiliación cumplimentada. Fotocopia del pago de matricula del año en curso a la incorporación
              </dd>
            </div>
          </div>
          <div className="flex relative mt-3 mb-16 bg-white pl-3 pr-6 py-6 rounded-xl drop-shadow-xl hover:-translate-y-3 duration-200">
            <div className=" w-4/5">
              <dt className="text-xl font-bold leading-7 text-gray-900">
              Jubilados / Pensionados
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
              Solicitud de Afiliación cumplimentada. Recibo de Haber Jubilatorio o Pensión
              </dd>
            </div>
          </div>
          </div>
          <div className="md:w-1/3 pt-5">
            <button className=" bg-primary1 hover:bg-primary2 rounded-2xl text-white py-5 px-8" >
            Descargar Formulario
            </button>
          </div>
        </div>
      </div>
      <div className="mb-14">
        <p className="text-2xl font-bold text-secondary2 py-5">Incorporación de Familiares para todas las Categorías</p>
        <ul className=" list-disc">
          <li className="my-3">
          Cónyuge: fotocopia de partida o libreta de matrimonio, SIJYP extendido por ANSES.Hijos menores de 21 años: fotocopia de partida de nacimiento.
          </li>
          <li className="my-3">
          Hijos mayores de 21 años: fotocopia de partida de nacimiento, certificado de estudios como alumno regular en establecimiento oficial u oficialmente reconocido, SIJYP extendido por ANSES del mismo a fin de acreditar no tener actividad laboral.
          </li>
          <li className="my-3">
          Hijos discapacitados mayores de 21 años: certificado de discapacidad otorgado por el Centro Nacional de Rehabilitación (Ramsay 2250 Cap. Fed. Telef. 4782-3739) u organismo habilitado a tal fin en cercanías del domicilio del titular, SIJYP extendido por ANSES, a fin de demostrar no tener jubilación/pensión.Concubinos: información sumaria judicial con dos testigos que acredite una convivencia mayor a dos años.
          </li>
          <li className="my-3">
          Menores en guarda: fotocopia de la guarda o tutoría judicial, fotocopia de la partida de nacimiento del menor y fotocopia del D.N.I
          </li>
        </ul>
      </div>
    </div>
  )
}

export default JoinUs