import bg from "../images/Path 606.png";
import profile from "../images/Profile.png";
import tonkean from "../images/Tonkean.png";
import bigSpring from "../images/Group 25.png";
import clearBit from "../images/Clearbit.png";
import mine from "../images/Mine.png";
import shake from "../images/Shake.png";

const Testimonial = () => {
  return (
    <section
      className="bg-cover bg-no-repeat w-[100%] flex flex-col gap-5"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="flex flex-col items-center gap-5">
        <h3 className="text-lg font-semibold w-[39rem] text-center">
          "What I love about Qubly is the easy way we can collaborate even if
          there is a lot of people involved in the process"
        </h3>
        <img src={profile} alt="profile" className="w-14" />
        <h4 className="font-bold text-sm w-32 text-center">
          Guillaume Cabane CTO @ BigSpring
        </h4>
      </div>

      <div className="flex items-center justify-around border-t pt-6">
        <img src={tonkean} alt="tonkean" className="w-20" />
        <img src={bigSpring} alt="bigSpring" className="w-20" />
        <img src={clearBit} alt="clearBit" className="w-20" />
        <img src={mine} alt="mine" className="w-20" />
        <img src={shake} alt="shake" className="w-20" />
      </div>
    </section>
  );
};

export default Testimonial;
