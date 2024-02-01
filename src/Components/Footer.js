import logo from "../images/Logo.png";
import facebook from "../images/facebook-icon.png";
import twitter from "../images/twitter-3.png";
import instagram from "../images/instagram-2016.png";
import { company, developers, products, support } from "../utils/constant";
import { IterateLinks } from "../utils/helper";
import { IoSendSharp } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-5 items-center">
      <section className="flex justify-around text-sm gap-10 pt-20">
        <div className="">
          <img src={logo} alt="logo" className="w-10" />
          <p className="w-48 py-5">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat ut wisi enim ad minim
          </p>
          <div className="flex gap-4">
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={instagram} alt="instagram" />
          </div>
        </div>
        {/* ----------  Products ------------------- */}

        <div>
          <h3 className="font-bold">Product</h3>
          <IterateLinks links={products} />
        </div>

        {/* ----------  For Developers ------------------- */}

        <div>
          <h3 className="font-bold">For Developers</h3>
          <IterateLinks links={developers} />
        </div>

        {/* ----------  Company ------------------- */}

        <div>
          <h3 className="font-bold">Company</h3>
          <IterateLinks links={company} />
        </div>

        {/* ----------  Support ------------------- */}

        <div>
          <h3 className="font-bold">Support</h3>
          <IterateLinks links={support} />
        </div>

        {/* ----------  Support ------------------- */}

        <div className="relative">
          <h3 className="font-bold">Newsletter</h3>
          <div className="py-1">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="focus:outline-none border border-lightGray shadow-lg py-1 px-2 rounded"
            />
            <button className="absolute right-3 top-8 text-darkViolet">
              <IoSendSharp />
            </button>
          </div>
        </div>
      </section>
      <section className="flex items-center gap-3">
        <h2 className="font-medium">Saikumar Reddy</h2>
        <FaRegCopyright />
      </section>
    </footer>
  );
};

export default Footer;
