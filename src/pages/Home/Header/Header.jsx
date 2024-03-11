import proPic from "../../../assets/images/Coding-cuate.png";
import SkillMarquee from "../../../components/Shared/SkillMarquee/SkillMarquee";
const Header = () => {
  return (
    <>
      <section className="min-h-screen bg-[#dff7e5]">
        <div className="pt-16">
          <SkillMarquee />
        </div>
        <div className="py-36 lg:mx-16">
          <div className="flex flex-col md:flex-row-reverse md:justify-between">
            <div className="m-8 flex-initial w-1/2 text-start text-[#263238] pl-16">
              <div>
                <h1 className="text-3xl pt-10 ">
                  <span className="text-[#]">
                    <span className="text-[#] pr-2">Hello!</span>
                    I&apos;m
                  </span>
                  <span className="text-[#] pl-2 font-bold">Samiha...</span>
                </h1>
                <p className="text-2xl mt-3">
                  <span className="font-bold">JavaScript</span> Developer
                </p>
                <h2 className="text-2xl text-[#] font-bold pt-4">
                  Crafting Tomorrow&apos;s Tech Stories
                </h2>
              </div>
              <div className="my-6 ">
                <button className="bg-[#92e3a9] hover:text-[#263238] hover:border border-[#497255] hover:skeleton w-36 text-lg font-bold  text-[#263238] py-3 rounded-md mr-2">
                  Get Resume
                </button>
                <button className="bg-[#92e3a9] hover:text-[#263238] hover:border border-[#497255] hover:skeleton w-36 text-lg font-bold text-[#263238] px-6 py-3 rounded-md ml-2">
                  Find CV
                </button>
              </div>
            </div>
            <div className="">
              <div className="-mt-[30px] pl-8">
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
