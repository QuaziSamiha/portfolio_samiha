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
      {/* <div className="absolute bg-[#92e3a9] bg-opacity-30 inset-0 flex items-center justify-center"> */}
      <div className="absolute bg-[#dff7e5] bg-opacity-30 inset-0 flex items-center justify-center">
        <div className=" ">
          <div className="text-start lg:text-center text-[#263238] uppercase">
            <h1 className="font-bold text-3xl pb-4">Services Offered</h1>
            <h3 className="text-sm font-bold">What I Bring to the Table</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((service, index) => (
              <>
                <div
                  key={index}
                  className="lg:w-80 h-32 text-center p-2 m-4 rounded bg-[#263238]"
                >
                  <h1 className="pt-2 text-lg lg:text-xl text-white font-bold">
                    {service.title}
                  </h1>
                  <p className="pt-2 lg:pt-4 text-[#92e3a9] text-sm lg:text-base">{service.subtitle}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default Services;
