


const HoverCard = ({cards}) => {

   
    return (

        <div className="flex flex-col md:flex-row  justify-center items-center gap-4 flex-wrap" >

            {cards.map((card) => (
                <div key={card.id} className="relative group w-64 h-80 bg-gray-100 shadow-lg rounded-lg overflow-hidden transition-transform transform " data-aos="fade-up">
                    <img src={`/assets/images/${card.id}.webp`} alt="" className="absolute  w-full h-full object-cover hover:scale-105"/>


                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-70 transition-opacity"></div>

                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                        <h3 className="text-3xl font-bold text-white transition-transform transform text-center group-hover:-translate-y-2">
                            {card.title}
                        </h3>
                        <p className="text-sm text-white opacity-0 transition-opacity group-hover:opacity-100  p-4">
                            {card.description}
                        </p>
                    </div>

                </div>
            ))}
        </div>
    );

}

export default HoverCard;