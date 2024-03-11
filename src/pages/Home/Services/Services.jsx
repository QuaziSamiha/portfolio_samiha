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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((service, index) => (
              <>
                <div
                  key={index}
                  className="w-80 h-32 text-center p-3 m-4 rounded bg-[#263238] bg-opacity-70"
                >
                  <h1 className="text-xl text-white font-bold">
                    {service.title}
                  </h1>
                  <p>{service.subtitle}</p>
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
