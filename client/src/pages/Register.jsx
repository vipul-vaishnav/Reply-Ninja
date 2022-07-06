import React, { useState } from 'react';
import Image from './../images/undraw_mobile_login_re_9ntv.svg';
import CustomBtn from './../components/CustomBtn';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_cnf: '',
    agree_tnc: false,
  });

  const { name, email, password, password_cnf, agree_tnc } = formData;

  const handleChange = (e) => {
    const newFormData = {
      [e.target.name]: e.target.value !== 'on' ? e.target.value : e.target.checked,
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
        <div className="w-full bg-tw-blue text-tw-extraextralightgray h-full p-6 md:p-12 rounded-lg shadow overflow-hidden mb-6 sm:mb-0 sm:rounded-none">
          <h2 className="text-4xl font-extrabold text-center md:text-left">Register</h2>
          <p className="text-xl font-semibold text-center md:text-left my-3">create an account and start commenting.</p>
          <form onSubmit={handleSubmit}>
            <div className="w-full my-4">
              <label htmlFor="name" className="block w-fit mb-1 cursor-pointer">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Type here"
                className="input input-bordered w-full caret-tw-blue text-tw-black"
                autoComplete="off"
                value={name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full my-4">
              <label htmlFor="email" className="block w-fit mb-1 cursor-pointer">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Type here"
                className="input input-bordered w-full caret-tw-blue text-tw-black"
                autoComplete="off"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full my-4">
              <label htmlFor="password" className="block w-fit mb-1 cursor-pointer">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Type here"
                className="input input-bordered w-full caret-tw-blue text-tw-black"
                autoComplete="off"
                value={password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full my-4">
              <label htmlFor="password_cnf" className="block w-fit mb-1 cursor-pointer">
                Confirm Password
              </label>
              <input
                type="password"
                id="password_cnf"
                name="password_cnf"
                placeholder="Type here"
                className="input input-bordered w-full caret-tw-blue text-tw-black"
                autoComplete="off"
                value={password_cnf}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full my-4">
              <label className="font-medium cursor-pointer label" htmlFor="checkbox">
                <span className="font-semibold">
                  By signing up you are agreeing to our{' '}
                  <span className="text-gray-600 underline">Terms and Conditions</span>
                </span>
                <input
                  type="checkbox"
                  id="checkbox"
                  name="agree_tnc"
                  className="checkbox bg-white"
                  checked={agree_tnc}
                  onChange={handleChange}
                />
              </label>
            </div>
            <button className="btn mt-4 btn-block border-2 border-tw-extraextralightgray bg-transparent hover:bg-tw-extraextralightgray hover:text-tw-blue hover:border-0 transition-all">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
