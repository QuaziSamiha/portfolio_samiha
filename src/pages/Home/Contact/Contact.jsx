import { ParallaxBanner } from "react-scroll-parallax";
import bg from "../../../assets/images/website-amico.png";
import EmailForm from "./EmailForm";
import SocialMedia from "./SocialMedia";
const Contact = () => {
  //   console.log("checking....");
  return (
    <>
      <ParallaxBanner
        layers={[{ image: bg, speed: -20 }]}
        className="aspect-[2/1] relative my-48"
      >
        <div className="absolute bg-[#dff7e5] bg-opacity-30 inset-0 flex items-center justify-center">
          <div>
            <div className="text-start lg:text-center text-[#263238] uppercase">
              <h1 className="font-bold text-3xl pb-4">reach me here</h1>
            </div>
            <div className="flex justify-evenly items-center my-16">
              <SocialMedia />
              <EmailForm />
            </div>
          </div>
        </div>
      </ParallaxBanner>
    </>
  );
};

export default Contact;
