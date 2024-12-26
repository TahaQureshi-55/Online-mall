import React from "react";
import Image from "next/image";
export default function Banner() {
  return (
    <div className="relative overflow-hidden font-sans px-6 py-20  ">
      <div className="absolute inset-0 opacity-100">
        <Image 
          src="https://t4.ftcdn.net/jpg/09/64/40/07/360_F_964400714_a6SbNtw7DYQYPjOUufPKhUbo3dIGRp22.jpg"
          alt="banner"
          className="  h-full w-full object-center"
          width={2000}
          height={2000}
        />
      </div>
      <div className="relative  container mx-auto flex-col md:bottom-1 justify-center items-center text-center ">
        <h2 className="text-white font-bold mb-4 relative">Upto 50% off</h2>
        <p className="text-white font-serif md:ml-[220px]  text-lg text-center mb-34 bottom-2   max-w-xl">
          Don&apos;t miss the deal
        </p>
        <button
          type="button"
          className="bg-sky-600  relative rounded-full shadow-lg text-sm font-semibold py-3 px-6 text-white hover:bg-black transition duration-300"
        >
          SHOP NOW!!
        </button>
      </div>
    </div>
  );
}
