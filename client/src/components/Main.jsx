import React from 'react';
import Image from './../images/Chat_Monochromatic.png';

const Main = () => {
  return (
    <main className="py-10 md:py-12">
      <h1 className="text-center text-5xl font-extrabold sm:text-6xl md:text-7xl md:leading-snug sm:leading-tight">
        What's going on in your mind?
      </h1>
      <p className="text-center text-xl font-bold my-8 sm:text-2xl md:text-4xl">
        Join <span className="text-tw-blue">qomments</span> today.
      </p>
      <div className="mx-auto w-3/4 sm:w-1/2 md:w-1/2 lg:w-1/3 h-auto my-4">
        <img src={Image} alt="chat-illustration" className="w-full h-auto" />
      </div>
    </main>
  );
};

export default Main;
