import React, { useState } from 'react';
import Image from './../images/undraw_welcome_cats_thqn.svg';
import CustomBtn from './../components/CustomBtn';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { email, password } = formData;

  const handleChange = (e) => {
    const newFormData = {
      [e.target.name]: e.target.value,
    };

    setFormData((prev) => {
      return {
        ...prev,
        ...newFormData,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <>
      <div className="flex flex-col h-auto justify-center items-center md:h-screen md:flex-row gap-2 md:gap-0 relative">
        <CustomBtn
          text="Back To Home"
          url="/"
          styles="font-bold flex text-lg bg-tw-blue px-4 py-1 text-white rounded justify-center items-center gap-1 absolute top-5 left-0"
        />
        <div className="w-full h-full grid place-content-center pt-24 pb-12">
          <img src={Image} alt="login welcome" />
        </div>
        <div className="w-full bg-tw-blue text-tw-extraextralightgray h-full p-6 md:p-12 text-center md:text-left rounded-lg shadow overflow-hidden mb-6 sm:mb-0 sm:rounded-none">
          <h2 className="text-4xl font-extrabold">Login</h2>
          <p className="text-xl font-semibold my-3">login to your account and start commenting.</p>
          <form onSubmit={handleSubmit}>
            <div className="w-full my-4">
              <label htmlFor="email" className="block w-fit mb-1 cursor-pointer">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={handleChange}
                placeholder="Type here"
                className="input input-bordered w-full caret-tw-blue text-tw-black"
                autoComplete="off"
                required
              />
            </div>
            <div className="w-full my-4">
              <label htmlFor="password" className="block w-fit mb-1 cursor-pointer">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handleChange}
                placeholder="Type here"
                className="input input-bordered w-full caret-tw-blue text-tw-black"
                autoComplete="off"
                minLength={8}
                required
              />
            </div>
            <button className="btn mt-4 btn-block border-2 border-tw-extraextralightgray bg-transparent hover:bg-tw-extraextralightgray hover:text-tw-blue hover:border-0 transition-all">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
