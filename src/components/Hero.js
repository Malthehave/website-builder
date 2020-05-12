import React from 'react';

const Hero = () => {
    return (
        <div className="relative bg-teal-400" style={{ borderRadius: "100%/0 0 140px 140px", height: "40rem" }}>
            <div className="relative z-10 pt-6 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div className="sm:text-center lg:text-left">
                        <h2
                            className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                            Lorem ipsum dollar sit amet
                            <br className="xl:hidden" />
                            <span className="text-indigo-500">bla bla.</span>
                        </h2>
                        <p
                            className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                            Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div>
                                <a href="#"
                                    className="w-full flex items-center justify-center px-8 py-3 text-base leading-6 font-medium rounded-md shadow text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:shadow-outline md:py-4 md:text-lg md:px-10">
                                    Get Started
                                </a>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <a href="#"
                                    className="w-full flex items-center justify-center px-8 py-3 text-base leading-6 font-medium rounded-md shadow text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 md:py-4 md:text-lg md:px-10">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img className="object-cover lg:w-full lg:h-full"
                    src="https://sailnear.eu/media/logo.svg" alt="" />
            </div>
        </div>
    );
}

export default Hero;
