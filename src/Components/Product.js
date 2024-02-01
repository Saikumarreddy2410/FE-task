import React from "react";
import productLogo from "../images/productLogos.png";
import electronic from "../images/electronic-circuit.png";

const Product = () => {
  return (
    <section className="flex justify-around items-center">
      <div>
        <img src={productLogo} alt="productLogo" className="w-80" />
      </div>
      <div className="flex flex-col gap-5">
        <button
          className="flex items-center gap-2 text-darkViolet font-medium bg-lightViolet rounded-full py-2 px-6"
          style={{ width: "fit-content" }}
        >
          <img src={electronic} alt="eletronic-circuit" className="w-4" />
          <span>For Product Teams</span>
        </button>
        <h2 className="text-xl font-bold">Launch with the best stack</h2>
        <p className="w-[26rem]">
          A centralized platform that integrates zillions of data sources using
          Big Data ELT (Extract, Load & Transform) that leaves no data behind
        </p>
      </div>
    </section>
  );
};

export default Product;
