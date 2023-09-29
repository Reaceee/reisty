import { Link } from "react-router-dom";
import herobg from "../assets/herobg.png"
import waitlist from "../assets/waitlist.png"

const Claim = () => {

    return (
        <>
            <div className="flex flex-col md:flex-row w-full p-5 md:px-14 gap-2 my-10">

                <div style={{ backgroundImage: `url(${herobg})` }} className="w-full md:w-1/2 p-5 py-8 min-h-[350px] bg-gray-800 text-white bg-blend-overlay bg-cover bg-center">
                    <p className="text-sm font-semibold">RESTAURANT OWNERS</p>
                    <p className="text-2xl font-semibold leading-snug py-2 md:py-3 md:text-3xl max-w-[300px]">CLAIM YOUR RESTAURANT TODAY!</p>
                    <p className=" text-xxs max-w-[300px]">Claim your restaurant on Reisty to take control of your online presence, manage reservations, menus, and reviews, and showcase your establishment to potential diners while maintaining full control.</p>

                    <a href="" className="rounded-full"><div className="text-sm hover:bg-gray-100 bg-white text-black mt-5 p-3 px-6 text-center rounded-full font-medium w-max">See full list</div></a>
                </div>

                <div style={{ backgroundImage: `url(${waitlist})` }} className="w-full md:w-1/2 min-h-[350px] flex-col text-black bg-cover flex bg-center">
                    <img src={waitlist} className="h-[130px] md:hidden object-center object-cover w-full" />
                    <div className="lg:w-[60%] md:w-[80%] w-full h-full min-h-[350px] p-5 py-8 bg-gray-100">
                        <p className="text-sm font-semibold">WAITLIST MANAGEMENT</p>
                        <p className="text-2xl font-semibold leading-snug py-2 md:py-3 md:text-3xl max-w-[300px]">WAITLIST MANAGEMENT WITH RESTY</p>
                        <p className=" text-xxs">Maximize seating efficiency with Reisty's waitlist management tool. Estimate wait times, send SMS notifications, and increase revenue while improving customer satisfaction</p>

                        <a href="" className="rounded-full"><div className="text-sm bg-redd text-white hover:bg-dark mt-5 p-3 px-6 text-center rounded-full font-medium w-max">Create a free account</div></a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Claim;