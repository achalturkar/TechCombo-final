import Footer from "/src/components/Footer/Footer.jsx";
import Navbar from "/src/components/Navbar/Navbar.jsx";
import HeroHome from "../../components/HeroHome/HeroHome";
import Journey from "../../components/Journey/Journey";
import Purpose from "../../components/ThumbSwipe/ThumbSwipe";
import Slider from "../../components/Slider/Slider";
import ThumbSwipe from "../../components/ThumbSwipe/ThumbSwipe";

const Home = () => {

   const planData = [
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
   ];

   return (

      <>
         <Navbar />

         <main>

            <section className="mt-16 md:mt-44  md:px-44">
               <HeroHome />
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
               <ThumbSwipe planData={planData} />
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