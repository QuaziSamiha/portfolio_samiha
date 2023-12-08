import bgImage from "../../../assets/images/bg-header.png";
import blobBg from "../../../assets/images/blob-bg2.png";
import proPic from "../../../assets/images/propic2.png";
import SkillMarquee from "../../../components/Shared/SkillMarquee/SkillMarquee";
const Header = () => {
  return (
    <>
      <section
        className="min-h-screen"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="pt-32">
          <SkillMarquee />
        </div>
        <div className="py-36 mx-28">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="m-8 flex-initial w-1/2 text-center">
              <div>
                <h1 className="text-3xl pt-16 font-bold">
                  <span className="text-[#0c2123]">
                    <span className="text-[#8d2232] pr-2">
                      Greetings Earthlings!
                    </span>
                    I&apos;m
                  </span>
                  <span className="text-[#e7473c] pl-2">Samiha...</span>
                </h1>
                <h2 className="text-2xl text-[#880088] font-bold pt-4">
                  Crafting Tomorrow&apos;s Tech Stories
                </h2>
              </div>
              <div className="my-6 ">
                <button className="bg-[#9452b0] hover:text-[#9452b0] hover:border border-[#9452b0] hover:skeleton w-36 text-lg font-bold  text-white py-4 rounded-md mr-2">
                  Get Resume
                </button>
                <button className="bg-[#ff156d] hover:text-[#ff156d] hover:border border-[#ff156d] hover:skeleton w-36 text-lg font-bold text-white px-6 py-4 rounded-md ml-2">
                  Find CV
                </button>
              </div>
            </div>
            <div className="">
              <img className="w-[650px] h-[450px]" src={blobBg} alt="" />
              <div className="-mt-[380px] pl-28">
                <img className=" w-[380px] h-[380px]" src={proPic} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
