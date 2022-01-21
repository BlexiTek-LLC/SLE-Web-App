import React from 'react';

export const LandingPage = () => {
    return (
      <div className="relative flex flex-col-reverse px-4 py-8 mx-auto lg:block lg:flex-col lg:py-32 xl:py-72 md:px-8 sm:max-w-xl bg-black md:max-w-full">
        <div className="z-0 flex justify-center  -mx-4  overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
          <img
            src="/assets/landingPage/laptop.png"
            className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
            alt=""
          />
        </div>
        <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
          <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-bold tracking-wider text-black uppercase rounded-full bg-yellow-300">
                  SLE
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                 Join the Student
                <br className="hidden md:block" />
                Loan{' '}
                <span className="inline-block text-yellow-300">
                  Experiment
                </span>
              </h2>
              <p className="text-base text-white md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
            <div className="flex items-center mt-4">
                <button
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-yellow-300 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Sign In
                </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default LandingPage;