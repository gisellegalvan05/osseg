import React, { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import * as Scroll from "react-scroll";

const navigation = [
  { key: "index", name: "INICIO", href: "/", current: true },
  { key: "aboutus", name: "SOBRE NOSOTROS", href: "/nosotros", current: false },
  { key: "join", name: "QUIERO AFILIARME", href: "/afiliarse", current: false },
  { key: "sites", name: "DELEGACIONES", href: "/delegaciones", current: false },
//  { key: "news", name: "NOTICIAS", href: "#", current: false },
//  { key: "phones", name: "TELÉFONOS ÚTILES", href: "#usefulNum", current: false},
//  { key: "prev", name: "PREVENCIÓN", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const history = useNavigate();
  const scroller = Scroll.scroller;

  const scrollToNews = () => {
    scroller.scrollTo("news", {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 1600,
    });
  };

  const scrollToPhones = () => {
    scroller.scrollTo("phones", {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -50,
    });
  };

  const scrollToPrev = () => {
    scroller.scrollTo("prev", {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -100,
    });
  };


  const goToHomeAndScrollNews = async () => {
    await closeMobile();
    await history("/");
    await scroller.scrollTo("news", {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 1600,
    });
  };

  const goToHomeAndScrollPrev = async () => {
    await closeMobile();
    await history("/");
    await scroller.scrollTo("prev", {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -100,
    });
  };

  const goToHomeAndScrollPhones = async () => {
    await closeMobile();
    await history("/");
    await scroller.scrollTo("phones", {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -50,
    });
  };


  const closeMobile = () => {};

  const scrollPosition = useScrollPosition();

  return (
    <Disclosure
      as="nav"
      className="bg-white drop-shadow-lg sticky top-0 z-50 content-center transition-all duration-300"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-100r px-2 sm:px-6 lg:px-8 lg:py-3">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-primary1 hover:text-primary2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-shrink-0 items-center relative">
                <img
                  className="hidden h-12 w-auto lg:block"
                  src="/img/OSSEG_2.png"
                  alt="Your Company"
                />
              </div>
              <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex xs:space-x-3 lg:space-x-5">
                    <Menu>
                      {navigation.map((item) => (
                        <div>
                          {item.key === "aboutus" ? (
                            <div>
                              <div>
                                <Menu.Button
                                  className={classNames(
                                    item.current
                                      ? "bg-transparent text-primary2 cool-link"
                                      : "text-primary1 hover:bg-gray-700 hover:bg-opacity-10 hover:text-primary2 cool-link",
                                    "mx-1 xs:px-1 xl:px-3 py-2 xs:text-xs 2xl:text-sm font-medium transition-all duration-300 inline-flex w-full justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                                  )}
                                >
                                  {item.name}
                                </Menu.Button>
                              </div>
                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items className="absolute sm:left-10per lg:left-1/4 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                  <div className="px-1 py-1 ">
                                    <Menu.Item>
                                      {({ active }) => (
                                        <button
                                          className={`${
                                            active ? "bg-gray-200" : ""
                                          } text-primary1 group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                          Historia
                                        </button>
                                      )}
                                    </Menu.Item>
                                    <Menu.Item>
                                      {({ active }) => (
                                        <button
                                          className={`${
                                            active ? "bg-gray-200" : ""
                                          } text-primary1 group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                          Autoridades
                                        </button>
                                      )}
                                    </Menu.Item>
                                  </div>
                                  <div className="px-1 py-1">
                                    <Menu.Item>
                                      {({ active }) => (
                                        <button
                                          className={`${
                                            active ? "bg-gray-200" : ""
                                          } text-primary1 group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                          Números de contacto
                                        </button>
                                      )}
                                    </Menu.Item>
                                  </div>
                                </Menu.Items>
                              </Transition>
                            </div>
                          ) : (
                            <div>
                              <NavLink
                                key={item.key}
                                to={item.href}
                                className={classNames(
                                  item.current
                                    ? "bg-transparent text-primary2 cool-link"
                                    : "text-primary1 hover:bg-gray-700 hover:bg-opacity-10 hover:text-primary2 cool-link",
                                  "mx-1 xs:px-1 xl:px-3 py-2 xs:text-xs 2xl:text-sm font-medium transition-all duration-300"
                                )}
                                aria-current={item.current ? "page" : undefined}
                              >
                                {item.name}
                              </NavLink>
                            </div>
                            
                          )}
                        </div>
                      ))}
                      
                        <div className="xs:hidden xl:block">
                        <button 
                        className = "text-primary1 hover:bg-gray-700 hover:bg-opacity-10 hover:text-primary2 cool-link mx-1 xs:px-1 xl:px-3 py-2 xs:text-xs 2xl:text-sm font-medium transition-all duration-300 uppercase"
                        onClick={location === 'home' ? scrollToPhones : goToHomeAndScrollPhones}
                        >Teléfonos útiles</button>
                        <button 
                        className = "text-primary1 hover:bg-gray-700 hover:bg-opacity-10 hover:text-primary2 cool-link mx-1 xs:px-1 xl:px-3 py-2 xs:text-xs 2xl:text-sm font-medium transition-all duration-300 uppercase"
                        onClick={location === 'home' ? scrollToPrev : goToHomeAndScrollPrev}
                        >Prevención</button>
                        <button 
                        className = "text-primary1 hover:bg-gray-700 hover:bg-opacity-10 hover:text-primary2 cool-link mx-1 xs:px-1 xl:px-3 py-2 xs:text-xs 2xl:text-sm font-medium transition-all duration-300 uppercase"
                        onClick={location === 'home' ? scrollToNews : goToHomeAndScrollNews}
                        >Noticias</button>
                        </div>
                      
                    </Menu>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a className="text-white bg-primary1 hover:bg-primary2 rounded-md px-6 py-2 text-sm font-medium uppercase hover:cursor-pointer">
                  Ingresar
                </a>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}

function ArchiveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function MoveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function MoveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}

export default Header;
