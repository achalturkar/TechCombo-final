import Footer from "/src/components/Footer/Footer.jsx";
import Navbar from "/src/components/Navbar/Navbar.jsx";
import AboutDetail from "/src/components/AboutDetail/AboutDetail.jsx"
import WhyChooseUs from "/src/components/WhyChooseUs/WhyChooseUs.jsx"
import { Helmet } from "react-helmet-async";


const About = () => {
  const paraChooses = [
    {
      head: "Expertise Across Industries",
      desc: "Providing tailored solutions for IT and non-IT business needs."
    },
    {
      head: "Innovative Staffing Models",
      desc: "Offering contract hiring, manpower outsourcing, and payroll solutions."
    },
    {
      head: "Career Growth Opportunities",
      desc: "Empowering professionals with freelance, contract, and full-time roles."
    },
    {
      head: "Customized Solutions",
      desc: "Delivering agile and scalable real-time project development services."
    },
    {
      head: "People-First Approach",
      desc: "Building meaningful partnerships for mutual growth and success."
    },
    {
      head: "Commitment to Excellence",
      desc: "Ensuring operational efficiency and business growth through integrity."
    },
  ]

  return (

    <>

      <Helmet>
        <title>About TechCombo - Your Trusted IT Partner</title>
        <meta name="description" content="Learn more about TechCombo, our mission, and our journey to becoming a leading IT and staffing solutions provider." />
        <meta name="keywords" content="About TechCombo, IT partner, Non-IT,  staffing solutions, manpower services, " />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About TechCombo - Your Trusted IT Partner" />
        <meta property="og:description" content="Explore the journey of TechCombo, delivering IT and staffing services with excellence." />
        <meta property="og:url" content="https://techcombo.in/about" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://techcombo.in/about" />

      </Helmet>
      <Navbar />

      <section className="relative w-full h-96 bg-cover bg-center object-fit  bg-no-repeat" style={{ backgroundImage: "url(/assets/images/emp.webp)" }}>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold font-poppins">About Us</h1>
          <p className="text-center text-md text-white font-poppins">Discover TechCombo – where innovation meets opportunity </p>
        </div>
      </section>

      <section className="mt-4 px-4 md:px-20 lg:px-40 ">
        <AboutDetail />
      </section>


      <section className="mt-12 px-4 md:px-20 lg:px-40 ">
        <WhyChooseUs chooses={paraChooses} img="/assets/images/sitEmp.webp" />
      </section>


      <Footer />

    </>


  );
}

export default About;