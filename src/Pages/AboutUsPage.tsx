// import Footer from "../Components/Footer";
// import Header from "../Components/Header";

// const AboutUsPage = () => {
//     return (
//         <div className="flex flex-col min-h-screen">
//             <Header />
//             <main className="flex-grow">

//             </main>
//             <Footer />
//         </div>
//     );
// }

// export default AboutUsPage;

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

const AboutUsPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-20">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-poppins tracking-widest text-[#137bec] mb-6">About Us</h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            We're on a mission to modernize and streamline Air Force administrative processes, 
                            starting with workflow optimization for active service members.
                        </p>
                    </div>

                    {/* Mission Section */}
                    <div className="mb-16">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Mission</h2>
                            <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
                                To revolutionize how the Air Force handles administrative tasks by replacing outdated, 
                                time-consuming processes with intelligent, automated solutions that allow service members 
                                to focus on what matters most—their mission and professional development.
                            </p>
                        </div>
                    </div>

                    {/* What We Do Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What We Do</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#137bec]">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Current Focus: Personnel Management</h3>
                                <p className="text-gray-600 mb-4">
                                    We've started by tackling one of the most fundamental yet archaic processes—roster management 
                                    and personnel data processing. Our Initial Mel system transforms complex Excel-based workflows 
                                    into streamlined, automated processes.
                                </p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center"><span className="text-[#137bec] mr-2">✓</span>Automated data validation and processing</li>
                                    <li className="flex items-center"><span className="text-[#137bec] mr-2">✓</span>Elimination of manual data entry errors</li>
                                    <li className="flex items-center"><span className="text-[#137bec] mr-2">✓</span>Significant time savings for administrative staff</li>
                                    <li className="flex items-center"><span className="text-[#137bec] mr-2">✓</span>Real-time processing and updates</li>
                                </ul>
                            </div>
                            
                            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">The Problem We're Solving</h3>
                                <p className="text-gray-600 mb-4">
                                    For too long, Air Force personnel have been burdened with antiquated processes that:
                                </p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center"><span className="text-red-500 mr-2">✗</span>Consume countless hours of manual work</li>
                                    <li className="flex items-center"><span className="text-red-500 mr-2">✗</span>Are prone to human error</li>
                                    <li className="flex items-center"><span className="text-red-500 mr-2">✗</span>Lack integration with modern systems</li>
                                    <li className="flex items-center"><span className="text-red-500 mr-2">✗</span>Frustrate dedicated service members</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Future Vision Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Vision for the Future</h2>
                        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
                            Personnel management is just the beginning. We envision a comprehensive ecosystem of 
                            automated solutions that will transform every aspect of Air Force administration.
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">📋</div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Training & Certification Management</h3>
                                <p className="text-gray-600 text-sm">
                                    Automated tracking of certifications, training requirements, and career development milestones.
                                </p>
                            </div>
                            
                            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">📊</div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Performance Evaluation Systems</h3>
                                <p className="text-gray-600 text-sm">
                                    Streamlined performance reviews, feedback collection, and promotion tracking systems.
                                </p>
                            </div>
                            
                            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">🗓️</div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Leave & Scheduling Automation</h3>
                                <p className="text-gray-600 text-sm">
                                    Intelligent leave request processing and duty scheduling optimization.
                                </p>
                            </div>
                            
                            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">🏢</div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Assignment & PCS Management</h3>
                                <p className="text-gray-600 text-sm">
                                    Automated assignment matching and permanent change of station coordination.
                                </p>
                            </div>
                            
                            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">💰</div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Financial & Benefits Processing</h3>
                                <p className="text-gray-600 text-sm">
                                    Streamlined travel vouchers, pay adjustments, and benefits administration.
                                </p>
                            </div>
                            
                            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">🔐</div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Security Clearance Tracking</h3>
                                <p className="text-gray-600 text-sm">
                                    Automated monitoring of clearance status, renewal requirements, and compliance.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why It Matters Section */}
                    <div className="mb-16">
                        <div className="bg-gray-50 rounded-xl p-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Why This Matters</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-[#137bec] mb-4">For Service Members</h3>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start">
                                            <span className="text-[#137bec] mr-2 mt-1">▸</span>
                                            <span>More time for mission-critical tasks and professional development</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#137bec] mr-2 mt-1">▸</span>
                                            <span>Reduced frustration with administrative bureaucracy</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#137bec] mr-2 mt-1">▸</span>
                                            <span>Faster processing of requests and applications</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#137bec] mr-2 mt-1">▸</span>
                                            <span>Increased accuracy in personnel records and transactions</span>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <h3 className="text-xl font-semibold text-[#137bec] mb-4">For the Air Force</h3>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start">
                                            <span className="text-[#137bec] mr-2 mt-1">▸</span>
                                            <span>Significant cost savings through automation</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#137bec] mr-2 mt-1">▸</span>
                                            <span>Enhanced operational efficiency and readiness</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#137bec] mr-2 mt-1">▸</span>
                                            <span>Better data integrity and reporting capabilities</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#137bec] mr-2 mt-1">▸</span>
                                            <span>Improved morale and retention through reduced administrative burden</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Our Commitment Section */}
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Commitment</h2>
                        <div className="max-w-4xl mx-auto">
                            <p className="text-lg text-gray-700 mb-6">
                                We understand that change in military environments requires careful consideration, 
                                rigorous testing, and unwavering reliability. Our development process emphasizes:
                            </p>
                            <div className="grid md:grid-cols-4 gap-4">
                                <div className="p-4">
                                    <div className="text-2xl mb-2">🔒</div>
                                    <h4 className="font-semibold text-gray-800">Security First</h4>
                                    <p className="text-sm text-gray-600">Built with military-grade security standards</p>
                                </div>
                                <div className="p-4">
                                    <div className="text-2xl mb-2">⚡</div>
                                    <h4 className="font-semibold text-gray-800">Reliability</h4>
                                    <p className="text-sm text-gray-600">99.9% uptime with robust error handling</p>
                                </div>
                                <div className="p-4">
                                    <div className="text-2xl mb-2">👥</div>
                                    <h4 className="font-semibold text-gray-800">User-Centric</h4>
                                    <p className="text-sm text-gray-600">Designed by and for military personnel</p>
                                </div>
                                <div className="p-4">
                                    <div className="text-2xl mb-2">🚀</div>
                                    <h4 className="font-semibold text-gray-800">Continuous Innovation</h4>
                                    <p className="text-sm text-gray-600">Always evolving to meet new challenges</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center bg-[#137bec] text-white rounded-xl p-8">
                        <h2 className="text-2xl font-bold mb-4">Ready to Modernize Your Workflow?</h2>
                        <p className="text-lg mb-6 opacity-90">
                            Join us in revolutionizing Air Force administrative processes. Start with our Initial Mel system today.
                        </p>
                        <Link 
                            to="/initial-mel" 
                            className="inline-block bg-white text-[#137bec] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Get Started Now
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default AboutUsPage;