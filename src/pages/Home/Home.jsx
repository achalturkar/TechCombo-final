import Footer from "/src/components/Footer/Footer.jsx";
import Navbar from "/src/components/Navbar/Navbar.jsx";
import Hero from "../../components/Hero/Hero";
import Journey from "../../components/Journey/Journey";
import Purpose from "../../components/ThumbSwipe/ThumbSwipe";
import Slider from "../../components/Slider/Slider";
import ThumbSwipe from "../../components/ThumbSwipe/ThumbSwipe";
import Statistics from "../../components/Statistics/Statistics";
import HoverCard from "../../components/HoverCard/HoverCard";
import React, { Suspense } from "react";
import ItHome from "../../components/ItHome/ItHome";

const Home = () => {

   const pageContent = {


      cards: [
         { id: 21, title: "Staffing & Selection", description: "We connect businesses with the right talent, ensuring they find skilled professionals for every role, from entry-level to senior positions." },
         { id: 12, title: "Manpower Outsourcing", description: "Scale your operations effortlessly with our manpower outsourcing solutions, designed to meet your short-term and long-term workforce needs." },
         { id: 13, title: "Payroll Outsourcing", description: "We manage payroll processes efficiently, reducing administrative burdens and ensuring timely and accurate payments for employees." },
         { id: 14, title: "Executive Search", description: "Our executive search service identifies top leaders and key decision-makers to help organizations grow and thrive." },
         { id: 15, title: "IT Project Development", description: "We develop and deliver high-quality IT projects tailored to client needs, ensuring timely completion with the latest technologies." },
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

            {/* <Hero /> */}


            <section id="start" className="md:h-screen flex flex-col justify-center items-center py-8 md:py-0 mt-12" data-aos="fade-up">
               <h1 className="text-4xl text-center text-slate-800 font-poppins font-extrabold  ">Innovative   <span className="text-blue-700"> Services  </span>  for Every Need</h1>
               <h4 className="text-center text-md font-poppins font-base px-2 md:px-16 md:py-8 py-4">At TechCombo, we specialize in tailored staffing, outsourcing, and IT project solutions. Our people-first approach ensures businesses find the right talent, while professionals unlock exciting career opportunities. Let us help you achieve success with innovation and efficiency.</h4>
               <HoverCard cards={pageContent.cards} />
            </section>

            <Suspense>
               <section className="mt-8 md:mt-4  md:px-40" data-aos="fade-up">
                  <Statistics />
               </section>
            </Suspense>


            <section className="mt-8 md:mt-36 justify-center items-center">

               <ItHome/>
               
            </section>

            <section className="mt-8 pt-4 md:mt-16 md:px-44 " data-aos="fade-up">
               <h1 className="text-4xl text-center text-slate-800 font-poppins font-extrabold  ">A <span className="text-blue-700"> Journey  </span>of Innovation and Impact</h1>
               <h4 className="text-center text-md font-poppins font-base px-2 md:px-16 md:py-8 py-4">"TechCombo's journey reflects growth and innovation, evolving from IT staffing to diverse sectors and workforce solutions. Each milestone showcases our commitment to empowering businesses and bridging talent with opportunities."</h4>
               <Journey />
            </section>

            <section className="mt-8 pt-4 md:mt-16 md:px-44 bg-slat-100">                 
               <h1 className="text-4xl text-center text-slate-800 font-poppins font-extrabold  ">What <span className="text-blue-700"> Drives  </span> us?</h1>
               <h4 className="text-center text-md font-poppins font-base px-2 md:px-16 md:py-8 py-4">"Learn About the Principles Driving Our Commitment to Excellence"</h4>
               <ThumbSwipe planData={pageContent.planData} />
            </section>

            <section className="mt-8 pt-4 md:mt-16 md:px-44 mb-8 bg-slat-200">
            <h1 className="text-4xl text-center text-slate-800 font-poppins font-extrabold  ">Focused on <span className="text-blue-700">  Industry  </span> Excellence </h1>
            <h4 className="text-center text-md font-poppins font-base px-2 md:px-16 md:py-8 py-4">"Driving innovation and excellence across industries, empowering growth, and shaping the future"</h4>
               <Slider />
            </section>

         </main>


         <Footer />

      </>


   );
}

export default Home;