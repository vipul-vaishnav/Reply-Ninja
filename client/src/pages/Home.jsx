import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from './../images/icons8-kite-shape-100.png';
import MenuClose from './../Icons/MenuClose';
import MenuOpen from './../Icons/MenuOpen';
import HomeIcon from './../Icons/HomeIcon';
import LoginIcon from './../Icons/LoginIcon';
import RegisterIcon from './../Icons/RegisterIcon';
import Main from './../components/Main';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const year = new Date().getFullYear();

  return (
    <>
      <div className="w-full relative">
        <header className="flex py-4 justify-between items-center">
          {/* Logo */}
          <div className="flex justify-center items-center">
            <div className="w-8 sm:w-10">
              <img src={Image} alt="kite" className="w-full" />
            </div>
            <div>
              <span className="font-bold text-tw-blue text-lg sm:text-2xl">qomments.</span>
            </div>
          </div>
          {/* Hamburger Menu */}
          <div className="sm:hidden">
            <button
              onClick={() => {
                setShowModal((prev) => !prev);
              }}
            >
              {showModal ? <MenuClose /> : <MenuOpen />}
            </button>
          </div>
          <nav className="sm:block hidden">
            <ul className="flex justify-center items-center gap-2 md:gap-3">
              <li>
                <Link
                  to="/"
                  className="font-bold flex text-lg hover:bg-tw-blue px-4 py-1 hover:text-white hover:rounded ease-in-out transition-all justify-center items-center gap-1"
                >
                  <HomeIcon />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="font-bold flex text-lg hover:bg-tw-blue px-4 py-1 hover:text-white hover:rounded ease-in-out transition-all justify-center items-center gap-1"
                >
                  <LoginIcon />
                  <span>Login</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="font-bold flex text-lg hover:bg-tw-blue px-4 py-1 hover:text-white hover:rounded ease-in-out transition-all justify-center items-center gap-1"
                >
                  <RegisterIcon />
                  <span>Register</span>
                </Link>
              </li>
            </ul>
          </nav>
          {/* Navigation Mobile */}
          {showModal && (
            <nav className="absolute w-full top-full bg-white shadow shadow-tw-darkgray rounded py-8 z-10">
              <ul className="flex flex-col gap-4 px-6">
                <li>
                  <Link
                    to="/"
                    className="font-bold flex text-xl hover:bg-tw-blue px-4 py-2 hover:text-white hover:rounded ease-in-out transition-all justify-center items-center gap-3"
                  >
                    <HomeIcon />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="font-bold flex text-xl hover:bg-tw-blue px-4 py-2 hover:text-white hover:rounded ease-in-out transition-all justify-center items-center gap-3"
                  >
                    <LoginIcon />
                    <span>Login</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="font-bold flex text-xl hover:bg-tw-blue px-4 py-2 hover:text-white hover:rounded ease-in-out transition-all justify-center items-center gap-3"
                  >
                    <RegisterIcon />
                    <span>Register</span>
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </header>
      </div>
      <Main />
      <footer className="text-sm text-tw-darkgray">
        <div>
          <ul className="flex gap-4 justify-center items-center">
            <li className="hidden sm:block">
              <Link to="/">Help Center</Link>
            </li>
            <li className="hidden sm:block">
              <Link to="/">Terms of Service</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a href="https://github.com/vipul-vaishnav/" target="_blank" rel="noopener noreferrer">
                Developers
              </a>
            </li>
          </ul>
        </div>
        <p className="py-2 text-center">
          <span className="">{year} &#169; | qomments, Inc.</span>
        </p>
      </footer>
    </>
  );
};

export default Home;
