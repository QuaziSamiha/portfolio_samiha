import bgImage from "../../../assets/images/bg-header.png";
import blobBg from "../../../assets/images/blob-bg.png";
const Header = () => {
  return (
    <>
      <section
        className="min-h-screen"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="grid grid-cols-2">
          <div></div>
          <div className="h-96 w-96 mt-28">
            <img src={blobBg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
