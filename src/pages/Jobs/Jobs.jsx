import Footer from "/src/components/Footer/Footer.jsx";
import Navbar from "/src/components/Navbar/Navbar.jsx";
import Button from "/src/components/Button/Button.jsx";

const Jobs = () =>{

    return(

      <> 
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