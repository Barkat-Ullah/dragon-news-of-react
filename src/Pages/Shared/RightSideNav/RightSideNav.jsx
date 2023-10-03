import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";
import background from "../../../assets/bg.png";

const RightSideNav = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${background})`,
  };
  return (
    <div className="p-4 space-y-3">
      <h2 className="text-3xl">Sign With</h2>
      <button className="btn btn-outline w-full">
        <FaGoogle></FaGoogle>
        Login with Google
      </button>
      <button className="btn btn-outline w-full">
        <FaGithub></FaGithub>
        Login with Github
      </button>
      <div>
        <h2 className="text-3xl">Find Us</h2>
        <a className="flex items-center gap-2 border rounded-t-lg p-4" href="">
          <FaFacebook></FaFacebook>
          <span className="">Facebook</span>
        </a>
        <a className="flex items-center gap-2 border-x p-4" href="">
          <FaInstagram></FaInstagram>
          <span className="">Instagram</span>
        </a>
        <a className="flex items-center gap-2 border rounded-b-lg p-4" href="">
          <FaTwitter></FaTwitter>
          <span className="">Twitter</span>
        </a>
      </div>
      <div className="p-4 space-y-3">
        <h2 className="text-3xl">Q-Zone</h2>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
      <div className="">
        <div
          className="w-full"
          style={
            backgroundImageStyle
          }
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className=" space-y-2 p-5">
              <h2 className="font-bold text-4xl">
                Create an Amazing Newspaper
              </h2>
              <p>
                Discover thousands of options, easy to customize layouts,
                one-click to import demo and much more.
              </p>
              <button className="btn btn-error ">Learn More</button>
            </div>
          </div>
        </div>
   
      </div>
    </div>
  );
};

export default RightSideNav;
