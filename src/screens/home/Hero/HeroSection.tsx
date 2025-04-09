import React, { useState } from "react";
import Header from "../../../components/shared/Header/Header";
import InfiniteScroll from "../infiniteScroll/InfiniteScroll";

const Hero = () => {
  return (
    <section>
      <section
        className="w-full h-[90vh] bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="w-full ">
            <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div className="max-w-lg mx-auto text-center xl:max-w-2xl pt-16">
                <div className="text-4xl font-bold text-white sm:text-4xl xl:text-6xl mb-5">
                  Find the best space in one tap
                </div>
                <p className="max-w-lg mb-10 mx-auto mt-6 text-base font-normal leading-7 text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  nunc nisl eu consectetur. Mi massa elementum odio eu viverra
                  amet.
                </p>

                {/* SEARCH BAR */}
                <div className="mt-10">
                  <Header />
                </div>
                <div className="grid max-w-md grid-cols-2 mx-auto mt-8 md:mt-16 lg:mt-24 xl:mt-32 gap-x-6 grid-col-2">
                  <div>
                    <p className="text-4xl font-bold text-white">38,942</p>
                    <p className="mt-2 text-sm font-medium text-gray-300">
                      Order Delivered
                    </p>
                  </div>

                  <div>
                    <p className="text-4xl font-bold text-white">14,344</p>
                    <p className="mt-2 text-sm font-medium text-gray-300">
                      Registered Customers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <InfiniteScroll /> */}
      </section>
    </section>
  );
};
export default Hero;
