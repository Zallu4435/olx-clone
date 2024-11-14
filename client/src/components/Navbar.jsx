import { useState, useContext, useEffect } from 'react';
import logo from '../assets/logo.jpg';
import Login from './Login';
import LogoutPopup from './Logout'; // Import LogoutPopup
import { IoIosSearch } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import MyContext from '../context/MyContext';

const Navbar = ({ setSearch }) => {

  const [loginPop, setLoginPop] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false); // State for logout popup
  const { isLogin, setIsLogin } = useContext(MyContext); // Accessing isLogin and setIsLogin from context

  // Handle showing the logout popup
  const handleLogoutClick = () => {
    setShowLogoutPopup(true);
  };

  // Confirm logout action
  const confirmLogout = () => {
    setIsLogin(false); // Perform the logout action
    setShowLogoutPopup(false); // Close the popup
  };

  const handleRefresh = () => {
    window.location.reload();
  }

  useEffect(() => {
    if(showLogoutPopup || loginPop ) {
      document.body.classList.add('no-scroll');
    }else {
      document.body.classList.remove('no-scroll')
    }
  }, [showLogoutPopup, loginPop]);

  return (
    <>
      <div className='flex items-center justify-between p-3 bg-slate-100 shadow-md w-full'>
        {/* Logo */}
        <div className='flex-shrink-0'>
          <img src={logo} alt='OLX Logo' className='w-16 h-auto cursor-pointer' onClick={handleRefresh} />
        </div>

        {/* Location Input */}
        <div className='hidden sm:flex items-center border-2 border-gray-400 rounded-md w-80 p-2 mx-4'>
          <IoIosSearch size={24} />
          <input
            type='text'
            placeholder='Search city, area or locality'
            className='w-full outline-none text-base placeholder-gray-600'
          />
          <RiArrowDropDownLine className="size-14 m-[-15px] font-thin" />
        </div>

        {/* Main Search Bar */}
        <div className='flex items-center border-2 border-gray-400 rounded-md w-[40rem] p-2 mx-6'>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type='text'
            placeholder='Find Cars, Mobile Phones and more...'
            className='w-full outline-none text-base placeholder-gray-600'
          />
          <button className='ml-2 hidden md:inline-block'>
            <IoSearchSharp className='bg-black text-white size-6' />
          </button>
        </div>

        {/* Language Selector */}
        <div className='flex items-center cursor-pointer mr-8'>
          <span className='font-medium text-base mr-1'>English</span>
          <RiArrowDropDownLine className='size-9 ml-[-10px]'/>
        </div>

        {/* Login / Logout Button */}
        <div onClick={isLogin ? handleLogoutClick : () => setLoginPop(true)} className='cursor-pointer mr-8'>
          <h1 className='font-medium text-base'>{isLogin ? 'Logout' : 'Login'}</h1>
        </div>

        {/* Sell Button */}
        <div>
          <button className='whitespace-nowrap py-2 px-6 text-base font-bold text-white rounded-full bg-gradient-to-r from-yellow-400 via-blue-500 to-teal-500 border-2 border-transparent'>
            + Sell
          </button>
        </div>
      </div>

      {/* Conditionally render Login modal based on loginPop */}
      {loginPop && <Login setLoginPop={setLoginPop} />}

      {/* Conditionally render Logout popup based on showLogoutPopup */}
      {showLogoutPopup && (
        <LogoutPopup
          confirmLogout={confirmLogout}
          closePopup={() => setShowLogoutPopup(false)}
        />
      )}
    </>
  );
};

export default Navbar;
