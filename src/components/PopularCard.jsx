import heart from "../assets/heart.png"
import { useState } from "react"
import arrow from "../assets/next.svg"

const featCard = (props) => {
    let [curImg, setImg] = useState(0)
    
    return (
        <>
            <div className="ftcard duration-150 overflow-hidden shrink-0 grow-0 w-[200px] lg:w-full min-h-[200px] h-full border">
                <div style={{ backgroundImage: `url(${props.img[curImg]})` }} className="showPics relative w-full h-[170px] bg-cover bg-center bg-no-repeat flex items-end justify-center p-3 duration-200 hover:bg-[#19191990] bg-blend-overlay">
                    <img draggable={false} src={heart} className="w-6 bg-[#00000089] rounded-full overflow-visible p-0.5 cursor-pointer active:p-1 duration-75 absolute top-3 right-3" />

                    <div className="arrows flex w-full absolute top-1/2 justify-between px-3 -translate-y-1/2 duration-150">
                        <img onClick={() => { setImg(prev => prev - 1) }} style={curImg == 0 ? { visibility: "hidden" } : { visibility: "visible" }} draggable={false} src={arrow} alt="&larr;" className="rotate-180 cursor-pointer" />
                        <img onClick={() => { setImg(prev => prev + 1) }} style={curImg < props.img.length - 1 ? { visibility: "visible" } : { visibility: "hidden" }} draggable={false} src={arrow} alt="&larr;" className=" cursor-pointer" />
                    </div>
                    <div className="slider flex gap-1">
                        {props.img.map(img => (
                            <div style={curImg == props.img.indexOf(img) ? { background: "white" } : { background: "#ffffff90" }} className="dot w-1.5 h-1.5 bg-[#fffff90] cursor-pointer rounded-full text-white"></div>
                        ))}
                    </div>
                </div>

                <div className="infos p-3">
                    <p className="name text-sm font-semibold">{props.name}</p>
                    <p className="location text-xs mt-2">{props.location}</p>
                </div>
            </div>
        </>
    )
}
export default featCard;