"use client"
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
 
import HeaderTop from './HeaderTop';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <div>
        <HeaderTop/>
    <nav className=" relative bg-gray-800 text-white  w-full z-10 ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center ">
      <div className="flex items-center justify-between px-6">
           {/* Logo */}
           <p className="text-white font-semibold font-serif text-l ">
             <span className="text-orange-600 font-serif font-semibold text-4xl">
               Online
             </span>
            Mall
             </p>
             </div>

       
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li className="hover:text-amber-500 transition-colors duration-200">
            <a href="#home">Home</a>
          </li>
          
          <li className="hover:text-amber-500 transition-colors duration-200">
            <a href="#products">Products</a>
          </li>
         
          <li className="hover:text-amber-500 transition-colors duration-200">
            <a href="#Testimonal">Testimonal</a>
          </li>
        </ul>

        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>

     
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-8 bg-gray-800 text-lg font-medium">
          <li>
            <a href="#home" onClick={toggleMenu} className="hover:text-amber-500 transition-colors duration-200">Home</a>
          </li>
         
          <li>
            <a href="#products" onClick={toggleMenu} className="hover:text-amber-500 transition-colors duration-200">Products</a>
          </li>
         
          <li>
            <a href="#Testimonal" onClick={toggleMenu} className="hover:text-amber-500 transition-colors duration-200">Testimonal</a>
          </li>
        </ul>
      )}
    </nav>
    </div>
  );
}

