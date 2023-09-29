import React from "react"
import close from "../assets/close.svg"
import view from "../assets/view-arrow.svg"
import back from "../assets/back-arr.svg"
import logo from "../assets/logo.svg"
import ng from "../assets/NG.svg"
import map from "../assets/map.svg"
import downArrow from "../assets/down-arrow.svg"
import searchIcon from "../assets/search-icon.svg"
import searchred from "../assets/search-red.svg"
import hamb from "../assets/hamb.svg"
import locIcon from "../assets/loc-icon.svg"
import { Link } from "react-router-dom"

const Header = () => {
    let allSearchWords = ["Bar", "BBQ", "Chicken", "Cocktails", "Burgers", "Dessert", "Pizza",]

    let [allRegions, setRegions] = React.useState([
        {
            img: map,
            name: "Western Africa"
        },
        {
            img: map,
            name: "Southern Africa"
        },
        {
            img: map,
            name: "Central Africa"
        },
        {
            img: map,
            name: "Northern Africa"
        },
        {
            img: map,
            name: "Eastern Africa"
        },

    ])
    const [menu, setMenu] = React.useState(0)
    const [search, setSearch] = React.useState(0)
    return (
        <>
            <div className="navBar whitespace-nowrap w-full flex items-center p-3 px-7 lg:px-14 justify-between gap-5 shadow z-[99] bg-white sticky top-0">

                <div className="navStart flex items-center gap-5">
                    <a href="/" className="outline-none "> <img draggable={false} src={logo} alt="reisty" className="logo w-[80px]" /></a>

                    <div tabIndex={0} className="regionSelector relative hidden lg:flex cursor-pointer text-sm hover:bg-gray-50 p-2 rounded-md duration-75 gap-2">
                        <img draggable={false} src={ng} className="w-6" />
                        Nigeria
                        <img draggable={false} src={downArrow} className="w-2.5" />

                        <div className="Regions absolute bg-white top-12 px-6 pb-14 pt-9 shadow-lg rounded-md border left-0 cursor-default">
                            <p className="font-medium">Region</p>

                            <div className="allRegions max-h-[50vh] overflow-y-scroll w-max grid grid-cols-3 gap-3 mt-5 px-4">

                                {allRegions.map(region => (
                                    <div key={region.name.replaceAll(" ", '').toLowerCase()} className="region w-max">
                                        <img src={region.img} className="w-[120px]" />
                                        <p className="regionName mt-3 cursor-pointer text-xs">{region.name}</p>
                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                    <div className="searchBar relative hidden lg:flex items-center gap-2 border-2 p-2 py-3 w-[340px] rounded-md bg-white duration-100 z-10 focus-within:border-gray-300">
                        <img draggable={false} src={searchIcon} className="w-4 shrink-0 ml-2" />
                        <input type="text" placeholder="Search restaurants, cuisines or experience" className="text-xs w-full outline-none h-full" />

                        <div tabIndex={-1} className="SearchSug absolute bg-white top-12 border w-full left-0 shadow-lg rounded-md pb-20">
                            <p className="p-2 my-2 px-4 text-sm font-semibold text-redd">All restaurants in Lagos</p>
                            <p className="text-xs px-4 p-3 bg-gray-100 font-semibold">Top searches</p>

                            <div className="allSearches p-5 px-4 max-h-30 flex flex-wrap gap-2">
                                {allSearchWords.map(word => (
                                    <div key={word} className="searchWord border cursor-pointer w-max whitespace-nowrap text-center text-xs p-2 px-4 hover:bg-gray-50 bg-white rounded-md shrink-0 grow-0">{word}</div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>


                <div className="navEnd hidden lg:flex items-center gap-5">
                    <p className="text-redd text-xs font-semibold">For restaurant</p>

                    <button className="logIn text-sm border p-2 px-4 cursor-pointer rounded-md font-medium hover:bg-[#cccccc20] duration-75">Log In</button>
                    <button className="signUp text-sm p-2 px-4 cursor-pointer rounded-md font-medium bg-redd hover:bg-dark duration-75 text-white ">Sign Up</button>
                </div>

                <div className="mobileNavEnd lg:hidden flex gap-5 cursor-pointer">
                    <img onClick={() => { setSearch(1) }} draggable={false} src={searchred} />
                    <img style={!menu ? { transform: "rotate(0deg)" } : { transform: "rotate(-90deg)" }} draggable={false} onClick={() => { setMenu(1) }} src={hamb} className="duration-300 ease-out" />
                </div>
            </div>

            <div style={menu ? { maxHeight: "100vh" } : { maxHeight: "0" }} className="fixed
        top-0 left-0 h-[100vh] lg:hidden bg-redd ease-out opacity-90 duration-200 z-[100] w-full"></div>
            <div style={menu ? { maxHeight: "100vh" } : { maxHeight: "0" }} className="fixed
        top-0 left-0 h-[100vh] lg:hidden delay-300 bg-red-400 opacity-60 ease-out duration-200 z-[100] w-full"></div>


            <div style={menu ? { maxHeight: "100vh" } : { maxHeight: 0 }} className="sideBar lg:hidden fixed
        top-0 left-0 z-90 ease-out duration-200 overflow-hidden flex flex-col w-full h-full">
                <div className="z-90 border-b bg-white  whitespace-nowrap w-full flex items-center p-3 px-7 lg:px-14 justify-between gap-5 shadow">

                    <img draggable={false} src={logo} alt="reisty" className="logo w-[80px]" />
                    <img style={menu ? { transform: "rotate(0deg)" } : { transform: "rotate(90deg)" }} draggable={false} src={close} className=" cursor-pointer duration-300 ease-out" onClick={() => { setMenu(0) }} />
                </div>

                <div style={menu ? { maxHeight: "100vh" } : { maxHeight: "0" }} className="bg-white h-full w-full overflow-hidden px-7 duration-200">
                    <div className="my-1 hover:bg-gray-50 p-2 py-3 mt-7 hover:font-semibold hover:text-redd rounded-md cursor-pointer">About</div>
                    <div className="my-1 p-2 py-3">For restaurant</div>

                    <div className="flex my-5 mt-10 gap-3">
                        <button className="logIn text-sm border p-3 px-4 cursor-pointer rounded-md font-medium hover:bg-[#cccccc20] duration-75 w-full">Log In</button>
                        <button className="signUp text-sm p-3 px-4 cursor-pointer rounded-md font-medium bg-redd hover:bg-dark duration-75 w-full text-white ">Sign Up</button>
                    </div>
                </div>
            </div>
            <div style={search ? { left: "0", opacity: "1" } : { "left": "-100vw", opacity: "80%" }} className="mobileSearch bg-white lg:hidden fixed
        top-0 left-0 z-[110] ease-out overflow-hidden flex flex-col w-full h-[100vh]">
                <div className="flex w-full py-3 p-5 items-center pt-5">
                    <img onClick={() => { setSearch(0) }} draggable={false} className="cursor-pointer" src={back} alt="&larr;" />
                    <span className="w-full text-center font-medium">Search</span>
                </div>

                <div className="flex mb-5 mt-2 px-5 items-center gap-3">
                    <div className="mobileSearchBar flex items-center gap-2 border-2 p-2 py-3 w-full rounded-md bg-white duration-100 z-10 focus-within:border-gray-300">
                        <img draggable={false} src={searchIcon} className="w-4 shrink-0 ml-2" />
                        <input type="text" placeholder="Search restaurants, cuisines or experience" className="text-xs w-full outline-none h-full" />
                    </div>

                    <img src={locIcon} className="mobLocation p-2.5 w-10 h-10 border-2 rounded-md cursor-pointer" />
                </div>

                <div className="SearchSug bg-white w-full pb-20">
                    <p className="text-xs p-2 bg-gray-100 font-semibold"></p>

                    <Link to="" className="flex w-full justify-between p-2 my-2 px-4">
                        <p className="text-sm font-semibold text-redd">All restaurants in Lagos</p>
                        <img draggable={false} src={view} className="w-2 shrink-0" />
                    </Link>

                    <p className="text-xs px-4 p-3 font-semibold">Top searches</p>

                    <div className="allSearches p-5 px-4 max-h-30 grid grid-cols-4 md:grid-cols-6 gap-2">
                        {allSearchWords.map(word => (
                            <div key={word} className="searchWord border cursor-pointer w-full text-center sm:text-xs py-2 pt-3 px-4 flex items-center hover:bg-gray-50 bg-white justify-center rounded-md text-xxs shrink-0">{word}</div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header;