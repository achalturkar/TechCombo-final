import AnimatedNumber from "../AnimatedNumber/AnimatedNumber";

const Statistics = () => {
  return (
    <div className="bg-gradient-to-r from-green-300 p-4 md:p-16 border-lg w-full flex flex-col md:flex-row md:justify-center md:items-center gap-8">
      <div className="w-full md:w-2/5 text-center md:text-left">
      <h1 className="text-3xl font-poppins font-extrabold text-black mt-2">
      "Achievements That Define Us"
              </h1>
              <br />
        <h2 className="text-5xl font-poppins font-extrabold flex justify-center md:justify-start items-center gap-2 text-blue-600">
          <AnimatedNumber n={1200} />
          <span className="text-5xl ">+</span>
        </h2>
        <h6 className="text-lg font-poppins font-medium text-gray-700 mt-2">
          Milestones Achieved by Talented Employees
        </h6>
      </div>

      <div className="w-full md:w-3/5 flex flex-col gap-8">
        <div className="flex items-center">
          <div className="h-24 w-1 bg-black"></div>
          <div className="pl-6">
            <h2 className="text-5xl font-poppins font-extrabold flex items-center gap-2 text-blue-600">
              <AnimatedNumber n={125} />
              <span className="text-5xl">+</span>
            </h2>
            <h6 className="text-lg font-poppins font-medium text-gray-700 mt-2">
              Clients Connected Across Various Industries
            </h6>
          </div>
        </div>

        <div className="flex items-center">
          <div className="h-24 w-1 bg-black"></div>
          <div className="pl-6">
            <h2 className="text-5xl font-poppins font-extrabold flex items-center gap-2 text-blue-600">
              <AnimatedNumber n={5} />
              <span className="text-5xl ">+</span>
            </h2>
            <h6 className="text-lg font-poppins font-medium text-gray-700 mt-2">
              Year Of Excellence
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
