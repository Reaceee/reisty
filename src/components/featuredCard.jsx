import star from "../assets/star.svg"
import starhalf from "../assets/star-half.svg"
import heart from "../assets/heart.png"
import React, { useState } from "react"
import arrow from "../assets/next.svg"

const featCard = (props) => {
    console.clear()
    let [curImg, setImg] = useState(0)
    const Slider = () => {
        return (<>
            <div className="slider flex gap-1">
                {
                    props.img.map(img => (
                        <div key={props.img[curImg].PhotoId} style={curImg == props.img.indexOf(img) ? { background: "white" } : { background: "#ffffff90" }} className="dot w-1.5 h-1.5 bg-[#fffff90] cursor-pointer rounded-full text-white"></div>
                    ))
                }
            </div></>)
    }
    return (
        <>
            <div className="ftcard duration-150 overflow-hidden shrink-0 grow-0 w-[200px] lg:w-full min-h-[200px] h-full border">
                <div style={{ backgroundImage: `url("${props.img[curImg].Link}")` }} className="showPics relative w-full h-[170px] bg-cover bg-center bg-no-repeat flex items-end justify-center p-3 duration-200 hover:bg-[#19191990] bg-blend-overlay">
                    <img draggable={false} src={heart} className="w-6 bg-[#00000089] rounded-full overflow-visible p-0.5 cursor-pointer active:p-1 duration-75 absolute top-3 right-3" />

                    <div className="arrows flex w-full absolute top-1/2 justify-between px-3 -translate-y-1/2 duration-150">
                        <img onClick={() => { setImg(prev => prev - 1) }} style={curImg == 0 ? { visibility: "hidden" } : { visibility: "visible" }} draggable={false} src={arrow} alt="&larr;" className="rotate-180 cursor-pointer" />
                        <img onClick={() => { setImg(prev => prev + 1) }} style={curImg < props.img.length - 1 ? { visibility: "visible" } : { visibility: "hidden" }} draggable={false} src={arrow} alt="&larr;" className=" cursor-pointer" />
                    </div>
                    <Slider />
                </div>

                <div className="infos p-3">
                    <p className="name text-sm font-semibold">{props.name}</p>
                    <p className="location text-xs mt-2">{props.location}</p>
                    <div className="stars items-center flex pb-3 gap-1 mt-1">
                        <img draggable={false} src={star} className="w-3" />
                        <img draggable={false} src={star} className="w-3" />
                        <img draggable={false} src={star} className="w-3" />
                        <img draggable={false} src={star} className="w-3" />
                        <img draggable={false} src={starhalf} className="w-3" />
                        <p className="text-xs ml-1">{props.rating}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default featCard;