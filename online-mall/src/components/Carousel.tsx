
import Image from "next/image";
import React from "react";

export default function Carousel() {
  return (
    <div>
      <section className="bg-gradient-to-r from-gray-700 to-grey-700 rounded-lg bottom-3 relative">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 xl:px-6 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 h-full mt-9">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-grey-700 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <Image
                  src="https://img.freepik.com/premium-photo/modern-wardrobe-staples-arrangement_1313031-877.jpg?semt=ais_hybrid"
                  alt="item 1"
                  className="absolute inset-0  h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={300}
                width={300}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4  font-serif">
                  Fashion for girls 
                </h3>
              </a>
            </div>

            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-grey-700 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <Image
                  src="https://miro.medium.com/v2/resize:fit:680/1*vjC_pct4W4dubWkrnyDSgQ.jpeg"
                  alt="item 2"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  height={300}
                  width={300}
               />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 font-serif">
                  Fashion for boys
                </h3>
              </a>

              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJLmeUIWtOWkxGSIj3CfW3iPi9hUgpvmIMcw&s"
                    alt="item3"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    height={300}
                    width={300}
                 />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 font-serif">
                    Slippers
                  </h3>
                </a>

                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <Image
                    src="https://i.ytimg.com/vi/vm6i61jI0Ys/maxresdefault.jpg"
                    alt="item4"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    height={300}
                    width={300}
                 />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 font-serif">
                    Electronics
                  </h3>
                </a>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 md:col-span-2 rounded-lg bg-gradient-to-r from-black to-grey-700 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <Image
                  src="https://www.mensjournal.com/.image/t_share/MjAzMjA3Mzc0NTUzNDkxMDEx/mj-best-trends-jeans2.jpg"
                  alt="item5"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  height={300}
                  width={300}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 font-serif">
                  Boy&apos;s wear
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

