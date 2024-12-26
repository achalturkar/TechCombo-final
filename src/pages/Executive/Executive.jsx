import Footer from "/src/components/Footer/Footer.jsx";
import Navbar from "/src/components/Navbar/Navbar.jsx";
import WhyChooseUs from "/src/components/WhyChooseUs/WhyChooseUs.jsx"
import Detail from "/src/components/Detail/Detail.jsx"
import OurServices from "/src/components/OurServices/OurServices.jsx";


const Executive = () => {

    const pagecontent = {
        detail: [
            {
                head: '"Empower Your Business with Exceptional Leadership"',
                para1: "At TechCombo, we specialize in providing top-tier Executive Search services to help businesses identify and hire outstanding leadership talent. Strong leadership is critical to driving innovation and achieving organizational success, and we excel in connecting you with senior-level professionals who align with your vision and goals.",
                para2: "Our meticulous approach ensures you access candidates with the expertise, experience, and strategic mindset needed to lead effectively. From identifying C-suite executives to fulfilling specialized leadership roles, we focus on finding individuals who bring fresh perspectives, innovative ideas, and a track record of success.",
                para3: "With a combination of in-depth market research, a vast talent network, and personalized recruitment strategies, our Executive Search process delivers results. At TechCombo, we aim to provide leaders who will make a lasting impact on your organization’s growth and success.",
                para4: ""
            }
        ],

        services: [
            {
                head: "Tailored Talent Acquisition",
                desc1: "We take the time to understand your company’s culture, values, and leadership needs.",
                desc2: "Each search is customized to ensure candidates are not only skilled but also a perfect cultural fit."
            },
            {
                head: "Comprehensive Screening",
                desc1: "Rigorous assessment of candidates to evaluate their expertise, leadership style, and strategic capabilities.",
                desc2: "Interviews and references to ensure only the best talent is shortlisted."
            },
            {
                head: "Industry Expertise",
                desc1: "Our extensive network spans multiple industries, including IT, finance, industries, and more.",
                desc2: "Gain access to professionals with niche expertise and a proven track record."
            },
        ],

        paraChooses :[
            { head: "Deep Market Knowledge:", desc: "Stay ahead with insights into talent trends and market dynamics." },
            { head: "Global Reach:", desc: "Access to a broad network of senior executives across industries and geographies." },
            { head: "Discreet and Confidential:", desc: "Our process ensures complete confidentiality for both clients and candidates." },
            { head: "Speed and Efficiency:", desc: "We streamline the search process to deliver the right leaders within your timeline." },
        ],
    }

    return (

        <>
            <Navbar />

            <section className="relative w-full h-96 bg-cover bg-center object-fit  bg-no-repeat" style={{ backgroundImage: "url(/src/assets/images/executive.webp)" }}>
                <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex flex-col items-center justify-center text-wrap">
                    <h1 className="text-white text-5xl md:text-6xl font-bold font-poppins text-center">Executive Search</h1>
                    <p className="text-center text-md text-white font-poppins">TechCombo: Finding Leaders Who Inspire Growth</p>
                </div>
            </section>

            <section className="mt-4 px-4 md:px-20 lg:px-40 ">
                <Detail information={pagecontent.detail} img="/src/assets/images/exe3.jpg" />
            </section>

            <section className="mt-12 px-4 md:px-20 lg:px-40 ">
                <OurServices services={pagecontent.services} img="/src/assets/images/exe2.webp" />
            </section>

            <section className="mt-12 px-4 md:px-20 lg:px-40 ">
                <WhyChooseUs chooses={pagecontent.paraChooses} img="/src/assets/images/staff3.webp" />
            </section>


            <Footer />


        </>
    );
}


export default Executive;