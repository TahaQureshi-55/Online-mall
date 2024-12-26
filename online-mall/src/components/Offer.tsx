  'use client'
import React from "react"

 
type Offer ={
  title:string,
  description:string,
}
const SpecialOffers: React.FC =() => {
 const offers: Offer[] = [
  {
    title : 'Big Deal',
    description:'Get 50% off on all cosmetics items from 5PM to 7PM'
  },
  {
    title:'Outfits Deal',
    description:'Order 1 girls suit and get free rings',
  },
  {
    title:'Special Deal',
    description:'50% off in all slippers '
  },
 ];

const handleOfferClick = (description : string) => {
alert(description);

}
return(
  <section className="py-10 mt-4">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-800 ">Special Offer&apos;s For You</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{offers.map((offer, index) => (
    <button key={index}
    onClick={() => handleOfferClick(offer.description)}
    className="bg-slate-300 shadow-lg rounded-lg font-bold text-center hover:bg-sky-400 transition duration-300 transform hover:scale-105">
      <h3 className="text-2xl font-semibold text-amber-950">{offer.title}</h3>
      <p className="text-red-700 mt-3">{offer.description}</p>

    </button>
))}

</div>

    </div>
  </section>
)


}

export default SpecialOffers;