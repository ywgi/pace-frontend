import { Link } from 'react-router-dom';
import afnbgn from '../assets/air_force_no_bg_navy.png'


const Header = () => {
    return (
        <header className="h-20 bg-white fixed top-0 left-0 right-0 z-50 border-b-2 border-gray-600">
            <div className="flex h-full">
                <div className="w-[20vw] bg-white flex justify-center items-center">
                    <img className="max-h-[60px] pr-4" src={afnbgn}/>
                    <div className="w-[2px] h-[75%] bg-gradient-to-b from-transparent via-blue-950 to-transparent"></div>
                    <h1 className='font-military text-blue-950 text-3xl pl-4'>PACE</h1>
                </div>
                <div className="w-[70vw] flex justify-center items-center">
                    <div className="flex justify-center items-center">
                        <nav className="flex justify-center items-center space-x-10">
                            <ul className='flex justify-center items-center space-x-10'>
                                <li>
                                    <Link to="/"
                                        className='inline-block font-sans font-semibold text-xl text-blue-700 hover:scale-110 transition-transform duration-300'>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <div className="relative">
                                        <div className="cursor-pointer peer font-sans font-semibold text-xl text-blue-700 hover:scale-110 transition-transform duration-300">Reports</div>
                                        <div className="absolute top-full left-0 w-40 bg-gray-200 text-black rounded-md shadow-lg z-50
                                                        hidden peer-hover:flex hover:flex flex-col">
                                            <Link to="/documents/initial-mel"
                                                className='inline-block px-4 py-2 font-sans text-lg hover:bg-blue-700 hover:text-white hover:rounded-md'>
                                                    Initial Mel
                                            </Link>
                                            <Link to="/documents/final-mel"
                                                className='inline-block px-4 py-2 font-sans text-lg hover:bg-blue-700 hover:text-white hover:rounded-md'>
                                                Final Mel
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <Link to="/how-to"
                                        className='inline-block font-sans font-semibold text-xl text-blue-700 hover:scale-110 transition-transform duration-300'>
                                        How To
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about-us"
                                        className='inline-block font-sans font-semibold text-xl text-blue-700 hover:scale-110 transition-transform duration-300'>
                                        About Us
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* <div className="w-[10vw] flex justify-center items-center">
                    <button className="rounded-md border-2 border-blue-700 p-3 hover:bg-blue-700 hover:text-white">
                        Contact Us
                    </button>
                </div> */}
            </div>
        </header>
    );
}

export default Header;