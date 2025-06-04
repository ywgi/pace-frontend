import { Link } from "react-router-dom";
import CountUp from "../Components/CountUp";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
// import f22sImage from '../assets/f22s.jpg'; // Adjust the path if needed
// import fighters from '../assets/fighters.jpg'
import fighters2 from '../assets/fighters2.jpg'

import { ChartSpline, SendHorizontal, Zap, CircleArrowRight } from "lucide-react";


const HomePage = () => {

    return(
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow pt-20">
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
                                <div className="w-[20vw] max-w-[400px] flex flex-col justify-center items-center space-y-8 py-4 rounded-xl hover:shadow-xl transition-shadow duration-300">
                                    <ChartSpline />
                                    <div className="flex flex-col justify-center items-center space-y-4">
                                        <h1 className="font-poppins text-xl">Upload rosters <i>Instantly</i></h1>
                                        <p className="max-w-[75%] flex justify-center items-center text-center font-inter">
                                            Drag and drop your Excel roster to start processing. We'll check for missing data and guide you through any issues.                                        
                                        </p>
                                    </div>
                                </div>
                                <div className="w-[20vw] max-w-[400px] flex flex-col justify-center items-center text-center space-y-8 py-4 rounded-xl hover:shadow-xl transition-shadow duration-300">
                                    <SendHorizontal />
                                    <div className="flex flex-col justify-center items-center space-y-6">
                                        <h1 className="font-poppins text-xl">Built-In Smart Filtering</h1>
                                        <p className="max-w-[75%] flex justify-center items-center font-inter">
                                            Rules for DOR, TAFMSD, UIFs, and reenlistment status are applied automatically to every member.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-[20vw] max-w-[400px] flex flex-col justify-center items-center text-center space-y-8 py-4 rounded-xl hover:shadow-xl transition-shadow duration-300">
                                    <Zap />
                                    <div className="flex flex-col justify-center items-center space-y-4">
                                        <h1 className="font-poppins text-xl">Choose Promotion Cycle & Year</h1>
                                        <p className="max-w-[75%] flex justify-center items-center font-inter">
                                            Select your cycle and target year, and we’ll handle all the date-based rules behind the scenes.                                        
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <Link to="/how-to" >
                                    <button className="font-poppins text-white rounded-3xl bg-blue-950 px-4 py-3 hover:scale-110 transition-transform duration-300">Learn How</button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full h-[40vh] bg-blue-950 flex justify-center">
                            <div className="w-full h-full max-w-[80vw] flex flex-col justify-center items-center py-4 space-y-10">
                                <h1 className="font-poppins font-bold text-3xl text-white tracking-wide ">Personnel & Administrative Collaboration Engine (PACE)</h1>
                                <p className="font-poppins text-gray-300 max-w-[650px] text-center leading-relaxed">Our mission is to provide a modern technological solution to archaic processes, streamlining efforts and reducing time to complete tasks throughout personnel and administrative systems throughout the Air Force.</p>
                                <Link to="/about-us">
                                    <button className="font-poppins rounded-3xl bg-white px-4 py-3 hover:scale-110 transition-transform duration-300">
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="h-[40vh] w-full bg-gray-100 flex flex-col justify-center items-center py-8">
                            <div className="flex justify-center items-center">
                                <h1 className="font-poppins tracking-wide text-[4rem] text-[#137bec]">The Stats</h1>
                            </div>
                            <div className="w-full h-full max-w-[70vw] flex">
                                <div className="w-1/3 flex justify-center items-center">
                                    <div className="h-[80%] w-[80%] bg-white flex flex-col justify-center items-center space-y-10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-300">
                                        <CountUp target={1} />
                                        <p className="font-poppins font-semibold text-2xl">Bases Automating MELs</p>
                                    </div>
                                </div>
                                <div className="w-1/3 flex justify-center items-center">
                                    <div className="h-[80%] w-[80%] bg-white flex flex-col justify-center items-center space-y-10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-300">
                                        <CountUp target={70} />
                                        <p className="font-poppins font-semibold text-2xl">MEL documents processed</p>
                                    </div>
                                </div>
                                <div className="w-1/3 flex justify-center items-center">
                                    <div className="h-[80%] w-[80%] bg-white flex flex-col justify-center items-center space-y-10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-300">
                                        <span className="font-poppins font-semibold text-6xl">$<CountUp target={2317590}/></span>
                                        <p className="font-poppins font-semibold text-2xl">Estimated Yearly Savings</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div 
                            className="relative flex w-full h-[50vh] bg-cover bg-center" 
                            style={{ backgroundImage: "url('/src/assets/tech-bg.jpg')" }}
                            >
                            <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
                                <div className="h-[80%] w-[90%] max-w-7xl flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-lg backdrop-blur-sm">
                                    
                                    {/* Left Panel */}
                                    <div className="flex flex-col w-full md:w-1/2 p-6 md:p-10">
                                    <div className="mb-4">
                                        <h1 className="font-sans font-bold text-white text-4xl md:text-5xl">Here to Serve</h1>
                                    </div>

                                    <div className="mb-6">
                                        <h2 className="font-poppins text-white text-lg md:text-xl leading-relaxed">
                                        Our mission is to improve the quality of life for active service members
                                        by automating redundant tasks like document generation and streamlining
                                        outdated processes.
                                        </h2>
                                    </div>

                                    <ul className="space-y-4">
                                        <li className="text-white flex items-center">
                                        <CircleArrowRight className="text-white w-6 h-6 mr-3" />
                                        Submit suggestions for site expansion
                                        </li>
                                        <li className="text-white flex items-center">
                                        <CircleArrowRight className="text-white w-6 h-6 mr-3" />
                                        Report bugs so we can provide the best service possible
                                        </li>
                                        <li className="text-white flex items-center">
                                        <CircleArrowRight className="text-white w-6 h-6 mr-3" />
                                        Help us expand to more bases
                                        </li>
                                    </ul>
                                    </div>

                                    {/* Right Panel (Red box replacement) */}
                                    <div className="flex flex-col w-full md:w-1/2 backdrop-blur-sm p-6 md:p-10 text-white">
                                    <div className="flex-1 flex flex-col justify-center items-center text-center">
                                        <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
                                        <p className="text-lg mb-6 max-w-md">
                                        Whether you're active duty, a developer, or a supporter — your input matters.
                                        Join us in shaping tools that actually make your life easier.
                                        </p>
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-300">
                                        Join Our Mission
                                        </button>
                                    </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </main>
                <Footer />
            </div>
    )
}

export default HomePage;