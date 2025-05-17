import Footer from "../Components/Footer";
import Header from "../Components/Header";
// import f22sImage from '../assets/f22s.jpg'; // Adjust the path if needed
// import fighters from '../assets/fighters.jpg'
import fighters2 from '../assets/fighters2.jpg'

import { ChartSpline, SendHorizontal, Zap } from "lucide-react";


const HomePage = () => {

    return(
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                    <div className="flex flex-col items-center w-full">
                        <div className="relative w-full h-[40vh]">
                            <img 
                                src={fighters2} 
                                alt="fighters background" 
                                className="w-full h-full object-cover object-[center_65%]"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h1 className="font-military text-white text-6xl ">Innovation through Automation</h1>
                            </div>
                        </div>
                        <div className="w-full max-w-[80vw] flex flex-col pt-10 pb-10">
                            <div className="flex flex-col justify-center items-center space-y-4">
                                <h1 className="text-5xl font-poppins tracking-widest text-[#137bec]">Features</h1>
                            </div>
                            <div className="flex justify-center items-center space-x-10 py-12">
                                <div className="w-[20vw] max-w-[400px] flex flex-col justify-center items-center space-y-8 py-4">
                                    <ChartSpline className="hover:scale-110"/>
                                    <div className="flex flex-col justify-center items-center space-y-4">
                                        <h1 className="font-poppins text-xl">Upload rosters <i>Instantly</i></h1>
                                        <p className="max-w-[75%] flex justify-center items-center text-center font-inter">
                                            Drag and drop your Excel roster to start processing. We'll check for missing data and guide you through any issues.                                        
                                        </p>
                                    </div>
                                </div>
                                <div className="w-[20vw] max-w-[400px] flex flex-col justify-center items-center text-center space-y-8 py-4">
                                    <SendHorizontal className="hover:scale-110"/>
                                    <div className="flex flex-col justify-center items-center space-y-6">
                                        <h1 className="font-poppins text-xl">Built-In Smart Filtering</h1>
                                        <p className="max-w-[75%] flex justify-center items-center font-inter">
                                            Rules for DOR, TAFMSD, UIFs, and reenlistment status are applied automatically to every member.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-[20vw] max-w-[400px] flex flex-col justify-center items-center text-center space-y-8 py-4">
                                    <Zap className="hover:scale-110"/>
                                    <div className="flex flex-col justify-center items-center space-y-4">
                                        <h1 className="font-poppins text-xl">Choose Promotion Cycle & Year</h1>
                                        <p className="max-w-[75%] flex justify-center items-center font-inter">
                                            Select your cycle and target year, and we’ll handle all the date-based rules behind the scenes.                                        
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-96 bg-blue-950 flex justify-center">
                            <div className="w-full h-full max-w-[80vw] flex flex-col justify-center items-center py-4 space-y-6">
                                <h1 className="font-poppins font-bold text-3xl text-white tracking-wide ">Personnel & Administrative Collaboration Engine (PACE)</h1>
                                <p className="font-poppins text-gray-300 max-w-[650px] text-center leading-relaxed">Our mission is to provide a modern technological solution to archaic processes, streamlining efforts and reducing time to complete tasks throughout personnel and administrative systems throughout the Air Force.</p>
                                <button className="font-poppins rounded-3xl bg-white px-4 py-3 hover:scale-110 transition-transform duration-300">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="h-[40vh] w-full flex items-center justify-center">
                            <div className="w-full h-full max-w-[80vw] flex">
                                <div className="w-1/3 flex items-center justify-center bg-red-400">
                                    <div className="h-[80%] w-[80%] rounded-lg border-2 border-black">

                                    </div>
                                </div>
                                <div className="w-1/3 flex items-center justify-center bg-cyan-400">
                                    <div className="h-[80%] w-[80%] rounded-lg border-2 border-black">

                                    </div>
                                </div>
                                <div className="w-1/3 flex items-center justify-center bg-green-600">
                                    <div className="h-[80%] w-[80%] rounded-lg border-2 border-black">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div 
                            className="flex w-full h-[50vh] bg-cover bg-center" 
                            style={{ backgroundImage: "url('/src/assets/tech-bg.jpg')" }}
                            >
                            Content over background image
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
    )
}

export default HomePage;