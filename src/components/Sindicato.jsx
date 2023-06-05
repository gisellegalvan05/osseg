
function Sindicato() {
  return (
    <>
      <div className=" w-full relative xs:h-30r xs:flex">
        <img
          src="./img/movilizacion.png"
          alt=""
          className=" w-full object-cover"
        />

          <div className="absolute top-1/3 flex md:flex md:w-1/2 md:flex-row xs:flex-col xs:m-auto xs:left-0 xs:right-0 xs:w-3/4">
            <div className="lg:w-2/3 sm:w-full">
              <img src="/img/logo_ssra_2022.png" alt="" />
              <p className="text-white text-lg mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                impedit harum reprehenderit vel sit neque modi.
              </p>
            </div>
            <div className="self-center md:left-1/4 relative xs:top-6 md:top-0">
              <button className="bg-contrast py-2 px-9 text-white text-lg rounded-lg hover:bg-contrast1-600">
                Ir al Sitio
              </button>
            </div>
          </div>
      </div>
    </>
  );
}

export default Sindicato;
