import Footer from "/src/components/Footer/Footer.jsx";
import Navbar from "/src/components/Navbar/Navbar.jsx";
import HoverCard from "/src/components/HoverCard/HoverCard.jsx";
import ThumbSwipe from "/src/components/ThumbSwipe/ThumbSwipe";
import LogoShow from "../../components/LogoShow/LogoShow";
import { Helmet } from "react-helmet-async";


const ItDevelopment = () => {


    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };


    const PageContent = {

        cards: [
            { id: 1, title: "Web Development", description: "Creating responsive and user-friendly websites using the latest technologies. Our custom designs focus on enhancing user experience while reflecting your brand identity, ensuring your online presence is both engaging and impactful." },
            { id: 2, title: "Mobile App Development", description: "Deliver high-quality Android and iOS applications designed to engage customers on the go. With seamless functionality and intuitive design, we create apps that enhance user experiences and drive business growth." },
            { id: 3, title: "Cloud Computing Solutions", description: "Offer scalable services for storage, hosting, and computing, enabling your business to operate with increased flexibility and cost-efficiency. We ensure seamless integration and reliability to support your evolving needs." },
            { id: 4, title: "Cybersecurity Services", description: "Provide comprehensive solutions to safeguard your data and systems. From risk assessment and threat mitigation to continuous security monitoring, we ensure robust protection against evolving cyber threats." },
            { id: 5, title: " AI and Machine Learning Solutions", description: "Deliver innovative, AI-powered tools designed to automate processes and enhance operational efficiency. We develop custom ML models to address complex challenges, empowering your business with cutting-edge technology." },
        ],


        planData: [
            {
                title: "Expertise",
                img: "/assets/images/mountain.webp",
                head: "Leveraging Industry Knowledge for Superior Solutions",
                desc: "At TechCombo, our team comprises highly skilled professionals with extensive industry knowledge and experience. We stay updated with the latest technological advancements, ensuring that our clients benefit from innovative and reliable solutions. Whether it’s software development, cloud computing, or cybersecurity, our expertise allows us to deliver results that exceed expectations.",
            },
            {
                title: "Customization",
                img: "/assets/images/bulb.webp",
                head: "Tailored IT Services to Fit Your Business",
                desc: "We understand that every business is unique, which is why our solutions are not one-size-fits-all. TechCombo specializes in tailoring IT services to meet the specific needs and goals of your organization. From custom software development to scalable cloud solutions, our services are designed to align seamlessly with your business operations.",
            },
            {
                title: "Innovation",
                img: "/assets/images/dia.webp",
                head: "Pioneering the Future with Cutting-Edge Technology",
                desc: "Embracing the future of technology, we leverage cutting-edge tools and methodologies to drive digital transformation. Our innovative approach ensures that your business stays ahead of the competition, whether by automating processes, enhancing user experiences, or integrating AI and machine learning into your workflows.",
            },
            {
                title: "Support",
                img: "/assets/images/archery.webp",
                head: "Ongoing Assistance for Long-Term Success",
                desc: "At TechCombo, our commitment to client success doesn’t end with project delivery. We provide ongoing support and maintenance to ensure that your IT systems continue to perform optimally. Whether it’s troubleshooting issues, updating software, or providing technical guidance, we are with you every step of the way to ensure smooth operations and long-term success.",
            },
        ],

    }



    return (

        <>
            <Helmet>
                <title>IT Development Services - TechCombo</title>
                <meta name="description" content="Empower your business with TechCombo's innovative IT development services, including web and software solutions." />
                <meta name="keywords" content="IT development, TechCombo services, web development,App Development, AI, Cybersecurity,  software solutions, cutting-edge Technology" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="IT Development Services - TechCombo" />
                <meta property="og:description" content="Transform your business with TechCombo's innovative IT development solutions." />
                <meta property="og:url" content="https://techcombo.in/itDevelopment" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://techcombo.in/itDevelopment" />

            </Helmet>

            <div className="relative">

                <Navbar />

                <header
                    className=" w-full h-screen bg-cover bg-center bg-gradient-to-r from-black to-blue-800  flex flex-col md:flex-row items-center justify-center ">
                    <div className="absolute w-4/5 flex flex-col md:flex-row items-center justify-center m-16 gap-4">
                        <div className="md:w-2/5">
                            <img src="/assets/images/itdeveloper.webp" alt="" />
                        </div>
                        <div className=" md:w-3/5 fex flex-col items-center justify-center text-center">
                            <h1 className="text-white text-4xl md:text-6xl font-bold text-center ">
                                {/* IT Project Development Solutions */}
                                Think Big. We Make IT, Possible!
                            </h1>
                            <p className="text-white text-lg md:text-xl mt-4 text-center px-4">
                                Empowering businesses with cutting-edge technology and scalable solutions.
                            </p>
                            <button onClick={() => scrollToSection("start")} className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg shadow-lg hover:scale-110 transition text-center font-poppins" >
                                Get Started
                            </button>
                        </div>

                    </div>
                </header>


            </div>




            <section id="start" className="md:h-screen flex flex-col justify-center items-center py-8 md:py-0 " >
                <h1 className="text-4xl text-center text-slate-800 font-poppins font-extrabold  ">Driving <span className="text-blue-700"> Business Growth  </span>  with IT Innovation</h1>
                <h4 className="text-center text-md font-poppins font-base px-2 md:px-16 md:py-8 py-4">At TechCombo, we deliver innovative and tailored IT solutions to streamline operations, enhance efficiency, and drive business growth. Our focus on cutting-edge technology and personalized support ensures solutions that align with your goals.</h4>
                <HoverCard cards={PageContent.cards} />
            </section>

            <section>

                <LogoShow />
            </section>


            <section className="md:px-48 mt-8">
                <ThumbSwipe planData={PageContent.planData} />
            </section>

            <Footer />


        </>
    );
}

export default ItDevelopment;