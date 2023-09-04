import * as Scroll from "react-scroll";

function JoinUs() {
  const scroller = Scroll.scroller;
  
  return (
    <div className="xs:w-4/5 md:w-2/3 ml-auto mr-auto mt-14">
      <div>
        <p className="text-4xl font-bold text-secondary2 py-5">Afiliaciones</p>
        <div className="flex md:flex-row xs:flex-col">
          <div className="md:w-2/3 md:mr-10">
        <div className="flex relative mt-3 mb-16 bg-white pl-3 pr-6 py-6 rounded-xl drop-shadow-xl">
            <div className=" w-5/6 pl-5">
              <dt className="text-xl font-bold leading-7 text-gray-900">
              Empleados administrativos de empresas de Seguros
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
              Solicitud de Afiliación cumplimentada en todos sus ítems, certificada por la Empresa
              </dd>
            </div>
          </div>
          <div className="flex relative mt-3 mb-16 bg-white pl-3 pr-6 py-6 rounded-xl drop-shadow-xl">
            <div className=" w-5/6 pl-5">
              <dt className="text-xl font-bold leading-7 text-gray-900">
              Productores
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
              Solicitud de Afiliación cumplimentada. Fotocopia del pago de matricula del año en curso a la incorporación
              </dd>
            </div>
          </div>
          <div className="flex relative mt-3 mb-16 bg-white pl-3 pr-6 py-6 rounded-xl drop-shadow-xl">
            <div className=" w-5/6 pl-5">
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
            <a href="/files/Afiliaciones2023.pdf" target="_blank">
                  Descargar Formulario
                </a>
            </button>
          </div>
        </div>
      </div>
      <div className="mb-14">
        <p className="text-2xl font-bold text-secondary2 py-5">Incorporación de Familiares para todas las Categorías</p>
        <ul className=" list-disc">
        <li className="my-3">  Dadas las disposiciones de la normativa vigente – Ley Nro. 23.660, Decreto Nro. 576/93, Decreto Nro. 292/95, Resolución Nro. 362/09 SSSalud, ccdtes. y ssgtes., ningún beneficiario del Sistema Nacional del Seguro de Salud podrá estar afiliado a más de un “Agente de Salud” en calidad de beneficiario titular y/o como miembro del grupo familiar primario, por lo que, en caso de detectarse que un familiar se encuentra empadronado en otra obra social, no se procederá a su incorporación y/o continuidad. Asimismo, no se considerarán familiares a cargo los hijos que se encuentren aportando como titulares en cualquier concepto.</li>

<li className="my-3">  Por todos los familiares a ingresar deberá presentarse constancia de CUIL emitida por ANSeS</li>

<li className="my-3">  Cónyuge: copia de Acta o Libreta de Matrimonio emitida por el Registro Civil y Certificación Negativa emitida por ANSeS</li>

<li className="my-3">  Concubinato: copia de Información Sumaria emitida por autoridad judicial o Unión Civil o Convivencial emitida por el Registro Civil, que acrediten más de 2 (dos) años de convivencia y Certificación Negativa emitida por ANSeS</li>

<li className="my-3">  Hijos: copia de Partida de Nacimiento   por el Registro Civil</li>

<li className="my-3">  Hijos mayores de 21 años: Para hijos de entre 21 y 25 años inclusive, se debe agregar a la Partida de Nacimiento una constancia de alumno regular emitida por establecimiento educativo oficialmente reconocido y Certificación Negativa emitida por ANSeS, a efectos de acreditar que no desempeña actividades económicas ni beneficio previsional, graciable o no, y se encuentra a exclusivo cargo del titular</li>

<li className="my-3">  Hijos discapacitados (mayores de 21 años): se debe agregar a la Partida de Nacimiento una copia del CUD (Certificado Único de Discapacidad) emitido por el Centro Nacional de Rehabilitación y Promoción de las Personas con Discapacidad (Ramsay 2250 – CABA – Te. 4782-3739) o el organismo que la citada entidad designe y Certificación Negativa emitida por ANSeS, a efectos de acreditar que no desempeña actividades económicas ni beneficio previsional, graciable o no, y se encuentra a exclusivo cargo del titular</li>

<li className="my-3">  Menores en guarda: copia de Partida de Nacimiento y copia de guarda o tutoría emitida por autoridad judicial</li>
        </ul>
      </div>
    </div>
  )
}

export default JoinUs