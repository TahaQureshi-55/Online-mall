import Image from "next/image";
import React from "react";

export default function Testimonials() {
  return (
    <div id="Testimonal" className=" relative container mx-auto ">
      <h2 className="font-medium text-3xl pb-4 mt-6 text-gray-400 text-center md:text-left">Testimonials</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-[300px,1fr] gap-8">
        <div className="border border-gray-300 rounded-xl grid place-items-center p-6">
          <div className="text-center flex flex-col items-center gap-4">
            <Image
              className="rounded-xl w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 object-cover"
              src="https://t3.ftcdn.net/jpg/07/62/27/58/360_F_762275894_4IzBkgRpDC7CEjP6co6fGdlN0r9ApvUN.jpg"
              alt="dp"
              height={400} width={400}
            />
            <p className="max-w-[250px] text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto numquam ex non vitae id ipsam, debitis accusantium explicabo doloremque tempora recusandae, magnam omnis laboriosam commodi! Officia saepe voluptas id magni!
            </p>
          </div>
        </div>

<div >
<div className= " border border-gray-800 bg-gray-300 min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
  <Image src="https://thumbs.dreamstime.com/b/winter-outerwear-sale-banner-winter-collection-web-poster-autumn-old-discount-stylish-fashionable-clothes-popular-84646490.jpg" alt="sale banner" 
  className="border border-blue-600 bg-cover h-[500px] rounded-2xl grid place-items-center" height={500} width={500}/>

  <button className="bg-black text-white p-2 rounded-md hover:bg-slate-700">50% discount</button>
  <h2 className="font-extrabold text-2xl text-slate-800">Winter Collection</h2>
  <p className="text-gray-600 text-[20px]">
    Starting @ $20 <b className="text-blue-500 ">Shop Now</b>
  </p>
</div>

</div>


      </div>
    </div>
  );
}




