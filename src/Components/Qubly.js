import React from "react";
import { FaEye } from "react-icons/fa";
import chart from "../images/chart-bar-33.png";
import newsLetter from "../images/newsletter-dev.png";
import timeLine from "../images/timeline.png";

const Qubly = () => {
  return (
    <section className="flex flex-col py-5 w-full gap-8">
      <div className="flex flex-col items-center gap-5 ">
        <button className="flex items-center gap-2 text-darkViolet font-medium bg-lightViolet rounded-full py-2 px-6">
          <FaEye />
          <span>Why Qubly</span>
        </button>
        <h2 className="text-xl font-bold">
          Get actionable insights from Big Data in 3 steps
        </h2>
        <p className="w-[37rem]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </div>
      <section className="flex justify-around">
        <div className="w-72 flex flex-col items-center gap-3">
          <img src={chart} alt="chart" />
          <h4 className="font-semibold text-lg">Valuable business insights</h4>
          <p className="text-center">
            Collect processed & cleansed data that is ready to be analyzed to
            gather valuable business insights.
          </p>
        </div>
        <div className="w-72 flex flex-col items-center gap-3">
          <img src={newsLetter} alt="newsLetter" />
          <h4 className="font-semibold text-lg">Data in real-time</h4>
          <p className="text-center">
            With the help of powerful algorithms, quality rules & techniques,
            obtain simplified & enriched data.
          </p>
        </div>
        <div className="w-72 flex flex-col items-center gap-3">
          <img src={timeLine} alt="timeLine" />
          <h4 className="font-semibold text-lg">Data in real-time</h4>
          <p className="text-center">
            Collect data in real-time from multiple channels and move it into a
            data lake, in its original format.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Qubly;
