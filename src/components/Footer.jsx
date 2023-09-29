import logo from "../assets/logo-white.svg"
import facebook from "../assets/facebook-icon.svg"
import instagram from "../assets/instagram-icon.svg"
import discord from "../assets/discord-icon.svg"
import twitter from "../assets/twitter-icon.svg"

const Footer = () => {
    return (
        <>
            <div className="footer w-full p-5 py-10 bg-[#191919] md:px-14 text-white">
                <div className="flex gap-10 flex-col md:flex-row">
                    <div className="flex flex-col text-xs gap-5 max-w-[400px]">
                        <img src={logo} alt="reisty" className="w-[90px]" />
                        With its innovative use of technology, Reisty is revolutionizing the hospitality industry by providing cutting-edge solutions to some of the world's finest dining establishments.
                        <div className="links flex items-center gap-3">
                            <a href="http://"><img src={facebook} alt="" className="h-8 w-8 shrink-0 grow-0 p-2 bg-[#ffffff30] rounded-full overflow-visible hover:bg-[#ffffff50] duration-150" /></a>
                            <a href="http://"><img src={instagram} alt="" className="h-8 w-8 shrink-0 grow-0 p-2 bg-[#ffffff30] rounded-full overflow-visible hover:bg-[#ffffff50] duration-150" /></a>
                            <a href="http://"><img src={discord} alt="" className="h-8 w-8 shrink-0 grow-0 p-2 bg-[#ffffff30] rounded-full overflow-visible hover:bg-[#ffffff50] duration-150" /></a>
                            <a href="http://"><img src={twitter} alt="" className="h-8 w-8 shrink-0 grow-0 p-2 bg-[#ffffff30] rounded-full overflow-visible hover:bg-[#ffffff50] duration-150" /></a>
                        </div>
                    </div>
                    <div className="allLinkSet w-full grid grid-cols-2 lg:grid-cols-4 gap-5 gap-y-10">
                        <div className="linkSet w-full flex flex-col gap-3">
                            <p className="mb-1.5 text-sm whitespace-nowrap border-b-white border-b-2 pb-2 w-7">Discover</p>
                            <a href="" className="text-xs ">Trending restaurant</a>
                            <a href="" className="text-xs ">Nearby restaurant</a>
                            <a href="" className="text-xs ">New on reisty</a>
                            <a href="" className="text-xs ">Events</a>
                        </div>

                        <div className="linkSet w-full flex flex-col gap-3">
                            <p className="mb-1.5 text-sm whitespace-nowrap border-b-white border-b-2 pb-2 w-7">About</p>
                            <a href="" className="text-xs ">About us</a>
                            <a href="" className="text-xs ">Terms and Conditions</a>
                            <a href="" className="text-xs ">Privacy policy</a>
                        </div>

                        <div className="linkSet w-full flex flex-col gap-3">
                            <p className="mb-1.5 text-sm whitespace-nowrap border-b-white border-b-2 pb-2 w-7">Top Facilities</p>
                            <a href="" className="text-xs ">About us</a>
                            <a href="" className="text-xs ">Terms and Conditions</a>
                            <a href="" className="text-xs ">Privacy policy</a>
                        </div>

                        <div className="linkSet w-full flex flex-col gap-3">
                            <p className="mb-1.5 text-sm whitespace-nowrap border-b-white border-b-2 pb-2 w-7">For Restaurants</p>
                            <a href="" className="text-xs ">Reisty Overview</a>
                            <a href="" className="text-xs ">Plans and Pricing</a>
                            <a href="" className="text-xs ">New on reisty</a>
                            <a href="" className="text-xs ">Features</a>
                            <a href="" className="text-xs ">Help Desk</a>
                        </div>

                    </div>
                </div>

                <div className="text-xs mt-10 border-t border-white w-full flex flex-col items-center pt-10 md:flex-row md:justify-between">
                    <span className="text-center">&copy; 2023 Reisty. All rights reserved.</span>

                    <div className="flex gap-5 sm:w-max w-full justify-between mt-6 md:mt-0">
                        <a href="" className="">Global Privacy Policy</a>
                        <a href="" className="">Terms of service</a>
                        <a href="" className="">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;