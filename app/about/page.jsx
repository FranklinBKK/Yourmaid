import React from "react";
import Image from "next/image";
import Nav from "../components/Nav";

const about = () => {
  return (
    <>
      <Nav>
        <link
          rel="stylesheet"
          href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"
        />
        <div className="flex items-center justify-center min-h-screen pt-10">
          <div className="flex flex-col">
            <div className="container max-w-7xl px-4">
              <div className="flex flex-wrap justify-center text-center mb-24">
                <div className="w-full lg:w-6/12 px-4">
                  <h1 className="text-neutral-content text-4xl font-bold mb-8">
                    Meet the Dev
                  </h1>
                  <p className="text-neutral-400 text-lg font-light">
                    With over 1,000 years of combined experience, we have got a
                    well-seasoned team.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap">
                {/* Member */}
                <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                    <a href="#" class="mx-auto">
                      <Image
                        className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src="/dev/01.jpg"
                        width={360}
                        height={360}
                        alt="dev"
                      />
                    </a>
                    <div className="text-center mt-6">
                      <h1 className="text-neutral-content text-lg font-bold mb-1">
                        Thanat Onkasepol (Best)
                      </h1>
                      <div className="text-neutral-400 font-light mb-2">
                        Founder & Specialist
                      </div>
                      <div
                        className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                      >
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                        >
                          <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                        </a>
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                        >
                          <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                        </a>
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                        >
                          <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                    <a href="#" class="mx-auto">
                      <Image
                        className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src="/dev/02.jpg"
                        width={360}
                        height={360}
                        alt="dev"
                      />
                    </a>
                    <div className="text-center mt-6">
                      <h1 className="text-neutral-content text-xl font-bold mb-1">
                        Thanat Onkasepol (Best)
                      </h1>
                      <div className="text-neutral-400 font-light mb-2">
                        Frontend
                      </div>
                      <div
                        className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                      >
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                        >
                          <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                        </a>
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                        >
                          <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                        </a>
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                        >
                          <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                    <a href="#" class="mx-auto">
                      <Image
                        className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src="/dev/03.jpg"
                        width={360}
                        height={360}
                        alt="dev"
                      />
                    </a>
                    <div className="text-center mt-6">
                      <h1 className="text-neutral-content text-xl font-bold mb-1">
                        Thanat Onkasepol (Best)
                      </h1>
                      <div className="text-neutral-400 font-light mb-2">
                        Backend
                      </div>
                      <div
                        className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                      >
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                        >
                          <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                        </a>
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                        >
                          <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                        </a>
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                        >
                          <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                    <a href="#" class="mx-auto">
                      <Image
                        className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src="/dev/04.jpg"
                        width={360}
                        height={360}
                        alt="dev"
                      />
                    </a>
                    <div className="text-center mt-6">
                      <h1 className="text-neutral-content text-xl font-bold mb-1">
                        Thanat Onkasepol (Best)
                      </h1>
                      <div className="text-neutral-400 font-light mb-2">
                        Database
                      </div>
                      <div
                        className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                      >
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                        >
                          <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                        </a>
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                        >
                          <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                        </a>
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                        >
                          <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default about;
