import arrowRight from "../assets/right-arrow.svg"
import PopularCard from "./PopularCard";
import gray from "../assets/gray.png"

const Popular = () => {

    let AllBest = [
        {
            RestaurantId: 1,
            RestaurantName: "Food Palace",
            location: "Lekki, Lagos",
            imgs: [gray]
        },
        {
            RestaurantId: 2,
            RestaurantName: "KFC",
            location: "Lagos, Nigeria",
            imgs: [gray]
        },
        {
            RestaurantId: 3,
            RestaurantName: "Ary's Kitchen",
            location: "Ogun, Naija",
            imgs: [gray]
        },
        {
            RestaurantId: 4,
            RestaurantName: "Mr Biggs",
            location: "Lekki, Lagos",
            imgs: [gray]
        },
    ]
    return (
        <>
            <div className="popular w-full p-8 md:px-14 px-5">

                <div className="head flex gap-5 items-center justify-between w-full pr-5">
                    <div className="">
                        <p className="font-semibold">Popular places</p>
                        <p className="text-xxs md:text-xs">Discover the best restaurants in your local area</p>
                    </div>


                    <div className="text-sm items-center font-semibold gap-2 flex text-redd whitespace-nowrap cursor-pointer">
                        See more
                        <img src={arrowRight} alt="&rarr;" className="w-5" />
                    </div>
                </div>

                <div className="allCards py-4 w-full overflow-x-scroll flex mt-5 lg:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        AllBest.map(set => (
                            <PopularCard key={"popular" + set.RestaurantId} name={set.RestaurantName} location={set.location} img={set.imgs} />
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default Popular;
