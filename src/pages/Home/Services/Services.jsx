import { ParallaxBanner } from "react-scroll-parallax";
// import bg from "../../../assets/images/service-bg.jpg";
import bg from "../../../assets/images/devices.png";
const Services = () => {
  return (
    <ParallaxBanner
      layers={[{ image: bg, speed: -20 }]}
      className="aspect-[2/1] relative"
    >
      <div className="absolute bg-[#92e3a9] bg-opacity-50 inset-0 flex items-center justify-center">
        <div className=" flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-12">
            <div className="w-80 h-44 p-16 m-4 rounded bg-green-800">
              <h1 className="text-3xl text-red-500 font-thin">Hello World!</h1>
            </div>
            <div className="w-80 h-44 p-16 m-4 rounded bg-green-800">
              <h1 className="text-3xl text-red-500 font-thin">Hello World!</h1>
            </div>
            <div className="w-80 h-44 p-16 m-4 rounded bg-green-800">
              <h1 className="text-3xl text-red-500 font-thin">Hello World!</h1>
            </div>
            <div className="w-80 h-44 p-16 m-4 rounded bg-green-800">
              <h1 className="text-3xl text-red-500 font-thin">Hello World!</h1>
            </div>
            <div className="w-80 h-44 p-16 m-4 rounded bg-green-800">
              <h1 className="text-3xl text-red-500 font-thin">Hello World!</h1>
            </div>
            <div className="w-80 h-44 p-16 m-4 rounded bg-green-800">
              <h1 className="text-3xl text-red-500 font-thin">Hello World!</h1>
            </div>
          </div>
        </div>
      </div>{" "}
    </ParallaxBanner>
  );
};

export default Services;
