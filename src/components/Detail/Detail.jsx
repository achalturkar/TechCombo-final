


const Detail = ({ information, img }) => {

    return (

        <div className="w-full flex flex-col md:flex-row justify-center items-center  ">


            <div className="w-full md:w-1/2 mb-4 " data-aos="fade-up">

                {information.map((info, index) => (
                    <li key={index} className="list-none">

                        <h1 className="text-slate-700 font-bold text-xl text-center">{info.head}</h1>
                        <br />

                        <h4 className="text-black font-md text-base font-poppins">{info.para1}
                            <br />
                            <br />
                            {info.para2}
                            <br />
                            <br />
                            {info.para3}
                            <br />
                            <br />
                            {info.para4}
                        </h4>
                    </li>
                ))}


            </div>

            <div className="w-full md:w-1/2 flex justify-center items-center mb-4" data-aos="fade-up">

                <img src={img} alt="" className="md:size-8/12 hover:scale-104" />

            </div>

        </div>

    );
}

export default Detail;