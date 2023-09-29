import DiscoverCard from "./discoverCard";
import greenbg from "../assets/slider-bg-green.png"
import bluebg from "../assets/slider-bg-blue.png"
import brownbg from "../assets/slider-bg-brown.png"

const Discover = () => {
    return (
        <>
            <div className="discover w-full p-8 md:px-14 px-5">

                <div className="head flex gap-5 items-center justify-between w-full">
                    <div className="">
                        <p className="font-semibold">Discover our finest restaurants restaurants
                        </p>
                    </div>
                </div>

                <div className="allCards mt-5 flex  lg:grid w-full snap-x snap-always snap-mandatory overflow-x-scroll sm:grid-cols-2 lg:grid-cols-4 gap-4">
                   <DiscoverCard img={greenbg} category="Fine Dining"/>
                   <DiscoverCard img={bluebg} category="Buffet"/>
                   <DiscoverCard img={brownbg} category="Family"/>
                   <DiscoverCard img={greenbg} category="Cafes"/>
                </div>

            </div>
        </>
    )
}

export default Discover;