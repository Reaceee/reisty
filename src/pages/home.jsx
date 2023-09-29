import React from "react"
import herobg from "../assets/herobg.png"
import locIcon from "../assets/loc-icon.svg"
import searchIcon from "../assets/search-white.svg"
import searchGray from "../assets/search-icon.svg"
import downArrow from "../assets/down-select.svg"
import Featured from "../components/Featured"
import Discover from "../components/Discover"
import GuestNumber from "../components/GuestNumber"
import Claim from "../components/claim"
import Popular from "../components/Popluar"
import Best from "../components/Best"
import Download from "../components/Download"
import Calendar from "../components/Calendar"
const Home = () => {
    console.clear()
    const [keyWord, setKeyword] = React.useState("Cuisines, restaurant")
    const [today, setDay] = React.useState("2020-01-01")
    const [maxDate, setmaxDay] = React.useState("2040-01-01")

    let SearchSugs = ["Dinary", "Restaurants", "Cuisines"]

    React.useEffect(() => {
        let date = new Date()
        let day = date.getDate()
        let month = date.getMonth()
        let year = date.getFullYear()

        day < 10 ? day = "0" + day : day
        month < 10 ? month = "0" + (month + 1) : month = month + 1

        setDay(`${year.toString()}-${month.toString()}-${day.toString()}`)
        setmaxDay(`${(year + 10)}-${month.toString()}-${day.toString()}`)
    }, [])

    return (
        <>
            <div className="body relative">
                <div style={{ backgroundImage: `url(${herobg})` }} className="hero w-full bg-[#1616169f] bg-blend-overlay pb-10 pt-14 min-h-[80vh] flex items-center justify-center bg-cover bg-top">

                    <div className="heroContents md:px-5 text-white text-center w-[90%] flex flex-col gap-2.5 items-center">
                        <p className="text-2xl md:text-3xl lg:text-4xl max-w-[450px] md:max-w-[700px] lg:leading-10 font-bold px-5">Discover the perfect table for my occasion with ease.</p>

                        <p className="text-xs leading-snug max-w-[650px]">Browse through a wide selection of restaurants and effortlessly find the perfect table for any occasion, whether it's a romantic dinner for two, a birthday celebration with friends, or business meeting with colleagues.</p>

                        <div className="quickFinder flex py-5 md:py-0 flex-col md:flex-row items-center mt-3 text-left text-black w-full bg-white text-xs min-w-max whitespace-nowrap rounded-2xl px-5 max-w-[800px]">

                            <div tabIndex={0} className="searchWord relative w-full border outline-none rounded-md p-2 mb-2 md:mb-0 md:border-0 md:rounded-none md:p-0 px-6">
                                <p className="text-xxs text-gray-500">Search</p>
                                <p spellCheck={false} className="Keyword w-[150px] overflow-clip text-ellipsis font-medium leading-relaxed outline-none empty:before:content-['Find_by_key_word'] before:content-none
        ">{keyWord}</p>

                                <div className="heroSearchSug absolute duration-150 opacity-0 max-h-0 bg-white top-14 left-0 md:-left-4 rounded-md p-5 z-10 border shadow-lg md:w-max w-full">

                                    <div className="searchBar flex items-center gap-2 border p-2 py-3 w-full rounded-full bg-white duration-100 z-10 focus-within:border-redd">
                                        <img draggable={false} src={searchGray} alt="reisty" className="w-4 shrink-0 ml-2" />
                                        <input onChange={e => { setKeyword(e.target.value) }} type="text" placeholder="Search restaurants, cuisines" className="text-xs w-full outline-none h-full" />
                                    </div>
                                    <div className="SearchSugs py-5 w-full max-h-30 flex flex-wrap max-w-[340px] gap-2">
                                        {SearchSugs.map(word => (
                                            <div key={word} className="searchWord border cursor-pointer w-max whitespace-nowrap text-center text-xxs p-2 px-4 hover:bg-gray-50 bg-white rounded-md shrink-0 grow-0">{word}</div>
                                        ))}
                                    </div>

                                </div>
                            </div>


                            <div className="loc w-full border-x flex items-center justify-center px-6 mx-4 md:h-[60px] cursor-pointer border rounded-md py-3 mb-2 md:mb-0 md:border-y-0 md:rounded-none md:p-2 ">
                                <span className="mr-3 text-xs font-medium md:hidden">Location</span>
                                <img draggable={false} src={locIcon} className="w-5" />
                            </div>
                            <div tabIndex={0} className="dateSelector justify-between relative w-full px-6 outline-none p-2 flex gap-5 items-center border rounded-md mb-2 md:mb-0 md:border-0 md:rounded-none md:py-2.5 ">
                                <div className="selectorPad">
                                    <p className="text-xxs text-gray-500">Date</p>
                                    <input id="dateInput" min={today} value={today} max={maxDate} onChange={(e) => setDay(e.target.value)} type="date" className="font-medium leading-relaxed" />
                                </div>


                                <img draggable={false} src={downArrow} className="w-2 cursor-pointer shrink-0 grow-0" />

                                <Calendar />

                            </div>

                            <div className="timeSelector justify-between w-full border-x p-2.5 flex gap-5 items-center mx-2 border rounded-md px-6 mb-2 md:mb-0 md:border-y-0 md:rounded-none md:py-2.5 ">
                                <div className="selectorPad">
                                    <p className="text-xxs text-gray-500">Time</p>
                                    <input id="timeInput" value="16:00" type="Time" className="font-medium leading-relaxed" />
                                </div>
                                <img draggable={false} src={downArrow} className="w-2 cursor-pointer shrink-0 grow-0" />
                            </div>

                            <div tabIndex={0} className="guestSelector relative justify-between w-full md:min-w-[100px] lg:min-w-[200px] p-2.5 flex gap-5 items-center border rounded-md px-6 mb-2 md:mb-0 md:border-0 md:rounded-none md:py-2.5 outline-none focus:bg-gray-100 focus:z-20">
                                <div className="">
                                    <p className="text-xxs text-gray-500">Guest size</p>
                                    <div className="guestNum font-medium leading-relaxed">2 guests</div>
                                </div>

                                <img draggable={false} src={downArrow} className="w-2 cursor-pointer shrink-0 grow-0" />


                                <div className="guestNumbers absolute duration-150 top-16 left-0 rounded-b-md border shadow-lg p-3 bg-white min-w-max w-full">
                                    <GuestNumber no="1" />
                                    <GuestNumber no="2" />
                                    <GuestNumber no="3" />
                                    <GuestNumber no="4" />
                                    <GuestNumber no="5" />
                                    <GuestNumber no="6" />
                                    <GuestNumber no="7" />
                                    <GuestNumber no="8" />
                                    <GuestNumber no="9" />
                                    <GuestNumber no="10" />
                                </div>
                            </div>
                            <div className="w-full md:w-fit md:ml-8 rounded-md bg-redd cursor-pointer hover:bg-dark flex md:contents items-center py-1 md:rounded-full justify-center">
                                <img draggable={false} src={searchIcon} className=" w-9 h-9 p-2.5 cursor-pointer md:bg-redd  shrink-0 rounded-full overflow-visible md:ml-4" />
                                <span className="text-white md:hidden">Search</span>
                            </div>

                        </div>

                    </div>

                </div>
                <Featured />
                <Discover />
                <Popular />
                <Claim />
                <Best />
                <Download />
            </div>
        </>
    )
}

export default Home;