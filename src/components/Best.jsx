import arrowRight from "../assets/right-arrow.svg"
import FeatCard from "./featuredCard";
import gray from "../assets/gray.png"
const Best = () => {

    let Best = [
        {
            RestaurantName: "Loading",
            RestaurantId: "1",
            Country: "...",
            State: "...",
            Rating: "",
            Photos: [{
                Link: gray
            },
            {
                Link: gray
            },
            {
                Link: gray
            }
            ]
        },
        {
            RestaurantName: "Loading",
            RestaurantId: "2",
            Country: "...",
            State: "...",
            Rating: "",
            Photos: [{
                Link: gray
            },
            {
                Link: gray
            },
            {
                Link: gray
            }
            ]
        },
        {
            RestaurantName: "Loading",
            RestaurantId: "3",
            Country: "...",
            State: "...",
            Rating: "",
            Photos: [{
                Link: gray
            },
            {
                Link: gray
            },
            {
                Link: gray
            }
            ]
        },
        {
            RestaurantName: "Loading",
            RestaurantId: "4",
            Country: "...",
            State: "...",
            Rating: "",
            Photos: [{
                Link: gray
            },
            {
                Link: gray
            },
            {
                Link: gray
            }
            ]
        },

    ]
    return (
        <>
            <div className="featured w-full p-8 md:px-14 px-5">

                <div className="head flex gap-5 items-center justify-between w-full pr-5">
                    <div className="">
                        <p className="font-semibold">Best restaurants in Africa</p>
                        <p className="text-xxs md:text-xs">Discover the best restaurants in your local area</p>
                    </div>


                    <div className="text-sm items-center font-semibold gap-2 flex text-redd whitespace-nowrap cursor-pointer">
                        See more
                        <img src={arrowRight} alt="&rarr;" className="w-5" />
                    </div>
                </div>

                <div className="allCards py-4 w-full overflow-x-scroll flex mt-5 lg:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        Best.map(set => (
                            <FeatCard key={"popular" + set.RestaurantId} name={set.RestaurantName} location={set.location} rating={set.Rating} img={set.Photos} />
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default Best;