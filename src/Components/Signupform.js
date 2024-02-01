import clinetsLogo from "../images/Client logos.png";
import googleSign from "../images/btn_google_signin_dark_normal_web@2x.png";
const Signupform = () => {
  return (
    <section className="flex justify-around items-center">
      <div className="flex flex-col gap-8">
        <h2 className="text-xl font-bold w-64 text-center">
          See why the world’s best companies use Qubly to become truly
          data-driven.
        </h2>
        <div className="flex items-center">
          <hr className="flex-grow border-t border-lightGray" />
          <span className="mx-2 text-lightGray font-medium text-sm">
            Trusted by
          </span>
          <hr className="flex-grow border-t border-lightGray" />
        </div>
        <img src={clinetsLogo} alt="clinetsLogo" className="w-64" />
      </div>

      {/*  ----------- Form Page ----------- */}

      <div className="flex flex-col bg-lightViolet w-80 relative">
        <form className="flex flex-col p-5 gap-3 ">
          <div className="flex flex-col w-full gap-3">
            <button className="font-bold text-lg">Sign Up</button>
            <button className="border rounded py-2 px-6 bg-darkViolet text-[#fff]">
              Start your free trail
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <input
              type="email"
              name="email"
              className="border border-lightGray rounded px-2 py-1 focus:outline-none"
              placeholder="Your primary email"
            />
            <input
              type="password"
              name="password"
              className="border border-lightGray rounded px-2 py-1 focus:outline-none"
              placeholder="Password"
            />
            <input
              type="password"
              name="cPassword"
              className="border border-lightGray rounded px-2 py-1 focus:outline-none"
              placeholder="Re-type Password"
            />
          </div>

          <div className="flex flex-col items-center gap-3">
            <span className="font-medium text-sm">OR</span>
            <button>
              <img src={googleSign} alt="googleSignBtn" className="w-40" />
            </button>
            <p>
              Already have an account?
              <a href="#" className="text-darkViolet font-medium">
                {" "}
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signupform;
