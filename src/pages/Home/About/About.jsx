import AboutRight from "./AboutRight";
// import proPic from "../../../assets/images/propic-prize.jpg";
import proPic from "../../../assets/images/muslim graduation-amico.png";
// import bg from "../../../assets/images/bg-2.png";
const About = () => {
  return (
    <>
      <section
        className="my-40 pb-20 border-b h-fit shadow-sm bg-opacity-60"
        // style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="text-center py-12">
          <h1 className="text-3xl font-bold text-[#880088]">Profile</h1>
          <h2 className="mt-4 text-[#9452b0] font-semibold text-xl">
            Weaving Dreams with Lines of Code
          </h2>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-1/2 flex justify-center items-center">
            <img
              className="w-[350px] h-[450px] rounded-lg"
              src={proPic}
              alt=""
            />
          </div>
          <div className="w-1/2">
            <AboutRight />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
