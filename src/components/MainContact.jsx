import { BeakerIcon } from "@heroicons/react/24/solid";

function MainContact() {
  return (
    <div className="bg-soft sm:py-10 lg:py-0">
      <div className="flex mx-auto max-w-7xl relative -top-16 px-6 lg:px-8">
        <section className="text-gray-800 text-center mx-auto">
          <div className="grid lg:gap-x-12 lg:grid-cols-3">
            <div className="mb-12 lg:mb-0">
              <div className="lg:w-80 rounded-lg shadow-lg h-full block bg-white">
                <div className="flex justify-center">
                  <div className="p-4 bg-contrast rounded-full shadow-lg inline-block -mt-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="white"
                      className="w-8 h-8 mx-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="text-xl font-semibold mb-4">Dirección</h5>
                  <p>
                    CARLOS PELEGRINI 575 C1009 <br />
                    BUENOS AIRES ARGENTINA
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12 lg:mb-0">
              <div className="lg:w-80 rounded-lg shadow-lg h-full block bg-white">
                <div className="flex justify-center">
                  <div className="p-4 bg-contrast rounded-full shadow-lg inline-block -mt-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="white"
                      className="w-8 h-8 mx-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="text-xl font-semibold mb-4">Teléfono</h5>
                  <p>0800-777-67734</p>
                </div>
              </div>
            </div>

            <div className="">
              <div className="lg:w-80 rounded-lg shadow-lg h-full block bg-white">
                <div className="flex justify-center">
                  <div className="p-4 bg-contrast rounded-full shadow-lg inline-block -mt-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="white"
                      className="w-8 h-8 mx-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="text-xl font-semibold mb-4">E-Mail</h5>
                  <p>informacion@osseg.org.ar</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MainContact;
