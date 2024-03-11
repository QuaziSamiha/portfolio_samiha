import { ParallaxBanner } from "react-scroll-parallax";
import bg from "../../../assets/images/devices.png";
import { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setServices(data);
      })
      .catch((error) => console.log(error));
  }, []);

  // console.log(services);

  return (
    <ParallaxBanner
      layers={[{ image: bg, speed: -20 }]}
      className="aspect-[2/1] relative"
    >
      <div className="absolute bg-[#92e3a9] bg-opacity-50 inset-0 flex items-center justify-center">
        <div className=" ">
          <div className="text-start lg:text-center text-[#263238]">
            <h1 className="font-bold text-3xl pb-4">Services Offered</h1>
            <h3 className="text-lg font-semibold">What I Bring to the Table</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {console.log(services)}
            <div className="w-56 h-44 p-16 m-4 rounded bg-green-800 bg-opacity-70">
              <h1 className="text-3xl text-white font-thin">Hello World!</h1>
            </div>
          </div>
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default Services;
