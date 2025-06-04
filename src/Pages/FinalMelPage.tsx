// import Footer from "../Components/Footer";
// import Header from "../Components/Header";

// const FinalMelPage = () => {
//     return (
//         <div className="flex flex-col min-h-screen">
//             <Header />
//             <main className="flex-grow">

//             </main>
//             <Footer />
//         </div>
//     );
// }

// export default FinalMelPage;

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

const FinalMelPage = () => {

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-20">
                <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
                    <div className="text-center max-w-2xl">
                        <h1 className="text-5xl font-poppins tracking-widest text-[#137bec] mb-6">Final Mel: Coming Soon</h1>
                        
                        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                            Advanced analytics and automated reporting for Air Force personnel management. 
                            Building on Initial Mel's foundation to deliver comprehensive workflow automation.
                        </p>
                        
                        <div className="space-y-4">
                            <p className="text-lg text-gray-600">
                                We're working hard to bring you the next evolution in military data processing.
                            </p>
                            
                            <Link 
                                to="/documents/initial-mel" 
                                className="inline-block bg-[#137bec] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                            >
                                Try Initial Mel Now
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default FinalMelPage;