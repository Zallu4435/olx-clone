import { useState } from 'react';
import guitar from '../assets/guitar.jpg';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from "react-icons/fc";
import { IoPhonePortraitOutline } from "react-icons/io5";


const Login = ({ setLoginPop, setRegister }) => {
  const navigate = useNavigate();
  // const [selectedSection, setSelectedSection] = useState('');

  const [activeImage, setActiveImage] = useState(0);
  const images = [guitar, guitar, guitar]; // Replace with more images as needed

  const goToPreviousImage = () => {
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNextImage = () => {
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Google login hook
  const googleLogin = useGoogleLogin({
    onSuccess: (response) => {
      console.log('Google login successful:', response);
      // Handle success (e.g., send the token to your backend)
    },
    onError: (error) => {
      console.log('Google login error:', error);
    }
  });

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

      {/* Modal container */}
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md h-[auto] max-h-[80vh]">
            <h1 onClick={() => { setLoginPop(false); }} className='font-semibold text-2xl cursor-pointer text-right mr-3 pt-2'>X</h1>
            <div className="bg-white px-4 py-3 sm:p-4">
              {/* Carousel Wrapper */}
              <div className="relative flex flex-col items-center mb-3">
                <div className="flex flex-col items-center justify-center w-full">
                  {/* Image */}
                  <img
                    src={images[activeImage]}
                    alt="Guitar"
                    className="w-32 sm:w-40 md:w-48 h-auto"
                  />

                  {/* Content */}
                  <div className="ml-4 text-center mt-2 sm:mt-1">
                    <h3 className="text-md font-semibold text-gray-900">
                      Help us become one of the safest places <br /> to buy and sell
                    </h3>
                  </div>
                </div>

                {/* Arrow Buttons */}
                <div className="absolute top-1/2 left-0 right-0 flex justify-between px-2">
                  <button onClick={goToPreviousImage} className="bg-transparent text-gray-600 p-4 rounded-full shadow-lg" style={{ fontSize: '20px' }}>&lt;</button>
                  <button onClick={goToNextImage} className="bg-transparent text-gray-600 p-4 rounded-full shadow-lg" style={{ fontSize: '20px' }}>&gt;</button>
                </div>

                {/* Dot Navigation */}
                <div className="absolute bottom-[-18px] left-0 right-0 flex justify-center space-x-2">
                  {images.map((_, index) => (
                    <button key={index} onClick={() => setActiveImage(index)} className={`w-2 h-2 rounded-full ${activeImage === index ? 'bg-blue-600' : 'bg-gray-400'}`}></button>
                  ))}
                </div>
              </div>

              {/* Modal Buttons */}
              <div className="mt-6 space-y-2">
                {/* Phone Button */}
                <div className="mb-3">
                  <button className="w-full py-2 px-4 border-2 border-gray-300 rounded-md flex items-center justify-center" onClick={() => { navigate('/login', {state: {section: 'phone'}}) }}>
                    <div className="flex items-center justify-start w-full">
                      <IoPhonePortraitOutline className='size-6 mr-4'/>
                    <span className="text-center">Continue with Phone</span>
                    </div>
                  </button>
                </div>

                {/* Google Button */}
                <div className="mb-3">
                  <button className="w-full py-2 px-4 border-2 border-gray-300 rounded-md flex items-center justify-center" onClick={googleLogin}>
                    <div className="flex items-center justify-start w-full">
                      <FcGoogle className='size-6'/>
                    <span className="text-center ml-[80px]">Continue with Google</span>
                    </div>
                  </button>
                </div>

                {/* OR Divider */}
                <div className="my-4 flex justify-center">
                  <span className="text-gray-500">OR</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex justify-center">
                <p to="" className='underline cursor-pointer' onClick={() => {(navigate('/login', {state: {section: 'email'}}))}}>Login with Email</p>
              </div>

              {/* Privacy Info */}
              <div className="text-center text-sm text-gray-600 mt-6">
                <p className='mb-4'>All your personal details are safe with us.</p>
                <p>If you continue, you are accepting <span className='text-blue-600'>OLX Terms and Conditions and Privacy Policy</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
