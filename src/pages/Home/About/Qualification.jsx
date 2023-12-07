import { FaGraduationCap, FaUniversity } from "react-icons/fa";
function Qualification() {
  return (
    <>
      <div className="w-full text-[#0c2123]">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center">
            <FaGraduationCap className="w-6 h-6 mx-2" />
            <h1 className="text-lg font-semibold">
              Bachelar of Computer Science & Engineering
            </h1>
          </div>
          <p className="text-sm font-medium">2018-2023</p>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-start items-center">
            <FaUniversity className="w-5 h-5 mx-2.5 text-[#545556]" />
            <h1 className="text-medium font-medium text-[#545556]">
              Rajshahi University of Engineering & Technology
            </h1>
          </div>
          <p className="text-xs font-medium mt-2.5 text-[#545556]">
            CGPA: 2.90/4.00
          </p>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------- */}
      <div className="my-6">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center">
            <FaGraduationCap className="w-6 h-6 mx-2" />
            <h1 className="text-lg font-semibold">
              Higher Secondary School Certificate
            </h1>
          </div>
          <p className="text-sm font-medium">2016-2017</p>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-start items-center">
            <FaUniversity className="w-5 h-5 mx-2.5 text-[#545556]" />
            <h1 className="text-medium font-medium text-[#545556]">
              Rajshahi College
            </h1>
          </div>
          <p className="text-xs font-medium mt-2.5 text-[#545556]">
            CGPA: 2.90/4.00
          </p>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------------------- */}
      <div className="my-6">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center">
            <FaGraduationCap className="w-6 h-6 mx-2" />
            <h1 className="text-lg font-semibold">
              Bachelar of Computer Science & Engineering
            </h1>
          </div>
          <p className="text-sm font-medium">2018-2023</p>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-start items-center">
            <FaUniversity className="w-5 h-5 mx-2.5 text-[#545556]" />
            <h1 className="text-medium font-medium text-[#545556]">
              Rajshahi University of Engineering & Technology
            </h1>
          </div>
          <p className="text-xs font-medium mt-2.5 text-[#545556]">
            CGPA: 2.90/4.00
          </p>
        </div>
      </div>
    </>
  );
}

export default Qualification;
