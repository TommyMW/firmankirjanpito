"use client";
import { useState } from "react";
import img1 from '../images/accounting.png';
import eu from '../images/eu.jpg';
import us from '../images/us.jpg';
import discount from '../images/discount.png';
import efficiency from '../images/efficiency.png';
import money from '../images/money.png';
import rating from '../images/rating.png';
// import { RiVoiceprintLine } from "react-icons/ri";
// import { GrCloudComputer } from "react-icons/gr";
// import { GiClick } from "react-icons/gi";

export default function Home() {
    return (
    <div >
        <div className="relative min-h-[500px] md:h-auto">

            {/* <img src={us.src} alt="US Flag" className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[420px] ml-[4%] pt-20 hidden md:block" style={{ userSelect: 'none', opacity: 0.1 }} /> */}

            <div className="container mx-auto p-8 flex flex-col md:flex-row items-center justify-center h-full mt-32 md:mt-0">
                <div className="content z-10 md:w-1/2 text-center md:text-left">
                    <h1 className="text-6xl font-bold mb-4 text-black">Tee-Se-Itse-Kirjanpito-Ohjelmisto</h1>
                    <p className="text-lg mb-6 w-[90%] mx-auto md:mx-0 text-black">Saat automaattisesti johdon raportit, kuten taseet ja tuloslaskelmat, valmiiksi.
                      Ohjelmisto on toistaiseksi ilmainen, mutta lähiaikoina alammae veloittamaan 10€/kk tai 68€/vuosi.</p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="/demo" className="bg-black text-white px-6 py-2 rounded inline-block">
                            Katso Demo
                        </a>
                        <a href="/contact" className="bg-white text-black px-6 py-2 rounded border border-black inline-block ml-4">
                            Rekisteröidy
                        </a>
                        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg hidden" id="language-menu">
                            <a href="/fi" className="block px-4 py-2 text-black hover:bg-gray-100">Suomi</a>
                            <a href="/en" className="block px-4 py-2 text-black hover:bg-gray-100">English</a>
                            <a href="/sv" className="block px-4 py-2 text-black hover:bg-gray-100">Svenska</a>
                        </div>
                    </div>
                </div>
                
                <img src={img1.src} alt="curve" className="rounded-lg w-80 mt-20 z-10 hidden md:block" style={{userSelect: 'none'}} />
            </div>

 
            {/* <img src={eu.src} alt="EU Flag" className="absolute right-0 top-1/2 transform -translate-y-1/2 w-96 mr-[4%] pt-20 hidden md:block" style={{ userSelect: 'none', opacity: 0.1 }} /> */}
        </div>


    


        <div className="mt-[-60px] container mx-auto px-10 py-16 bg-[#fcfcfc] rounded-3xl">

            

            <div className="container mx-auto w-[80%] mb-12 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    <div className="bg-white rounded-lg p-6 shadow-md text-center flex flex-col items-center">
                        <div className="text-4xl text-green-700 mb-4" />
                        <h3 className="text-2xl font-semibold mb-3 text-black">Helppo Apu</h3>
                        <p className="text-gray-600 mb-4">Jos tarvitset apua, voit palkata ammattilaisen yhdellä klikillä meidän kautta tarkistamaan, että kaikki on tehty oikein hintaan €38/1h (veloitetaan per minuutti)</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-md text-center flex flex-col items-center">
                        <div className="text-4xl text-blue-800 mb-4" />
                        <h3 className="text-2xl font-semibold mb-3 text-black">Hae Rahoitusta</h3>
                        <p className="text-gray-600 mb-4">Voit näillä johdon raporteilla hakea rahoitusta, jossa voimme auttaa sinua myös!</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-md text-center flex flex-col items-center">
                        <div className="text-4xl text-yellow-500 mb-4" />
                        <h3 className="text-2xl font-semibold mb-3 text-black">Helppo Käyttö</h3>
                        <p className="text-gray-600 mb-4">Sinä yrittäjänä voit ladata kuittisi ja tiliotteesi ja valita sitten sopivimmalta näyttävän tunnisteen tositteellesi. Voit koko kirjanpidon itse aina tilinpäätökseen asti.</p>
                    </div>
                </div>
            </div>


            <h1 className="text-3xl font-bold mb-4 text-center text-black mt-24">
                Mikäli tarvit apua niin ole meihin yhteydessä!
            </h1>
            <p className="text-lg text-gray-600 mt-6 mb-8 text-center">
              Tämän jälkeen kokeneet kirjanpitäjämme käyvät merkinnäsi läpi ja hyväksyvät ne tai kysyvät tarvittaessa lisätietoja, jotta kirjanpitosi vastaa kansallisten kirjanpitolakien, verolakien ja veroviraston vaatimuksia, 
              kuten liitteiden lähettäminen oikeassa muodossa veroilmoituksissa.
            </p>
            

            <div className="text-center mt-16">
                <a href="/demo" className="bg-black text-white px-6 py-2 rounded inline-block">
                    Rekisteröidy
                </a>
            </div>
        </div>



        {/* <section className="bg-white py-16 px-8 md:px-16 mt-24">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-16 text-black">Why Use Draive?</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                    <div className="flex flex-col items-center p-6 rounded-lg shadow-md relative">
                        <div className="w-16 h-16 flex items-center justify-center mb-4 bg-blue-500 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <img src={efficiency.src} alt="Efficiency" className="w-12 h-12 object-contain" style={{userSelect: 'none'}} />
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg mt-8 w-full h-full">
                            <h3 className="text-xl font-semibold mb-2 text-black">Increase Efficiency</h3>
                            <p className="text-gray-600">Streamline operations to handle more orders with less wait time.</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center p-6 rounded-lg shadow-md relative">
                        <div className="w-16 h-16 flex items-center justify-center mb-4 bg-green-500 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <img src={discount.src} alt="Discount" className="w-12 h-12 object-contain" style={{userSelect: 'none'}} />
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg mt-8 w-full h-full">
                            <h3 className="text-xl font-semibold mb-2 text-black">Reduce Costs</h3>
                            <p className="text-gray-600">Lower operational costs by automating repetitive tasks.</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center p-6 rounded-lg shadow-md relative">
                        <div className="w-16 h-16 flex items-center justify-center mb-4 bg-yellow-500 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <img src={rating.src} alt="Rating" className="w-11 h-11 object-contain" style={{userSelect: 'none'}} />
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg mt-8 w-full h-full">
                            <h3 className="text-xl font-semibold mb-2 text-black">Enhance User Experience</h3>
                            <p className="text-gray-600">Provide a seamless and efficient experience for your customers.</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center p-6 rounded-lg shadow-md relative">
                        <div className="w-16 h-16 flex items-center justify-center mb-4 bg-red-500 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <img src={money.src} alt="Money" className="w-12 h-12 object-contain" style={{userSelect: 'none'}} />
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg mt-8 w-full h-full">
                            <h3 className="text-xl font-semibold mb-2 text-black">Increase Average Order Value</h3>
                            <p className="text-gray-600">Seamless upsells.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}





    </div>

    );
}
