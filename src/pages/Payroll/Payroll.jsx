import Footer from "/src/components/Footer/Footer.jsx";
import Navbar from "/src/components/Navbar/Navbar.jsx";
import WhyChooseUs from "/src/components/WhyChooseUs/WhyChooseUs.jsx"
import Detail from "/src/components/Detail/Detail.jsx"
import OurServices from "/src/components/OurServices/OurServices.jsx";
import { Helmet } from "react-helmet-async";

const Payroll = () => {

    const pagecontent = {
        detail: [
            {
                head: '"Efficient Payroll Outsourcing for Maximum Productivity"',
                para1: "Managing payroll is a crucial yet challenging task for businesses, often requiring significant time and resources to ensure accuracy and compliance. Errors or inefficiencies in payroll can impact employee satisfaction and hinder operational productivity.",
                para2: "At TechCombo, we offer professional Payroll Outsourcing services to simplify your payroll processes and minimize administrative burdens. Our expertise covers everything from salary calculations and tax compliance to benefits administration, tailored to suit your organization’s unique needs.",
                para3: "By partnering with TechCombo, you can ensure secure, accurate, and reliable payroll management. Focus on growing your business while we handle the complexities, providing you with peace of mind and operational efficiency.",
                para4: ""
            }
        ],

        services: [
            {
                head: "Payroll Management",
                desc1: "Complete payroll processing, including salary calculations and disbursements.",
                desc2: "Customized reports for better financial insights and decision-making."
            },
            {
                head: "Tax Compliance",
                desc1: "Ensure accurate tax deductions and timely filings.",
                desc2: "Stay compliant with ever-changing labor laws and tax regulations."
            },
            {
                head: "Employee Benefits Administration",
                desc1: "Manage employee benefits such as health insurance, bonuses, and incentives.",
                desc2: "Streamlined handling of leaves, gratuities, and other perks."
            },
            {
                head: "Records and Documentation",
                desc1: "Maintain accurate employee records with secure data storage.",
                desc2: "Generate payslips, year-end statements, and compliance reports."
            },
        ],

        paraChooses: [
            { head: "Time-Saving:", desc: "Free up valuable time to focus on strategic business growth." },
            { head: "Cost-Effective Solutions: ", desc: "Reduce overhead costs by outsourcing payroll management to experts." },
            { head: "Data Security:", desc: "Protect sensitive payroll information with secure systems and processes." },
            { head: "Scalability: ", desc: "Flexible solutions designed to grow with your business needs." },
        ],
    }

    return (

        <>
            <Helmet>
                <title>Payroll Outsourcing - TechCombo</title>
                <meta name="description" content="Simplify payroll management with TechCombo's professional payroll outsourcing services for businesses of all sizes." />
                <meta name="keywords" content="Payroll outsourcing, payroll services, TechCombo, payroll management, NonIT payroll, IT Payroll" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Payroll Outsourcing - TechCombo" />
                <meta property="og:description" content="Manage your payroll efficiently with TechCombo's expert outsourcing solutions." />
                <meta property="og:url" content="https://techcombo.in/payroll" />
                <meta property="og:type" content="website" />
            </Helmet>

            <Navbar />

            <section className="relative w-full h-96 bg-cover bg-center object-fit  bg-no-repeat" style={{ backgroundImage: "url(/assets/images/paymain.webp)" }}>
                <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex flex-col items-center justify-center text-wrap">
                    <h1 className="text-white text-5xl md:text-6xl font-bold font-poppins text-center">Payroll Outsourcing</h1>
                    <p className="text-center text-md text-white font-poppins">TechCombo: Managing Payroll So You Can Manage Success</p>
                </div>
            </section>

            <section className="mt-4 px-4 md:px-20 lg:px-40 ">
                <Detail information={pagecontent.detail} img="/assets/images/payroll1.webp" />
            </section>

            <section className="mt-12 px-4 md:px-20 lg:px-40 ">
                <OurServices services={pagecontent.services} img="/assets/images/payroll.webp" />
            </section>

            <section className="mt-12 px-4 md:px-20 lg:px-40 ">
                <WhyChooseUs chooses={pagecontent.paraChooses} img="/assets/images/staff3.webp" />
            </section>


            <Footer />


        </>
    );
}

export default Payroll;