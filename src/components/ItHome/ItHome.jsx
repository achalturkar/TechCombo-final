import { Link } from "react-router-dom";



const ItHome = () => {


    return (

        <div className="flex flex-col md:flex-row justify-center items-center md:mx-36 md:gap-12 p-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg shadow-lg">
            <div className="h-56 w-56 md:w-96 md:h-96 flex justify-center items-center rounded-full bg-white shadow-md overflow-hidden">
                <img src="/assets/images/compute.jpg" alt="Professional Image" className="w-full h-full object-cover rotate-270"/>
            </div>

            <div className="w-full md:w-3/5 mt-6 md:mt-0 text-center md:text-left">
                <h1 className="text-white font-extrabold text-4xl mb-4 font-poppins">
                    Connecting <span className="text-blue-950">Talented Professionals</span>  with Innovative Projects
                </h1>
                <p className="text-white font-medium text-lg leading-relaxed">
                    At TechCombo, we bridge the gap between talented professionals and businesses with innovative IT projects.
                    Our platform ensures seamless collaboration, helping professionals excel and clients achieve their goals efficiently.
                </p>
                <Link to="/itDevelopment" className="text-center">
                    <button className="bg-red-400 text-white  mt-4 text-lg font-bold font-poppins px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                        Explore Our IT Development Services
                    </button>
                </Link>        </div>
        </div>
    )
}

export default ItHome;