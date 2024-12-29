import Footer from "/src/components/Footer/Footer.jsx";
import Navbar from "/src/components/Navbar/Navbar.jsx";
import Hero from "../../components/Hero/Hero";
import Journey from "../../components/Journey/Journey";
import Purpose from "../../components/ThumbSwipe/ThumbSwipe";
import Slider from "../../components/Slider/Slider";
import ThumbSwipe from "../../components/ThumbSwipe/ThumbSwipe";
import Statistics from "../../components/Statistics/Statistics";
import HoverCard from "../../components/HoverCard/HoverCard";

const Home = () => {

   const pageContent = {


      cards: [
         { id: 11, title: "Staffing & Selection", description: "We connect businesses with the right talent, ensuring they find skilled professionals for every role, from entry-level to senior positions." },
         { id: 2, title: "Manpower Outsourcing", description: "Scale your operations effortlessly with our manpower outsourcing solutions, designed to meet your short-term and long-term workforce needs." },
         { id: 3, title: "Payroll Outsourcing", description: "We manage payroll processes efficiently, reducing administrative burdens and ensuring timely and accurate payments for employees." },
         { id: 4, title: "Executive Search", description: "Our executive search service identifies top leaders and key decision-makers to help organizations grow and thrive."},
         { id: 5, title: "IT Project Development", description: "We develop and deliver high-quality IT projects tailored to client needs, ensuring timely completion with the latest technologies." },
      ],

      planData: [
         {
            title: "Our Mission",
            img: "/assets/images/mountain.webp",
            head: "Empowering Growth and Innovation",
            desc: "At TechCombo, we empower businesses with tailored talent solutions and innovative services while creating meaningful opportunities for professionals to grow and succeed.",
         },
         {
            title: "Our Vision",
            img: "/assets/images/bulb.webp",
            head: "A Vision for Excellence",
            desc: "To be a trusted leader in workforce solutions and IT project development, driving innovation, efficiency, and sustainable growth for businesses and professionals.",
         },
         {
            title: "Our Value",
            img: "/assets/images/dia.webp",
            head: "Core Values That Inspire Trust",
            desc: "At TechCombo, we uphold excellence, integrity, innovation, collaboration, and opportunity delivering quality services, fostering trust, embracing technology, building partnerships, and empowering growth for all.",
         },
         {
            title: "Our Goal",
            img: "/assets/images/archery.webp",
            head: "Goals That Drive Success",
            desc: "To lead in staffing, outsourcing, and IT project development by connecting businesses with top talent, offering diverse career opportunities, and fostering growth through impactful solutions.",
         },

      ]
   }



   return (

      <>
         <Navbar />

         <main>

            <Hero />


            <section id="start" className="md:h-screen flex flex-col justify-center items-center py-8 md:py-0 " >
               <h1 className="text-4xl text-center text-slate-800 font-poppins font-extrabold  ">Innovative   <span className="text-blue-700"> Services  </span>  for Every Need</h1>
               <h4 className="text-center text-md font-poppins font-base px-2 md:px-16 md:py-8 py-4">At TechCombo, we specialize in tailored staffing, outsourcing, and IT project solutions. Our people-first approach ensures businesses find the right talent, while professionals unlock exciting career opportunities. Let us help you achieve success with innovation and efficiency.</h4>
               <HoverCard cards={pageContent.cards} />
            </section>

            <section className="mt-16 md:mt-44  md:px-44">
               <Statistics />
            </section>

            <section className="mt-8 pt-4 md:mt-16 md:px-44 ">
               <Journey />
            </section>

            <section className="mt-8 pt-4 md:mt-16 md:px-44 bg-slat-100">
               <div className="text-center mb-8" data-aos="fade-up">
                  <h2 className=" section-head text-4xl font-extrabold font-poppins mb-4">What Drives Us?</h2>
                  <p className="text-xl font-medium text-gray-600 font-noto">
                     "Learn About the Principles Driving Our Commitment to Excellence"
                  </p>
               </div>
               <ThumbSwipe planData={pageContent.planData} />
            </section>

            <section className="mt-8 pt-4 md:mt-16 md:px-44 mb-8 bg-slat-200">
               <Slider />
            </section>

         </main>


         <Footer />

      </>


   );
}

export default Home;