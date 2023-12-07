import {
  FaCalendar,
  FaCity,
  FaFlag,
  FaHome,
  FaLanguage,
  FaUserCircle,
} from "react-icons/fa";

function PersonalInfo() {
  return (
    <>
      <div className="flex justify-start text-[#0c2123]">
        <section className="ml-4">
          <div className="flex justify-start items-center my-3">
            <FaUserCircle className="mr-2" />
            <h1>
              <span className="font-bold mr-1">Name:</span>
              <span className="font-medium">Quazi Samiha Tasnim</span>
            </h1>
          </div>
          <div className="flex justify-start items-center my-3">
            <FaCalendar className="mr-2" />
            <p>
              <span className="font-bold">DOB:</span>{" "}
              <span className="font-medium">04 September, 2000</span>
            </p>
          </div>
          <div>
            <div className="flex justify-start items-center mt-3">
              <FaLanguage className="mr-2 h-6 w-6" />
              <h1 className="font-bold">Language Skill:</h1>
            </div>
            <div className="font-medium ml-6">
              <li>Bangla -- Native</li>
              <li>English -- Fluent</li>
            </div>
          </div>
        </section>
        <section className="ml-16">
          <div className="flex justify-start items-center my-3">
            <FaFlag className="mr-2" />
            <h1>
              <span className="font-bold mr-1">Country:</span>
              <span className="font-medium">Bangladesh</span>
            </h1>
          </div>
          <div className="flex justify-start items-center my-3">
            <FaCity className="mr-2" />
            <p>
              <span className="font-bold">Current City:</span>{" "}
              <span className="font-medium">Dhaka</span>
            </p>
          </div>
          <div className="flex justify-start items-center my-3">
            <FaHome className="mr-2" />
            <p>
              <span className="font-bold">Home Town:</span>{" "}
              <span className="font-medium">Rajshahi</span>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default PersonalInfo;
