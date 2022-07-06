import React from 'react';
import CustomBtn from './../components/CustomBtn';

const About = () => {
  return (
    <div className="py-12 sm:py-16 text-center">
      <h1 className="text-tw-blue text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold">qomments</h1>
      <h3 className="my-8 font-bold text-2xl">About</h3>
      <p className="max-w-3xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium omnis illo odit. Dolorum fugiat omnis harum
        id nisi? Blanditiis perspiciatis quo eaque doloremque dolorem sequi iure voluptate totam dolor necessitatibus?
      </p>
      <CustomBtn
        text="Back to Home"
        styles="btn my-6 btn-block border-2 border-tw-blue text-tw-blue bg-transparent hover:border-0 transition-all max-w-3xl"
        url="/"
      />
    </div>
  );
};

export default About;
