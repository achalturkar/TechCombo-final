import Footer from "/src/components/Footer/Footer.jsx";
import Navbar from "/src/components/Navbar/Navbar.jsx";
import Button from "/src/components/Button/Button.jsx";
import { Helmet } from "react-helmet-async";
const Jobs = () => {

  return (

    <>
      <Helmet>
        <title>Explore Jobs - TechCombo</title>
        <meta name="description" content="Browse the latest job opportunities with TechCombo. Find your dream job in IT, Non-IT, freelancing, Contract or full-time positions." />
        <meta name="keywords" content="TechCombo jobs, IT jobs, freelancing, Fulltime, contract job, job opportunities, career growth" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Explore Jobs - TechCombo" />
        <meta property="og:description" content="Discover exciting job opportunities with TechCombo in IT, freelancing, and contract work." />
        <meta property="og:url" content="https://techcombo.in/jobs" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://techcombo.in/jobs" />

      </Helmet>

      <Navbar />

      <section className="h-screen bg-gradient-to-r from-blue-500 flex flex-col justify-center items-center">

        <h1 className="text-center text-4xl font-bold text-slate-900" >"Launching Soon – Stay Connected!"</h1>
        <br />
        <Button />
      </section>


      <Footer />

    </>


  );
}

export default Jobs;