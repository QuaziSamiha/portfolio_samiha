import { Outlet } from "react-router-dom";
// import Navbar from "../../components/Shared/Navbar/Navbar";
import Footer from "../../components/Shared/Footer/Footer";

const Main = () => {
  return (
    <>
      {/* <h1 className="text-3xl font-bold text-red-600">this is main layout</h1> */}
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
