import { Link } from 'react-router-dom';
import fighterOutline from '../assets/fjoutline.png'

const Footer = () => {
    return(
        <footer className="h-80 w-full bg-blue-950 bottom-0 flex flex-col justify-center items-center">
            <div className="flex w-[80vw] max-w-[900px]">
                <div className="flex flex-col justify-center items-center w-[33%] space-y-3">
                    <p className="font-bold font-poppins text-3xl text-white tracking-wider">Learn</p>
                    <ul>
                        <Link to="how-to">
                            <li className='font-poppins text-gray-300 hover:text-gray-100 hover:scale-110 before:transition-transform duration-300'>How To</li>
                        </Link>
                        <Link to="/about-us">
                            <li className='font-poppins text-gray-300 hover:text-gray-100 hover:scale-110 before:transition-transform duration-300'>About Us</li>
                        </Link>
                    </ul>
                </div>
                <div className='flex justify-center items-center w-[33%]'>
                    <img src={fighterOutline}
                        className='h-[200px]'/>
                </div>
                <div className="flex flex-col justify-center items-center w-[33%] space-y-3">
                    <p className="font-bold font-poppins text-2xl text-white text-center">Document Generators</p>
                    <ul>
                        <Link to="/documents/initial-mel">
                            <li className='font-poppins text-gray-300 hover:text-gray-100 hover:scale-110 before:transition-transform duration-300'>Initial MEL</li>
                        </Link>
                        <Link to="/documents/final-mel">
                            <li className='font-poppins text-gray-300 hover:text-gray-100 hover:scale-110 before:transition-transform duration-300'>Final MEL</li>
                        </Link>
                    </ul>
                </div>
            </div>
            <div className='flex pt-12 w-[80vw] max-w-[900px]'>
                <div className='flex justify-center items-center w-[100%]'>
                    <h1 className='font-military text-white tracking-widest text-5xl'><span className='font-sans'>© </span>PACE</h1>
                </div>
            </div>
        </footer>
    );
}

export default Footer;