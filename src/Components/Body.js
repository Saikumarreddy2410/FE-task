import React from "react";
import Hero from "./Hero";
import Qubly from "./Qubly";
import Product from "./Product";
import Engineering from "./Engineering";
import Testimonial from "../images/Testimonial";
import Signupform from "./Signupform";

const Body = () => {
  return (
    <div className="flex flex-col gap-28">
      <Hero />
      <Qubly />
      <Product />
      <Engineering />
      <Testimonial />
      <Signupform />
    </div>
  );
};

export default Body;
