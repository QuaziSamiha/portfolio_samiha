import { ParallaxBanner } from "react-scroll-parallax";
// import bg from '../../../assets/images/bg-2.png'
const Services = () => {
  return (
    <ParallaxBanner
      layers={[
        { image: "../../../assets/images/bg-2.png", speed: -20 },
        {
          speed: -15,
          children: (
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-8xl text-white font-thin">Hello World!</h1>
            </div>
          ),
        },
        { image: "../../../assets/images/bg-2.png", speed: -10 },
      ]}
      className="aspect-[2/1]"
    />
  );
};

export default Services;
