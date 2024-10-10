import React from 'react';
// import { FaXTwitter, FaLinkedin  } from 'react-icons/fa6';

const Footer: React.FC = () => {
    return (
    <footer className="flex flex-col items-center p-5 bg-[#1d2c6b] text-black w-full">
        <div className="text-center mb-4">
            <h3 className="text-white  text-xl mb-2">Yhteystiedot</h3>
            <a href="tel:+3584578726367" className="font-bold text-white">+3584578726367</a>
            <p className="text-[#d1d1d1]">Soita meille</p>
            <a href="mailto:info@firmankirjanpito.fi" className="font-bold mt-3 text-white">info@firmankirjanpito.fi</a>
            <p className="text-[#d1d1d1]">24/7 online-tuki</p>
        </div>
        <div className="text-center mt-3 text-[#d1d1d1]" style={{ fontFamily: '"Space Mono", monospace' }}>
            &copy; 2024 FirmanKirjanPito.fi. Kaikki oikeudet pidätetään.
        </div>
    </footer>

    );
};

export default Footer;
