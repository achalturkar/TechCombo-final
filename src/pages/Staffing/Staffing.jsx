import Footer from "/src/components/Footer/Footer.jsx";
import Navbar from "/src/components/Navbar/Navbar.jsx";
import Detail from "/src/components/Detail/Detail.jsx";
import OurServices from "/src/components/OurServices/OurServices.jsx";
import WhyChooseUs from "/src/components/WhyChooseUs/WhyChooseUs.jsx"

const Staffing = () => {
 const pagecontent={

    detail: [
        {
            head: '"Staffing Solutions Tailored to Your Need"',
            para1: "At TechCombo, we take pride in offering innovative staffing solutions designed to connect businesses with top-tier talent. Our expertise lies in understanding the unique requirements of every organization and providing tailored hiring strategies. Whether it’s building long-term teams or meeting project-based demands, we ensure seamless and efficient hiring processes.",
            para2: "We specialize in sourcing full-time employees, contractors, and freelancers who bring the skills and expertise to align perfectly with your business goals. Our commitment to quality ensures that every candidate undergoes a thorough screening process to match your specific needs, fostering mutual growth and success.",
            para3: " With an extensive network of skilled professionals, TechCombo simplifies the complex process of talent acquisition. By focusing on flexibility, precision, and reliability, we empower businesses to focus on their core operations while we handle their staffing needs efficiently and effectively.",
            para4: ""
        }
    ],

     paraChooses :[
        { head: "Domain Expertise:", desc: "Extensive experience in IT and non-IT staffing." },
        { head: "Customized Solutions:", desc: "Tailored services to match your unique business requirements." },
        { head: "Speed and Efficiency:", desc: "Rapid hiring processes to minimize downtime." },
        { head: "Large Talent Pool:", desc: "Access to a wide range of skilled candidates." },
    ],
     
     services:[
        {head:"Permanent Staffing", desc1:"We help you hire top-tier professionals for long-term roles.", desc2:"A thorough screening process ensures candidates are a perfect fit for your organization."},
        {head:"Contract Staffing", desc1:"Flexibility to scale your workforce based on project needs.", desc2:"Quickly onboard skilled professionals for short-term or project-based requirements."},
        {head:"Freelance Talent Acquisition", desc1:"Access a pool of freelance experts to meet specialized needs.", desc2:"Ideal for businesses looking for on-demand talent."},

    ]
}
    return (

        <>
            <Navbar />

            <section className="relative w-full h-96 bg-cover bg-center md:bg-start object-fit  bg-no-repeat" style={{ backgroundImage: "url(/src/assets/images/staff.webp)" }}>
                <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex flex-col items-center justify-center">
                    <h1 className="text-white text-5xl md:text-6xl font-bold font-poppins">Staffing Solution</h1>
                    <p className="text-center text-md text-white font-poppins">Staffing Excellence, Delivered by TechCombo</p>
                </div>
            </section>

            <section className="mt-4 px-4 md:px-20 lg:px-40 ">
                <Detail information={pagecontent.detail} img="/src/assets/images/staff2.jpg"/>
            </section>

            <section className="mt-12 px-4 md:px-20 lg:px-40 ">
                <OurServices services={pagecontent.services} img="/src/assets/images/staff1.webp" />
            </section>

            <section className="mt-12 px-4 md:px-20 lg:px-40 ">
                <WhyChooseUs chooses={pagecontent.paraChooses} img="/src/assets/images/staff3.webp" />
            </section>


            <Footer />


        </>
    );
}

export default Staffing;