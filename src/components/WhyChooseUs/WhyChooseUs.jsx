

const WhyChooseUs = ({chooses, img}) => {


    

    return (

        <div className="w-full flex flex-col md:flex-row justify-center items-center " data-aos="fade-up">

            <div className="w-full md:w-1/2">
                <h1 className="text-slate-700 font-bold text-4xl md:text-6xl text-center text-wrap font-poppins">"Why Choose Us?"</h1>
                <br />

                <ul className="flex flex-col justify-center items-start text-xl font-poppins font-semibold leading-7 p-4">

                    {chooses.map((choose, index) => (
                        <li key={index}  className="relative pl-8 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-[url('/assets/images/check.webp')]
                            before:bg-contain before:bg-no-repeat hover:before:scale-125 hover:before:w-4 hover:before:h-4 transition-transform mb-4"
                        >
                            <h3>{choose.head}</h3>
                            <p className="text-base">{choose.desc}</p>
                            <p className="text-base">{choose.desc2}</p>
                        </li>
                    ))}

                </ul>
            </div>

            <div className="w-full md:w-1/2 flex justify-center items-center mb-4" data-aos="fade-up">
                <img src={img} alt="choose  " className="md:size-8/12 hover:scale-103" loading="lazy" />
            </div>

        </div>


    );


}
export default WhyChooseUs;