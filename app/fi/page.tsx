"use client";
import { useState } from "react";
import img1 from '../../images/drive_thru.jpg';
import { RiVoiceprintLine } from "react-icons/ri";
import { GrCloudComputer } from "react-icons/gr";
import { GiClick } from "react-icons/gi";

export default function Home() {
    return (
    <div >
        <div className="container h-[900px] mx-auto p-8 flex flex-col md:flex-row items-center justify-center relative overflow-hidden">
            <div className="content z-10 md:w-1/2 text-center md:text-left">
                <h1 className="text-6xl font-bold mb-4">Suomi Automate Drive-Thrus with AI</h1>
                <p className="text-lg mb-6 w-[90%] mx-auto md:mx-0">Draive offers a seamless solution for automating drive-thrus with AI technology to reduce costs and improve efficiency.</p>
                <div className="flex justify-center md:justify-start space-x-4">
                    <a href="/demo" className="bg-black text-white px-6 py-2 rounded inline-block">
                    View Demo
                    </a>
                    <a href="/contact" className="bg-white text-black px-6 py-2 rounded border border-black inline-block ml-4">
                    Learn More
                    </a>
                </div>
            </div>
            
            <img src={img1.src} alt="curve" className="rounded-lg w-64 mt-8 md:mt-0" style={{userSelect: 'none'}} />
        </div>

    


        <div className="mt-0 container mx-auto px-10 py-16 bg-zinc-50 rounded-3xl w-[50%]">
            <h1 className="text-4xl font-bold mb-4 text-center">
                Increase efficiency, reduce costs and improve user experience with AI.
            </h1>
            <p className="text-lg text-gray-600 mt-6 mb-8 text-center">
                No build-out fees. Seamless integration to existing drive-thru systems.
            </p>
            

            <div className="container mx-auto w-[80%] mb-12 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    <div className="bg-white rounded-lg p-6 shadow-md text-center flex flex-col items-center">
                        <GrCloudComputer className="text-4xl text-green-700 mb-4" />
                        <h3 className="text-2xl font-semibold mb-3">No Upfront Costs</h3>
                        <p className="text-gray-600 mb-4">Our technology seamlessly integrates with existing drive-thru systems, saving you time and money.</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-md text-center flex flex-col items-center">
                        <RiVoiceprintLine className="text-4xl text-blue-800 mb-4" />
                        <h3 className="text-2xl font-semibold mb-3">Your Menu Items</h3>
                        <p className="text-gray-600 mb-4">For no cost, our technology is trained to understand all of your menu items.</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-md text-center flex flex-col items-center">
                        <GiClick className="text-4xl text-yellow-500 mb-4" />
                        <h3 className="text-2xl font-semibold mb-3">Easy Use</h3>
                        <p className="text-gray-600 mb-4">Activate the AI with a simple click to handle all of your orders.</p>
                    </div>
                </div>
            </div>

            

            <div className="text-center">
                <a href="/demo" className="bg-black text-white px-6 py-2 rounded inline-block">
                    View Demo
                </a>
            </div>
        </div>



        <section className="bg-white py-16 px-8 md:px-16 mt-24">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-16">Why Use Draive?</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
                        <div className="w-16 h-16 flex items-center justify-center mb-4 bg-blue-500 text-white rounded-full">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 3.5a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h3zM10 1a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-7A.5.5 0 017 1h3zM10 14.5a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h3zM10 12a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-2A.5.5 0 017 12h3z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Increase Efficiency</h3>
                        <p className="text-gray-600">Streamline operations to handle more orders with less wait time.</p>
                    </div>
                    
                    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
                        <div className="w-16 h-16 flex items-center justify-center mb-4 bg-green-500 text-white rounded-full">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 1a.5.5 0 01.5.5v12a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5V2A.5.5 0 012 1h8zM10 0H2A1 1 0 001 1v12a1 1 0 001 1h8a1 1 0 001-1V1a1 1 0 00-1-1zM18 1h-8a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h8a.5.5 0 00.5-.5V1a.5.5 0 00-.5-.5zM18 0h-8a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V1a1 1 0 00-1-1z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Reduce Costs</h3>
                        <p className="text-gray-600">Lower operational costs by automating repetitive tasks.</p>
                    </div>
                    
                    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
                        <div className="w-16 h-16 flex items-center justify-center mb-4 bg-yellow-500 text-white rounded-full">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 7a4 4 0 014-4h4a4 4 0 014 4v4a4 4 0 01-4 4H8a4 4 0 01-4-4V7zm4 6a3.99 3.99 0 01-3-1.17A3.99 3.99 0 014 11V7a3.99 3.99 0 01.83-2.83A3.99 3.99 0 017 4h6a3.99 3.99 0 012.83 1.17A3.99 3.99 0 0116 7v4a3.99 3.99 0 01-1.17 2.83A3.99 3.99 0 0114 14H8z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Enhance User Experience</h3>
                        <p className="text-gray-600">Provide a seamless and efficient experience for your customers.</p>
                    </div>
                    
                    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
                        <div className="w-16 h-16 flex items-center justify-center mb-4 bg-red-500 text-white rounded-full">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 18a7 7 0 01-6.35-4.92c.22-.66.48-1.29.8-1.87a7.0007 7.0007 0 018.1-2.1A6.978 6.978 0 0110 18zM3.59 13.17a6.978 6.978 0 011.55-2.49A7.002 7.002 0 0110 5a7.002 7.002 0 015.9 5.67c-.24.34-.48.69-.75 1A6.978 6.978 0 0110 18a6.978 6.978 0 01-6.35-4.92z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Increase Average Order Value</h3>
                        <p className="text-gray-600">Seamless upsells.</p>
                    </div>
                </div>
            </div>
        </section>





    </div>

    );
}
