"use client";
import React, { useEffect, useState } from 'react';
import logo from '../images/logo.png';
import fin from '../images/fin.png';
// import { FaTelegram, FaXTwitter  } from 'react-icons/fa6';


const Navbar: React.FC = () => {

const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const [isOpen, setIsOpen] = useState(false);

const toggleDropdown = () => {
    setIsOpen(!isOpen);
};
    return (
        
        <div className='z-10 top-0 mt-4 w-full'>
            <header className="z-10 top-0 flex justify-between items-center px-4 md:px-10 py-4 bg-[#ffffff]">
                <a href="/" className="text-3xl md:ml-[19%] ml-5% text-black">
                    <img src={logo.src} alt="FirmanKirjanPito.fi" className="h-10" style={{userSelect: 'none'}} />
                </a>
                
                <button className="md:hidden text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                
                <div className="hidden md:flex mr-[19%] md:space-x-4">
                    <a href="/demo" className="text-lg text-black">Pyydä Tarjous</a>
                    <a href="/contact" className="text-lg text-black">Rekisteröidy</a>
                    

                    <div className="relative ml-4">
                        <img 
                            src={fin.src} 
                            alt="Finnish Flag" 
                            className="w-8 h-8 rounded-full cursor-pointer ml-1" 
                            onClick={toggleDropdown} 
                        />
                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
                                <a href="/fi" className="block px-4 py-2 text-black hover:bg-gray-100">Suomi</a>
                                <a href="/en" className="block px-4 py-2 text-black hover:bg-gray-100">English</a>
                                <a href="/sv" className="block px-4 py-2 text-black hover:bg-gray-100">Svenska</a>
                            </div>
                        )}
                    </div>


                    
                </div>
            </header>
            
            {mobileMenuOpen && (
                <div className="md:hidden bg-white py-0 px-4">
                    <a href="/demo" className="block py-0 text-lg text-right text-black">Pyydä Tarjous</a>
                    <a href="/contact" className="block py-2 text-lg text-right text-black">Rekisteröidy</a>
                </div>
            )}
        </div>

    );
};

export default Navbar;
