import mockup from "../assets/mock-up.png"
import playStore from "../assets/google-play.svg"
import appStore from "../assets/app-store.svg"
// import pattern from "../assets/pattern.png"
const Download = () => {
    return (
        <>
            <div className="download bg-redd text-center mt-10 flex lg:items-center w-full flex-col lg:flex-row min-h-[300px] justify-center lg:text-left lg:justify-between pt-5 lg:pr-14 gap-10">
                <div className="text-white w-full p-5 font-semibold lg:max-w-[500px] lg:px-14 md:py-8 flex items-center lg:items-start flex-col">
                    <p className="text-2xl md:text-3xl mb-4 max-w-[400px] lg:max-w-[350px] md:leading-snug">Discover the finest restaurants on Reisty</p>
                    <p className="text-xs font-normal md:max-w-[600px]">Download the app now and enjoy seamless restaurant reservations, personalized dining experiences, and more. Available on the App Store and Google Play Store. Get it today and elevate your dining adventures with Reisty.</p>

                    <div className="downloadLinks flex gap-5 my-5 w-full md:w-max justify-center">
                        <a href="">   <img src={playStore} className="" /></a>
                        <a href="">   <img src={appStore} className="" /></a>
                    </div>
                </div>

                <img src={mockup} className="self-center lg:self-end px-5" />
            </div>


        </>
    )
}
export default Download;