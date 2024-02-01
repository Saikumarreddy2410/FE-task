import React from "react";
import engineer from "../images/engineering.png";
import compass from "../images/compass.png";

const Engineering = () => {
  return (
    <section className="flex justify-around items-center">
      <div className="flex flex-col gap-5">
        <button
          className="flex items-center gap-2 text-darkViolet font-medium bg-lightViolet rounded-full py-2 px-6"
          style={{ width: "fit-content" }}
        >
          <img src={compass} alt="compass" className="w-4" />
          <span>For Engineering Teams</span>
        </button>
        <h2 className="text-xl font-bold">Data-driven pipelines in minutes</h2>
        <p className="w-[26rem]">
        Maintenance-free data pipelines with quick set-up and straight-forward deployments that are powered by a modern & scalable platform.
        </p>
      </div>
      <div>
        <img src={engineer} alt="engineer" className="w-80" />
      </div>
    </section>
  );
};

export default Engineering;
