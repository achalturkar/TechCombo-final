import Footer from "/src/components/Footer/Footer.jsx";
import Navbar from "/src/components/Navbar/Navbar.jsx";
import WhyChooseUs from "/src/components/WhyChooseUs/WhyChooseUs.jsx"
import Detail from "/src/components/Detail/Detail.jsx"
import OurServices from "/src/components/OurServices/OurServices.jsx";
import { Helmet } from "react-helmet-async";

const Manpower = () => {

    const pagecontent = {
        detail: [
            {
                head: '"Comprehensive Manpower Outsourcing Solutions"',
                para1: "At TechCombo, we specialize in providing comprehensive Manpower Outsourcing services that allow businesses to meet their staffing needs efficiently, without the complexities of managing a large workforce. Our solutions are designed to offer flexibility and scalability, enabling you to focus on your core business operations while we handle all aspects of workforce management.",
                para2: "Whether you require temporary staff, specialized skills, or a complete outsourced team, TechCombo delivers the right resources for your specific business needs. We ensure that every professional we provide is thoroughly vetted and trained, enabling them to seamlessly integrate into your organization and contribute immediately to your goals.",
                para3: "Our manpower outsourcing services empower you to manage your workforce more effectively, reduce overhead costs, and stay compliant with labor laws. TechCombo offers a range of services tailored to meet the demands of your business, ensuring that you have the right talent at the right time, all while eliminating the administrative burden.",
                para4: ""
            }
        ],

        services: [
            {
                head: "Temporary Staffing",
                desc1: "Efficiently scale your workforce for short-term needs.",
                desc2: "Ideal for businesses with seasonal demand or project-based work."
            },
            {
                head: "Permanent Staffing",
                desc1: "Outsource the hiring and recruitment process for full-time employees.",
                desc2: "Access a pool of talented professionals, carefully selected to fit your company's culture."
            },
            {
                head: "Specialized Workforce Solutions",
                desc1: "TechCombo provides professionals with expertise in IT, industrial, finance, and more.",
                desc2: "Shorten recruitment timelines with our pre-vetted talent pool."
            },
            {
                head: "Payroll and Compliance Management",
                desc1: "We take care of all aspects of payroll management, from salary disbursements to tax filing.",
                desc2: "Ensure full compliance with local labor laws and regulations, reducing legal risks."
            },
        ],

        paraChooses: [
            { head: "Cost-Effective Solutions:", desc: "Reduce overhead costs associated with recruitment, training, and payroll." },
            { head: "Quick and Efficient Deployment:", desc: "Access a ready pool of skilled professionals who can be deployed quickly to meet your project or staffing needs." },
            { head: "Scalable Services:", desc: "Whether you need one employee or an entire team, we offer flexible solutions that scale with your needs." },
            { head: "Compliance and Risk Management: ", desc: "Stay compliant with labor laws, avoiding potential risks and penalties." },
        ],
    }

    return (

        <>
            <Helmet>
                <title>Manpower Outsourcing - TechCombo</title>
                <meta name="description" content="TechCombo provides reliable manpower outsourcing services to streamline your operations and improve efficiency." />
                <meta name="keywords" content="Manpower outsourcing, TechCombo services, manpower efficiency, staffing solutions, Manpower" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Manpower Outsourcing - TechCombo" />
                <meta property="og:description" content="Optimize your workforce with TechCombo's trusted manpower outsourcing services." />
                <meta property="og:url" content="https://techcombo.in/manpower" />
                <meta property="og:type" content="website" />
            </Helmet>

            <Navbar />

            <section className="relative w-full h-96 bg-cover bg-center object-fit  bg-no-repeat" style={{ backgroundImage: "url(/assets/images/manpower.webp)" }}>
                <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex flex-col items-center justify-center text-wrap">
                    <h1 className="text-white text-5xl md:text-6xl font-bold font-poppins text-center">Manpower Outsourcing</h1>
                    <p className="text-center text-md text-white font-poppins">TechCombo: Your Trusted Partner for Manpower Outsourcing
                    </p>
                </div>
            </section>

            <section className="mt-4 px-4 md:px-20 lg:px-40 ">
                <Detail information={pagecontent.detail} img="/assets/images/manpower1.jpg" />
            </section>

            <section className="mt-12 px-4 md:px-20 lg:px-40 ">
                <OurServices services={pagecontent.services} img="/assets/images/staff1.webp" />
            </section>

            <section className="mt-12 px-4 md:px-20 lg:px-40 ">
                <WhyChooseUs chooses={pagecontent.paraChooses} img="/assets/images/staff3.webp" />
            </section>


            <Footer />


        </>
    );
}

export default Manpower;